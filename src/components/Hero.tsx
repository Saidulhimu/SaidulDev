import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background grid + glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[120px] animate-pulse-glow dark:bg-accent-500/15" />
      <div className="pointer-events-none absolute top-40 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow dark:bg-cyan-glow/10" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: text content */}
          <div>
            {/* Headline */}
            <h1 className="reveal text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white" data-reveal-delay="0">
              {profile.name}
            </h1>

            {/* Sub-headline */}
            <p className="reveal mt-4 font-mono text-base text-sky-600 sm:text-lg dark:text-accent-400" data-reveal-delay="80">
              {profile.role}
            </p>

            {/* Bio */}
            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-400" data-reveal-delay="160">
              {profile.bio}
            </p>

            {/* Quick contact row */}
            <div className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-700 dark:text-slate-400" data-reveal-delay="240">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-sky-600 dark:text-accent-400" />
                {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-700 dark:hover:text-accent-300">
                <Mail className="h-4 w-4 text-sky-600 dark:text-accent-400" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phoneTel}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-700 dark:hover:text-accent-300">
                <Phone className="h-4 w-4 text-sky-600 dark:text-accent-400" />
                {profile.phone}
              </a>
            </div>

            {/* CTAs */}
            <div className="reveal mt-10 flex flex-wrap items-center gap-4" data-reveal-delay="320">
              <button onClick={() => scrollTo('#projects')} className="btn-accent">
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-ghost">
                Start a plan
              </button>
            </div>

            {/* Social icons */}
            <div className="reveal mt-10 flex items-center gap-3" data-reveal-delay="400">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: profile picture */}
          <div className="reveal flex justify-center lg:justify-end" data-reveal-delay="240">
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-500/30 via-cyan-500/20 to-transparent opacity-70 blur-xl animate-pulse-glow dark:from-accent-500/30 dark:via-cyan-glow/20" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-500 to-sky-500 opacity-60 animate-spin-slow dark:from-accent-500 dark:via-cyan-glow dark:to-accent-500" style={{ padding: '2px' }}>
                <div className="h-full w-full rounded-full bg-slate-200 dark:bg-slate-950" />
              </div>

              {/* Avatar */}
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-slate-300 bg-slate-100 sm:h-56 sm:w-56 lg:h-64 lg:w-64 dark:border-slate-800 dark:bg-slate-900">
                <img
                  src="/assets/profilePic.jpg"
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Floating status chip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-sky-500/40 bg-slate-50/90 px-3 py-1 text-xs font-mono text-sky-700 backdrop-blur-md dark:border-accent-500/40 dark:bg-slate-900/90 dark:text-accent-300">
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-sky-500 animate-pulse-glow dark:bg-accent-400" />
                Open to work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-400 p-1 dark:border-slate-700">
          <span className="h-2 w-1 animate-float rounded-full bg-sky-500 dark:bg-accent-400" />
        </div>
      </div>
    </section>
  );
}
