package service

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/joenathan-15/kilas/dto"
)

type AIService struct{}

func NewAIService() *AIService {
	return &AIService{}
}

type deepSeekChatRequest struct {
	Model          string                 `json:"model"`
	Messages       []deepSeekChatMessage  `json:"messages"`
	Temperature    float64                `json:"temperature"`
	ResponseFormat deepSeekResponseFormat `json:"response_format"`
}

type deepSeekChatMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type deepSeekResponseFormat struct {
	Type string `json:"type"`
}

type deepSeekChatResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
}

func (s *AIService) GenerateCards(text string, count int, language string) (*dto.GeneratedDeckData, error) {
	apiKey := strings.TrimSpace(os.Getenv("DEEPSEEK_API_KEY"))
	if apiKey == "" {
		return nil, errors.New("AI not configured: DEEPSEEK_API_KEY is missing")
	}

	targetLang := "Indonesian"
	if language == "en" {
		targetLang = "English"
	}

	systemPrompt := fmt.Sprintf(
		"You are an expert educator creating flashcards for students. Generate the content in %s. Generate a title, a short description, 3-5 relevant tags, and exactly %d high-quality flashcard pairs from the study material. Return only a valid JSON object matching this schema: {\"title\": \"string\", \"description\": \"string\", \"tags\": [\"string\"], \"cards\": [{\"front\": \"question\", \"back\": \"answer\"}]}. Keep answers concise. Use $LaTeX$ for math formulas.",
		targetLang,
		count,
	)

	payload := deepSeekChatRequest{
		Model: "deepseek-chat",
		Messages: []deepSeekChatMessage{
			{Role: "system", Content: systemPrompt},
			{Role: "user", Content: text},
		},
		Temperature:    0.7,
		ResponseFormat: deepSeekResponseFormat{Type: "json_object"},
	}

	requestBody, err := json.Marshal(payload)
	if err != nil {
		return nil, fmt.Errorf("failed to encode DeepSeek request: %w", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 90*time.Second)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, "https://api.deepseek.com/chat/completions", strings.NewReader(string(requestBody)))
	if err != nil {
		return nil, fmt.Errorf("failed to create DeepSeek request: %w", err)
	}
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{Timeout: 90 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("DeepSeek API request failed: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(io.LimitReader(resp.Body, 4<<20))
	if err != nil {
		return nil, fmt.Errorf("failed to read DeepSeek response: %w", err)
	}
	if resp.StatusCode < http.StatusOK || resp.StatusCode >= http.StatusMultipleChoices {
		return nil, fmt.Errorf("DeepSeek API returned status %d: %s", resp.StatusCode, strings.TrimSpace(string(body)))
	}

	var result deepSeekChatResponse
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, fmt.Errorf("failed to parse DeepSeek response: %w", err)
	}
	if len(result.Choices) == 0 || strings.TrimSpace(result.Choices[0].Message.Content) == "" {
		return nil, errors.New("AI returned no response")
	}

	content := strings.TrimSpace(result.Choices[0].Message.Content)
	if strings.HasPrefix(content, "```") {
		content = strings.TrimPrefix(content, "```json")
		content = strings.TrimPrefix(content, "```")
		content = strings.TrimSuffix(content, "```")
		content = strings.TrimSpace(content)
	}

	var data dto.GeneratedDeckData
	if err := json.Unmarshal([]byte(content), &data); err != nil {
		return nil, fmt.Errorf("failed to parse AI response: %w\nResponse was: %s", err, content)
	}
	if len(data.Cards) == 0 {
		return nil, errors.New("AI returned no cards, try again")
	}

	return &data, nil
}
