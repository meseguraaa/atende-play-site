// src/components/Landing/UiBits.tsx
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-panel p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-500/50";
  const primary = "bg-purple-500 text-white shadow-glow hover:bg-purple-600";
  const ghost =
    "border border-border bg-white/5 text-white/85 hover:bg-white/10";

  const cls = cn(base, variant === "primary" ? primary : ghost, className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return <button className={cls}>{children}</button>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Pill>{eyebrow}</Pill>
        </div>
      ) : null}

      <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 text-balance text-sm leading-relaxed text-white/65 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/**
 * ✅ Dashboard como imagem real, sem cortar.
 *
 * Sua imagem: 1536x704 (aspect ≈ 2.1818) => aspect-[24/11]
 *
 * Como usar:
 * - coloque a imagem em: /public/dashboard.png
 */
export function FakeDashboard() {
  return (
    <div className="relative mx-auto mt-10 max-w-5xl">
      <div className="absolute -inset-6 rounded-[28px] bg-purple-500/15 blur-2xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-border bg-[#0A0D16] shadow-glow">
        {/* topbar */}
        <div className="flex items-center gap-2 border-b border-border bg-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <div className="ml-3 text-xs font-semibold text-white/70">
            Atende Play
          </div>
        </div>

        {/* imagem (sem corte) */}
        <div className="relative aspect-[24/11] w-full bg-[#0A0D16]">
          <Image
            src="/dashboard.png"
            alt="Dashboard do AtendePlay com indicadores de faturamento, comissões, despesas e lucro"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      </div>
    </div>
  );
}
