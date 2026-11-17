import React from 'react';
import Reveal from './Reveal';

const groups = [
  {
    title: 'Ground & Application',
    items: ['C++', 'Qt/QML', 'QGroundControl'],
  },
  {
    title: 'Autopilot & Protocol',
    items: ['ArduPilot', 'PX4', 'MAVLink', 'Flight-controller integration'],
  },
  {
    title: 'Vision & Mapping',
    items: ['OpenCV', 'YOLO', 'GStreamer / H.264 / UDP', 'Geotagging', 'WebODM photogrammetry'],
  },
];

export default function AvionicsSection() {
  return (
    <section id="avionics" className="relative overflow-hidden bg-secondary py-16 lg:py-20" aria-labelledby="avionics-title">
      <div className="grid-hud absolute inset-0 opacity-60" />
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        {/* Radar */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-0 rounded-full border border-accent/50" />
            <div className="absolute inset-[12%] rounded-full border border-accent/40" />
            <div className="absolute inset-[26%] rounded-full border border-accent/30" />
            <div className="absolute inset-[40%] rounded-full border border-accent/30" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-accent/30" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-accent/30" />
            <div className="radar-sweep animate-sweep absolute inset-0 rounded-full" />
            {/* Quadrotor core */}
            <svg
              aria-hidden="true"
              className="animate-float absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-primary"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <rect x="38" y="38" width="24" height="24" rx="5" fill="currentColor" fillOpacity="0.25" />
              <path d="M38 38L18 18M62 38L82 18M38 62L18 82M62 62L82 82" />
              <circle cx="14" cy="14" r="11" />
              <circle cx="86" cy="14" r="11" />
              <circle cx="14" cy="86" r="11" />
              <circle cx="86" cy="86" r="11" />
            </svg>
            <span className="animate-pulse-dot absolute left-[24%] top-[30%] h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="animate-pulse-dot absolute right-[20%] top-[58%] h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="animate-pulse-dot absolute bottom-[18%] left-[42%] h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="section-label mb-4">// Avionics Stack</p>
            <h2 id="avionics-title" className="text-section-xl font-extrabold text-secondary-foreground">
              The instruments I fly with
            </h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {groups?.map((group, i) => (
              <Reveal key={group?.title} delay={i * 120}>
                <div className="border-t border-border pt-6">
                  <h3 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">
                    {group?.title}
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {group?.items?.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}