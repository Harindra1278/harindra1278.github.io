import React from 'react';
import Reveal from './Reveal';

const skillGroups = [
  { title: 'Programming', items: ['C++', 'C', 'Python', 'C#', 'JavaScript'] },
  {
    title: 'UAV & Autopilot',
    items: ['ArduPilot', 'PX4', 'MAVLink', 'Flight-controller integration', 'Telemetry', 'Parameter management', 'Mission planning'],
  },
  {
    title: 'GCS & UI',
    items: ['QGroundControl', 'Qt', 'QML', 'C++/QML integration', 'Signals and slots', 'Cross-platform UI'],
  },
  {
    title: 'Computer Vision & Video',
    items: ['OpenCV', 'YOLO-based detection prototype', 'GStreamer', 'H.264 encoding', 'UDP video streaming'],
  },
  {
    title: 'Geospatial & Photogrammetry',
    items: ['Image geotagging', 'GPS/EXIF metadata', 'WebODM', 'Photogrammetry', 'Aerial imagery', 'AI-based building detection'],
  },
  { title: 'Application Development', items: ['WPF', 'MVVM', 'Avalonia UI', 'ASP.NET', 'Blazor'] },
  { title: 'Tools & Platforms', items: ['Git', 'Linux', 'Docker', 'AWS S3', 'SQL', 'Windows', 'Android'] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-background py-16 md:py-24" aria-labelledby="skills-title">
      <div className="contour-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <p className="section-label mb-4">// 02 · Skills</p>
          <h2 id="skills-title" className="text-section-xl font-extrabold text-foreground">
            Skills
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Technical skills across UAV software, ground control, computer vision and mapping.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups?.map((group, i) => (
            <Reveal key={group?.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <h3 className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">{group?.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group?.items?.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-secondary px-3 py-1 font-mono-tech text-xs text-secondary-foreground"
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
    </section>
  );
}
