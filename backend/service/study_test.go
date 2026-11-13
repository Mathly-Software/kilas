package service

import (
	"testing"
	"time"

	"github.com/joenathan-15/kilas/model"
)

func TestApplySM2Progression(t *testing.T) {
	card := &model.Card{SM2EaseFactor: 2.5}

	ApplySM2(card, 2) // Good: first successful review
	if card.SM2Interval != 1 || card.SM2Repetitions != 1 {
		t.Fatalf("first Good review: got interval=%d repetitions=%d", card.SM2Interval, card.SM2Repetitions)
	}

	ApplySM2(card, 2) // Good: second successful review
	if card.SM2Interval != 6 || card.SM2Repetitions != 2 {
		t.Fatalf("second Good review: got interval=%d repetitions=%d", card.SM2Interval, card.SM2Repetitions)
	}

	ApplySM2(card, 2) // Good: multiply interval by ease factor
	if card.SM2Interval != 15 || card.SM2Repetitions != 3 {
		t.Fatalf("third Good review: got interval=%d repetitions=%d", card.SM2Interval, card.SM2Repetitions)
	}
	if card.Repetitions != 3 {
		t.Fatalf("expected total repetitions to be 3, got %d", card.Repetitions)
	}
}

func TestApplySM2AgainResetsLearningProgress(t *testing.T) {
	card := &model.Card{
		SM2Interval:    15,
		SM2Repetitions: 3,
		SM2EaseFactor:  2.5,
	}

	ApplySM2(card, 0)

	if card.SM2Repetitions != 0 || card.SM2Interval != 1 {
		t.Fatalf("Again should reset SM-2 progress to interval 1, got interval=%d repetitions=%d", card.SM2Interval, card.SM2Repetitions)
	}
	if card.Repetitions != 1 {
		t.Fatalf("expected total review count to increment, got %d", card.Repetitions)
	}
	if card.DueDate.Before(time.Now().Add(23 * time.Hour)) {
		t.Fatalf("expected card to be due about one day later, got %v", card.DueDate)
	}
}

func TestApplySM2KeepsEaseFactorAboveMinimum(t *testing.T) {
	card := &model.Card{SM2EaseFactor: 1.3}

	for i := 0; i < 20; i++ {
		ApplySM2(card, 2)
	}

	if card.SM2EaseFactor < 1.3 {
		t.Fatalf("SM-2 ease factor fell below 1.3: %v", card.SM2EaseFactor)
	}
}

func TestApplyFSRSKeepsSM2MemoryIndependent(t *testing.T) {
	card := &model.Card{SM2EaseFactor: 2.5}
	ApplySM2(card, 2)
	interval, repetitions, easeFactor := card.SM2Interval, card.SM2Repetitions, card.SM2EaseFactor

	ApplyFSRS(card, 2)

	if card.Stability <= 0 || card.Difficulty <= 0 {
		t.Fatalf("FSRS state was not initialized: stability=%v difficulty=%v", card.Stability, card.Difficulty)
	}
	if card.SM2Interval != interval || card.SM2Repetitions != repetitions || card.SM2EaseFactor != easeFactor {
		t.Fatalf("FSRS review changed SM-2 memory")
	}
	if card.LastReviewedAt == nil {
		t.Fatal("expected review timestamp to be recorded")
	}
}

func TestApplyCombinedKeepsFSRSAsDueDateScheduler(t *testing.T) {
	card := &model.Card{SM2EaseFactor: 2.5}

	ApplyFSRSAndSM2(card, 2)

	if card.Stability <= 0 || card.Difficulty <= 0 {
		t.Fatalf("FSRS state was not initialized: stability=%v difficulty=%v", card.Stability, card.Difficulty)
	}
	if card.SM2Repetitions != 1 || card.SM2Interval != 1 {
		t.Fatalf("SM-2 state was not updated: interval=%d repetitions=%d", card.SM2Interval, card.SM2Repetitions)
	}
	if card.Repetitions != 1 {
		t.Fatalf("expected shared review count to increment once, got %d", card.Repetitions)
	}
	if card.Interval != 2 {
		t.Fatalf("expected FSRS to control the due interval (2 days), got %d", card.Interval)
	}
	if card.DueDate.Before(time.Now().Add(47 * time.Hour)) {
		t.Fatalf("expected FSRS due date to be about two days later, got %v", card.DueDate)
	}
}
