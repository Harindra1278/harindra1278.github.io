import React from 'react';
import Reveal from './Reveal';

const experience = [
  'Customized ArduPilot firmware and adapted flight features to project-specific requirements.',
  'Developed custom QGroundControl features using C++, Qt, and QML.',
  'Worked on MAVLink communication, telemetry presentation, parameter management, and mission-planning workflows.',
  'Implemented operator-facing GCS enhancements, including battery warning notifications and proximity/radar-style display features.',
  'Investigated flight-mode and autopilot configuration behavior to troubleshoot vehicle-control and GCS integration issues.',
  'Integrated WebODM into drone imagery workflows for photogrammetry processing and review.',
  'Worked with image geotagging workflows that associate aerial images with GPS/location metadata.',
  'Worked on AI-based building detection from aerial imagery.',
  'Developed and maintained cross-platform drone software for Windows and Android.',
  'Supported software integration and troubleshooting across GCS, autopilot, telemetry, and related UAV components.',
];

export default function CertificatesDetailsSection() {
  return (
    <section
      id="certificates"
      className="relative bg-background py-16 md:py-24"
      aria-labelledby="certificates-title"
    >
      <div className="contour-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <p className="section-label mb-4">// 04 · Certificates &amp; Details</p>
          <h2 id="certificates-title" className="text-section-xl font-extrabold text-foreground">
            Certificates &amp; Details
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Academic credential and professional experience details.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-8">
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">Education · 2023</span>
              <h3 className="mt-6 text-xl font-bold leading-tight text-foreground md:text-2xl">
                B.Tech, Electronics and Communication Engineering
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                Sathyabama Institute of Science and Technology
              </p>
              <div className="mt-8 border-t border-border pt-5">
                <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Declaration
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I hereby declare that the information provided above is true and correct to the best of my knowledge
                  and belief.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">Experience</span>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-foreground md:text-2xl">
                    Vayukah Drone Systems and Services Pvt. Ltd.
                  </h3>
                </div>
                <span className="rounded-full border border-primary px-3 py-1 font-mono-tech text-[11px] uppercase tracking-widest text-primary">
                  Dec 2023 – Present
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {experience?.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
