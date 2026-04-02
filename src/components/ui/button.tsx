import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary)] text-white shadow-[0_18px_45px_rgba(26,79,189,0.28)] hover:bg-[var(--primary-dark)]",
  secondary:
    "bg-white text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  ghost:
    "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20",
};

export function buttonClasses(variant: ButtonVariant = "primary") {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(126,182,255,0.32)] disabled:cursor-not-allowed disabled:opacity-60",
    variantMap[variant],
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const sharedClassName = cn(buttonClasses(variant), className);
  const isExternalAction =
    href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  if (isExternalAction) {
    return (
      <a href={href} className={sharedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <button className={cn(buttonClasses(variant), className)} {...props}>
      {children}
    </button>
  );
}
