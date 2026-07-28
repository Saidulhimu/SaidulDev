import { ArrowUpRight, FlaskConical, Github, ExternalLink, Star } from 'lucide-react';
import { Section } from '@/components/Section';
import { projects } from '@/data/portfolio';

export function Projects() {
  const research = projects.find((p) => p.featured);
  const ecommerce = projects.find((p) => p.liveUrl);

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects & research"
      description="Applied NLP research and full-stack production software — from Bengali text classification to AI-powered e-commerce."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ── Card 1: Research (DharmaSafe) ── */}
        {research && (
          <article className="glass-card reveal group flex flex-col overflow-hidden" data-reveal-delay="0">
            {/* Image area */}
            <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800/60">
              <img
                src={research.image}
                alt={research.title}
                className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] sm:h-64"
              />
              {/* Dual status badges */}
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/50 bg-slate-50/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-sky-700 backdrop-blur-sm dark:bg-slate-950/80 dark:text-accent-300">
                  <FlaskConical className="h-3 w-3" />
                  {research.status}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/50 bg-slate-50/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-700 backdrop-blur-sm dark:border-cyan-glow/50 dark:bg-slate-950/80 dark:text-cyan-glow">
                  Machine Learning &amp; NLP
                </span>
              </div>
            </div>

            {/* Caption strip */}
            {research.imageCaption && (
              <div className="border-b border-slate-300 bg-slate-100 px-6 py-2.5 dark:border-slate-800 dark:bg-slate-800/40">
                <p className="font-mono text-xs text-slate-500 dark:text-slate-500">{research.imageCaption}</p>
              </div>
            )}

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 dark:text-white">{research.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-400">{research.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {research.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        )}

        {/* ── Card 2: Tech Store E-Commerce ── */}
        {ecommerce && (
          <a
            href={ecommerce.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card reveal group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-accent-500"
            data-reveal-delay="80"
          >
            {/* Image area with hover overlay */}
            <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800/60">
              <img
                src={ecommerce.image}
                alt={ecommerce.title}
                className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] sm:h-64"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-950/60">
                <span className="flex items-center gap-2 rounded-xl border border-sky-500/60 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-700 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 dark:border-accent-500/60 dark:bg-accent-500/20 dark:text-accent-300">
                  <ExternalLink className="h-4 w-4" />
                  Visit Live Project
                </span>
              </div>
              {/* Dual status badges */}
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/50 bg-slate-50/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-sky-700 backdrop-blur-sm dark:bg-slate-950/80 dark:text-accent-300">
                  <Star className="h-3 w-3" />
                  {ecommerce.status}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/50 bg-slate-50/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-700 backdrop-blur-sm dark:border-cyan-glow/50 dark:bg-slate-950/80 dark:text-cyan-glow">
                  Full-Stack &amp; AI
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="flex-1 text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-sky-600 dark:text-white dark:group-hover:text-accent-300">
                  {ecommerce.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-500 dark:text-slate-600 dark:group-hover:text-accent-400" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-400">{ecommerce.description}</p>

              {/* Link row */}
              <div className="mt-5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition-all duration-200 group-hover:bg-sky-100 dark:border-accent-500/40 dark:bg-accent-500/10 dark:text-accent-300">
                  <ExternalLink className="h-3.5 w-3.5" />
                  techstore17.ai.studio
                </span>
                {ecommerce.githubUrl && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(ecommerce.githubUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source Code
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {ecommerce.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        )}
      </div>
    </Section>
  );
}
