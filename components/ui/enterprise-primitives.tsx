import React from 'react';
import Link from './link';

/* ── Section Header ─────────────────────────────────────────── */
export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionText,
  actionHref,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={[
        'flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16',
        align === 'center' ? 'text-center md:text-center justify-center' : 'text-left',
        className,
      ].join(' ')}
    >
      <div className={align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && (
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D46A79] bg-[#211C1E] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10 inline-block mb-3">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7F2F3] tracking-tight leading-tight mb-3">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-[#C8BEC1] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <div className="shrink-0">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F7F2F3] hover:text-[#D46A79] bg-[#211C1E] hover:bg-[#282124] border border-white/15 px-4 py-2.5 rounded-[var(--radius-md)] transition-colors"
          >
            <span>{actionText}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── Enterprise Row ─────────────────────────────────────────── */
export interface EnterpriseRowProps {
  code: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  ctaText?: string;
  ctaHref?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function EnterpriseRow({
  code,
  title,
  subtitle,
  description,
  tags,
  ctaText,
  ctaHref,
  isActive = false,
  onClick,
}: EnterpriseRowProps) {
  return (
    <div
      onClick={onClick}
      className={[
        'group relative bg-[#1C181A] hover:bg-[#211C1E] border rounded-[var(--radius-lg)] p-5 md:p-6 transition-all duration-200 cursor-pointer overflow-hidden',
        isActive ? 'border-[#8E2938] shadow-lg bg-[#211C1E]' : 'border-white/[0.09] hover:border-white/20',
      ].join(' ')}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left info */}
        <div className="flex items-start gap-4 flex-1">
          <span className="font-mono text-xs font-bold text-[#D46A79] bg-[#171315] px-2.5 py-1 rounded-[var(--radius-xs)] border border-white/10 shrink-0 mt-0.5">
            {code}
          </span>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-base font-bold text-[#F7F2F3] group-hover:text-white transition-colors">
                {title}
              </h3>
              {subtitle && (
                <span className="text-[10px] font-mono text-[#968B8F] uppercase bg-[#171315] px-2 py-0.5 rounded-[var(--radius-xs)] border border-white/[0.06]">
                  {subtitle}
                </span>
              )}
            </div>
            <p className="text-xs text-[#C8BEC1] leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Right CTA / Tags */}
        <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
          {tags && tags.length > 0 && (
            <div className="hidden sm:flex items-center gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] font-mono font-medium text-[#968B8F] bg-[#171315] px-2 py-0.5 rounded-[var(--radius-xs)] border border-white/[0.06]">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D46A79] group-hover:text-white transition-colors"
            >
              <span>{ctaText}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Proof Strip Item ─────────────────────────────────────────── */
export interface ProofItem {
  value: string;
  label: string;
  detail?: string;
}

export function ProofStrip({ items }: { items: ProofItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#171315] border-y border-white/[0.09] py-6 px-4">
      {items.map((item, idx) => (
        <div key={item.label} className="flex flex-col p-3 rounded-[var(--radius-md)] bg-[#1C181A]/60 border border-white/[0.06]">
          <span className="font-mono text-[9px] text-[#968B8F] uppercase mb-1">INDEX // 0{idx + 1}</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#F7F2F3] tracking-tight mb-0.5">{item.value}</span>
          <span className="text-xs font-semibold text-[#C8BEC1]">{item.label}</span>
          {item.detail && <span className="text-[10px] text-[#968B8F] mt-0.5">{item.detail}</span>}
        </div>
      ))}
    </div>
  );
}
