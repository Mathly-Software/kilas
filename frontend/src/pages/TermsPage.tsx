import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUp, Mail, Printer, Scale } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { usePageTitle } from '../hooks/usePageTitle';
import { useAuthStore } from '../stores/authStore';
import LanguageSwitcher from '../components/common/LanguageSwitcher';
import { TERMS_META, TERMS_SECTIONS } from '../content/terms';

/**
 * Renders a line of legal text supporting:
 *   **bold**, *italic*, and [placeholder] (highlighted so unresolved values stand out).
 */
function parseInline(text: string, keyPrefix: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\])/g);

  return tokens.filter(Boolean).map((token, i) => {
    const key = `${keyPrefix}-${i}`;

    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={key} className="font-black text-gray-900">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*')) {
      return (
        <em key={key} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }
    if (token.startsWith('[') && token.endsWith(']')) {
      return (
        <span
          key={key}
          className="rounded bg-gold/15 px-1.5 py-0.5 font-bold text-gold-dark"
          title="Pending confirmation before publishing"
        >
          {token}
        </span>
      );
    }
    return <span key={key}>{token}</span>;
  });
}

export default function TermsPage() {
  const { t, lang } = useTranslation();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  usePageTitle(t.terms.title);

  const [activeId, setActiveId] = useState<string>(TERMS_SECTIONS[0].id);
  const [showTop, setShowTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const formattedDate = useMemo(() => {
    const date = new Date(TERMS_META.lastUpdated);
    return date.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [lang]);

  // Smooth anchor scrolling while this page is mounted.
  useEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, []);

  // Highlight the section currently in view in the sidebar index.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-terms-section]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [lang]);

  // Show the floating "back to top" button once the reader scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goBack = () => {
    if (isAuthenticated) navigate('/dashboard');
    else navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-surface border-b-2 border-gray-200 print:hidden">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to={isAuthenticated ? '/dashboard' : '/'} className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="Kilas" className="h-9 w-auto" />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher variant="header" />
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-3 py-2 text-xs font-black uppercase tracking-widest text-gray-500 transition-colors hover:border-sky-blue/40 hover:text-sky-blue cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              {t.terms.print}
            </button>
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-xs font-black uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-200 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{t.terms.back}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12 flex gap-10">
        {/* Table of contents */}
        <aside className="hidden lg:block w-64 shrink-0 print:hidden">
          <div className="sticky top-24">
            <p className="mb-3 px-3 text-[11px] font-black uppercase tracking-widest text-gray-400">
              {t.terms.onThisPage}
            </p>
            <nav className="max-h-[70vh] overflow-y-auto pr-2 space-y-0.5">
              {TERMS_SECTIONS.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-bold leading-snug transition-colors ${
                      isActive
                        ? 'bg-feather-green/10 text-feather-green'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <span className={`tabular-nums ${isActive ? 'text-feather-green' : 'text-gray-300'}`}>
                      {String(section.number).padStart(2, '0')}
                    </span>
                    <span>{section.title[lang]}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main ref={contentRef} className="flex-1 min-w-0">
          {/* Hero */}
          <div className="rounded-3xl border-2 border-gray-200 bg-surface p-6 md:p-10 shadow-sm print:border-0 print:shadow-none print:p-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-feather-green/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-feather-green">
              <Scale className="h-3.5 w-3.5" />
              {t.terms.legal}
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-800">
              {t.terms.title}
            </h1>
            <p className="mt-3 text-gray-500 font-semibold">{t.terms.subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400">
              <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-gray-500">
                {t.terms.version.replace('{version}', TERMS_META.version)}
              </span>
              <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-gray-500">
                {t.terms.lastUpdated}: {formattedDate}
              </span>
              <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-gray-500">{TERMS_META.url}</span>
            </div>

            <p className="mt-6 border-l-4 border-sky-blue/40 bg-sky-blue/5 px-4 py-3 text-sm font-semibold text-gray-600 rounded-r-xl print:hidden">
              {t.terms.acceptedNote}
            </p>
          </div>

          {/* Sections */}
          <div className="mt-8 space-y-4">
            {TERMS_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                data-terms-section
                className="scroll-mt-24 rounded-2xl border-2 border-gray-200 bg-surface p-6 md:p-8 print:break-inside-avoid print:border-0 print:p-0"
              >
                <h2 className="flex items-baseline gap-3 text-lg md:text-xl font-black tracking-tight text-gray-800">
                  <span className="text-feather-green tabular-nums">
                    {String(section.number).padStart(2, '0')}
                  </span>
                  {section.title[lang]}
                </h2>

                <div className="mt-3 space-y-3">
                  {section.blocks[lang].map((block, index) =>
                    'ul' in block ? (
                      <ul key={index} className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-gray-600">
                        {block.ul.map((item, i) => (
                          <li key={i}>{parseInline(item, `${section.id}-${index}-${i}`)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={index} className="text-[15px] leading-relaxed text-gray-600">
                        {parseInline(block.p, `${section.id}-${index}`)}
                      </p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-4 rounded-2xl border-2 border-feather-green/30 bg-feather-green/5 p-6 md:p-8 print:hidden">
            <h2 className="text-lg font-black tracking-tight text-gray-800">{t.terms.contactTitle}</h2>
            <p className="mt-2 text-sm font-semibold text-gray-600">{t.terms.contactDesc}</p>
            <a
              href={`mailto:${TERMS_META.supportEmail}`}
              className="btn-primary mt-4 inline-flex items-center gap-2 px-5 py-3 text-sm"
            >
              <Mail className="h-4 w-4" />
              {t.terms.contactButton}
            </a>
            <p className="mt-3 text-xs font-bold text-gray-400">{TERMS_META.supportEmail}</p>
          </div>

          <p className="mt-6 px-2 text-xs font-semibold text-gray-400">{t.terms.languageNotice}</p>
          <p className="mt-4 px-2 text-xs font-black uppercase tracking-widest text-gray-400">
            {t.terms.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
        </main>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-5 md:bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-feather-green text-white shadow-lg shadow-feather-green/30 transition-transform hover:scale-105 active:scale-95 cursor-pointer print:hidden"
          aria-label={t.terms.back}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
