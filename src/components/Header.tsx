'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Personal Info', href: '#personal-information' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Connect', href: '#connect' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [open]);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo size={40} />
          <span className="text-lg font-bold tracking-tight text-foreground">Harindra</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="font-mono-tech text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#connect"
            className="hidden min-h-[44px] items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Connect
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground md:hidden"
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-6 bg-background/90 backdrop-blur-xl md:hidden">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={() => setOpen(false)}
              className="min-h-[44px] py-2 text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground"
          >
            Connect
          </a>
        </div>
      )}
    </header>
  );
}