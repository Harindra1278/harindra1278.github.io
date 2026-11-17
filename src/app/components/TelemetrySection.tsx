import React from 'react';
import Reveal from './Reveal';

const readouts = [
  { label: 'Years in UAV software', value: '2.4+', note: 'Dec 2023 – Present' },
  { label: 'Project tracks', value: '04', note: 'GCS · Firmware · Vision · Mapping' },
  { label: 'Languages spoken', value: '04', note: 'English · Hindi · Telugu · Tamil' },
];

export default function TelemetrySection() {
  return (
    <section className="relative bg-background pb-16 pt-12" aria-labelledby="telemetry-title">
      <div className="contour-bg absolute inset-0 opacity-80" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="section-label mb-4">// Telemetry</p>
            <h2 id="telemetry-title" className="text-section-xl font-extrabold text-foreground">
              Built around one idea: the pilot should trust the screen.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              From customizing QGroundControl for operators to modifying ArduPilot firmware and integrating flight
              controllers over MAVLink, the work sits where software meets the airframe.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
            {readouts?.map((item, i) => (
              <Reveal key={item?.label} delay={i * 120}>
                <div className="flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item?.label}
                  </span>
                  <div>
                    <div className="font-mono-tech text-5xl font-semibold text-primary">{item?.value}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{item?.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}