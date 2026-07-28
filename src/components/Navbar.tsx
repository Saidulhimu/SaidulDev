import { useEffect, useState } from 'react';
import { Menu, X, Download, Terminal, Sun, Moon } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-300 bg-slate-200/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="group flex flex-shrink-0 items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-600 transition-all duration-300 group-hover:bg-sky-500/20 dark:border-accent-500/40 dark:bg-accent-500/10 dark:text-accent-400 dark:group-hover:bg-accent-500/20">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">{profile.brand}</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`nav-link ${active === link.href ? 'text-slate-900 dark:text-white' : ''}`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-sky-500 dark:bg-accent-500" />
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300"
          >
            <span className="transition-transform duration-500 ease-out" key={theme}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </span>
          </button>

          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-accent sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-colors hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        className={`overflow-hidden border-slate-300 bg-slate-200/95 backdrop-blur-xl transition-all duration-300 lg:hidden dark:border-slate-800 dark:bg-slate-950/95 ${
          open ? 'max-h-[28rem] border-b' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'bg-sky-500/10 text-sky-700 dark:bg-accent-500/10 dark:text-accent-300'
                  : 'text-slate-700 hover:bg-slate-300/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent mt-2 w-full"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
