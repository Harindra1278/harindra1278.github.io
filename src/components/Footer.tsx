import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Personal Info', href: '#personal-information' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Connect', href: '#connect' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo size={70} />
          <span className="text-2xl font-bold tracking-tight text-foreground">Harindra</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Footer">
          {footerLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm font-medium text-muted-foreground md:items-end">
          <span>© 2026 Gummadapu Harshitha Harindra</span>
          <span className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/gummadapu-harshitha-harindra-2542821a2"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a href="mailto:Harindra1278@gmail.com" className="py-1 transition-colors hover:text-foreground">
              Email
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}