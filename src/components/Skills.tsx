import { Code2, Brain, Database, Sparkles, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/Section';
import { skillCategories, techLogos } from '@/data/portfolio';

const marqueeItems = [...techLogos, ...techLogos];

const cardAccents = [
  {
    bar: 'from-sky-500 to-cyan-400',
    iconBg: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
    iconBorder: 'group-hover:border-sky-500/50',
    chipBase: 'border-slate-300 bg-sky-50 text-sky-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300',
    chipHover: 'hover:border-sky-500/40 hover:bg-sky-100 hover:text-sky-700 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/10 dark:hover:text-sky-300',
  ring: 'group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.4)] dark:group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
  glow: 'from-sky-500/15',
  glowDark: 'dark:from-accent-500/10',
  dot: 'bg-sky-500 dark:bg-sky-400',
  iconAnim: 'group-hover:animate-wiggle',
  chipPop: 'hover:animate-pop-in',
  chipRise: 'group-hover:translate-y-[-2px]',
  chipScale: 'group-hover:scale-105',
  chipShadow: 'group-hover:shadow-md',
    chipBorder: 'group-hover:border-sky-500/50',
    chipText: 'group-hover:text-sky-700',
    chipBg: 'group-hover:bg-sky-100',
    chipDarkBorder: 'dark:group-hover:border-sky-500/40',
    chipDarkText: 'dark:group-hover:text-sky-300',
    chipDarkBg: 'dark:group-hover:bg-sky-500/10',
    chipTransition: 'transition-all duration-300',
    chipTransform: 'group-hover:scale-105',
    chipTranslate: 'group-hover:translate-y-[-2px]',
  },
  {
    bar: 'from-cyan-500 to-sky-400',
    iconBg: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400',
    iconBorder: 'group-hover:border-cyan-500/50',
    chipBase: 'border-slate-300 bg-cyan-50 text-cyan-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300',
    chipHover: 'hover:border-cyan-500/40 hover:bg-cyan-100 hover:text-cyan-700 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300',
    ring: 'group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] dark:group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
    glow: 'from-cyan-500/15',
    glowDark: 'dark:from-cyan-glow/10',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    iconAnim: 'group-hover:animate-wiggle',
    chipPop: 'hover:animate-pop-in',
    chipRise: 'group-hover:translate-y-[-2px]',
    chipScale: 'group-hover:scale-105',
    chipShadow: 'group-hover:shadow-md',
    chipBorder: 'group-hover:border-cyan-500/50',
    chipText: 'group-hover:text-cyan-700',
    chipBg: 'group-hover:bg-cyan-100',
    chipDarkBorder: 'dark:group-hover:border-cyan-500/40',
    chipDarkText: 'dark:group-hover:text-cyan-300',
    chipDarkBg: 'dark:group-hover:bg-cyan-500/10',
    chipTransition: 'transition-all duration-300',
    chipTransform: 'group-hover:scale-105',
    chipTranslate: 'group-hover:translate-y-[-2px]',
  },
  {
    bar: 'from-blue-500 to-sky-400',
    iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
    iconBorder: 'group-hover:border-blue-500/50',
    chipBase: 'border-slate-300 bg-blue-50 text-blue-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300',
    chipHover: 'hover:border-blue-500/40 hover:bg-blue-100 hover:text-blue-700 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300',
    ring: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] dark:group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    glow: 'from-blue-500/15',
    glowDark: 'dark:from-blue-500/10',
    dot: 'bg-blue-500 dark:bg-blue-400',
    iconAnim: 'group-hover:animate-wiggle',
    chipPop: 'hover:animate-pop-in',
    chipRise: 'group-hover:translate-y-[-2px]',
    chipScale: 'group-hover:scale-105',
    chipShadow: 'group-hover:shadow-md',
    chipBorder: 'group-hover:border-blue-500/50',
    chipText: 'group-hover:text-blue-700',
    chipBg: 'group-hover:bg-blue-100',
    chipDarkBorder: 'dark:group-hover:border-blue-500/40',
    chipDarkText: 'dark:group-hover:text-blue-300',
    chipDarkBg: 'dark:group-hover:bg-blue-500/10',
    chipTransition: 'transition-all duration-300',
    chipTransform: 'group-hover:scale-105',
    chipTranslate: 'group-hover:translate-y-[-2px]',
  },
  {
    bar: 'from-indigo-400 to-sky-500',
    iconBg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',
    iconBorder: 'group-hover:border-indigo-500/50',
    chipBase: 'border-slate-300 bg-indigo-50 text-indigo-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300',
    chipHover: 'hover:border-indigo-500/40 hover:bg-indigo-100 hover:text-indigo-700 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300',
    ring: 'group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] dark:group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]',
    glow: 'from-indigo-500/15',
    glowDark: 'dark:from-indigo-500/10',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    iconAnim: 'group-hover:animate-wiggle',
    chipPop: 'hover:animate-pop-in',
    chipRise: 'group-hover:translate-y-[-2px]',
    chipScale: 'group-hover:scale-105',
    chipShadow: 'group-hover:shadow-md',
    chipBorder: 'group-hover:border-indigo-500/50',
    chipText: 'group-hover:text-indigo-700',
    chipBg: 'group-hover:bg-indigo-100',
    chipDarkBorder: 'dark:group-hover:border-indigo-500/40',
    chipDarkText: 'dark:group-hover:text-indigo-300',
    chipDarkBg: 'dark:group-hover:bg-indigo-500/10',
    chipTransition: 'transition-all duration-300',
    chipTransform: 'group-hover:scale-105',
    chipTranslate: 'group-hover:translate-y-[-2px]',
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="CORE SKILLS"
      title="A toolkit for building & understanding intelligent systems"
      description="From responsive front-end interfaces to interpretable machine learning pipelines — here's what I work with day to day."
    >
      {/* Top tech stack marquee */}
      <div className="reveal marquee-mask mb-16 overflow-hidden" data-reveal="blur">
        <div className="marquee-track gap-4">
          {marqueeItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex flex-shrink-0 items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-accent-500/40 dark:hover:bg-slate-900/60"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${tech.gradient} font-mono text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                {tech.glyph}
              </span>
              <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill category cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
        {skillCategories.map((cat, i) => {
          const Icon: LucideIcon = cat.icon;
          const accent = cardAccents[i % cardAccents.length];
          return (
            <div
              key={cat.title}
              className="reveal group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-300 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-none dark:hover:shadow-2xl"
              data-reveal="flip"
              data-reveal-delay={String(i * 100)}
            >
              {/* Top accent bar */}
              <span className={`absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Shimmer sweep on hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-500/[0.05] to-transparent transition-transform duration-1000 group-hover:translate-x-full dark:via-white/[0.05]" />

              {/* Glow blob */}
              <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent.glow} ${accent.glowDark} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Icon container */}
              <div className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-300 ${accent.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${accent.iconBorder} dark:border-slate-800`}>
                <Icon className={`h-7 w-7 ${accent.iconAnim}`} strokeWidth={1.75} />
              </div>

              {/* Title + arrow */}
              <div className="mb-1 flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-accent-300">
                  {cat.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-500 group-hover:opacity-100 dark:text-slate-600 dark:group-hover:text-accent-400" />
              </div>
              <p className="mb-6 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                {String(i + 1).padStart(2, '0')} / {String(skillCategories.length).padStart(2, '0')}
              </p>

              {/* Skill chips */}
              <div className="mt-auto flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 ${accent.chipBase} ${accent.chipHover}`}
                    style={{ transitionDelay: `${si * 40}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
