import React from 'react';
import Reveal from './Reveal';
import Icon from '@/components/ui/AppIcon';

const missions = [
  {
    period: 'Dec 2023 – Present',
    role: 'UAV Software Engineer',
    org: 'Vayukah Drone Systems and Services Pvt. Ltd.',
    points: [
      'GCS development and customization on QGroundControl',
      'ArduPilot firmware modifications and flight-controller integration',
      'MAVLink integration and field troubleshooting',
      'Computer-vision prototype and aerial-image analysis',
    ],
  },
  {
    period: '2023',
    role: 'B.Tech, Electronics & Communication Engineering',
    org: 'Sathyabama Institute of Science and Technology',
    points: ['Graduated 2023 and moved straight into UAV software work.'],
  },
];

export default function MissionTimelineSection() {
  return (
    <section id="mission" className="relative bg-background pb-20 pt-16 lg:pt-20" aria-labelledby="mission-title">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <p className="section-label mb-4">// Mission Record</p>
          <h2 id="mission-title" className="text-section-xl mb-12 font-extrabold text-foreground">
            Experience &amp; education
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            {missions?.map((m, i) => (
              <Reveal key={m?.role} delay={i * 130}>
                <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8">
                  <div className="shimmer-line absolute left-0 top-0 h-px w-full" />
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">{m?.period}</span>
                  <h3 className="mt-3 text-xl font-bold text-card-foreground md:text-2xl">{m?.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{m?.org}</p>
                  <ul className="mt-5 space-y-2">
                    {m?.points?.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <Icon name="ChevronRightIcon" size={16} className="mt-1 shrink-0 text-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={200} className="lg:sticky lg:top-24">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-primary/40 bg-secondary p-8">
                <div>
                  <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">Flight summary</p>
                  <p className="mt-5 text-2xl font-bold leading-snug text-secondary-foreground">
                    2.4+ years turning autopilot data into interfaces operators can act on.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Specialties: UAV software development, GCS customization, ArduPilot modification, MAVLink
                    integration, troubleshooting.
                  </p>
                </div>
                <a
                  href="#connect"
                  className="mt-8 inline-flex min-h-[48px] items-center justify-between rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Start a conversation
                  <Icon name="ArrowRightIcon" size={18} />
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}