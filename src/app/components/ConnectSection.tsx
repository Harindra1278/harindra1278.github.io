import React from 'react';
import Reveal from './Reveal';
import Icon from '@/components/ui/AppIcon';
import CvDownloadButton from './CvDownloadButton';

const channels = [
  {
    label: 'LinkedIn',
    value: 'gummadapu-harshitha-harindra',
    href: 'https://www.linkedin.com/in/gummadapu-harshitha-harindra-2542821a2',
    icon: 'LinkIcon',
    external: true,
  },
  {
    label: 'Email',
    value: 'Harindra1278@gmail.com',
    href: 'mailto:Harindra1278@gmail.com',
    icon: 'EnvelopeIcon',
    external: false,
  },
  {
    label: 'Phone',
    value: '+91 9182487748',
    href: 'tel:+919182487748',
    icon: 'PhoneIcon',
    external: false,
  },
];

export default function ConnectSection() {
  return (
    <section id="connect" className="relative overflow-hidden bg-secondary py-20" aria-labelledby="connect-title">
      <div className="contour-bg absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="section-label mb-4">// Open Channel</p>
          <h2 id="connect-title" className="text-section-xl font-extrabold text-secondary-foreground">
            Have a drone that needs better software?
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Roles, collaborations, GCS or autopilot integration work: write, call, or grab the CV and read it on
            your own time.
          </p>
          <CvDownloadButton
            label="Download CV (PDF)"
            iconSize={20}
            className="mt-10 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          />
          <p className="mt-6 font-mono-tech text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Languages · English / Hindi / Telugu / Tamil
          </p>
        </Reveal>

        <div className="space-y-4 lg:col-span-6">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 120}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex min-h-[88px] items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon name={c.icon as 'LinkIcon'} size={22} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 break-all text-base font-semibold text-card-foreground md:text-lg">
                      {c.value}
                    </div>
                  </div>
                </div>
                <Icon
                  name="ArrowUpRightIcon"
                  size={22}
                  className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}