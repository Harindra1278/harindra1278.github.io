import React from 'react';
import Reveal from './Reveal';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
  {
    id: 'gcs',
    code: 'LOG-01',
    title: 'QGroundControl GCS Development',
    description:
      'Customized and extended QGroundControl for operator workflows using C++ and Qt/QML. Built UI panels, hooked telemetry into the interface and troubleshot ground-station behaviour on real vehicles.',
    tags: ['C++', 'Qt/QML', 'QGroundControl', 'MAVLink'],
    layout: 'wide',
  },
  {
    id: 'firmware',
    code: 'LOG-02',
    title: 'ArduPilot Firmware & Flight-Controller Integration',
    description:
      'Modified ArduPilot firmware and integrated flight controllers with ground and onboard systems over MAVLink. Worked through bring-up, parameter behaviour and debugging at the autopilot boundary.',
    tags: ['ArduPilot', 'PX4', 'MAVLink', 'Firmware'],
    layout: 'tall',
  },
  {
    id: 'vision',
    code: 'LOG-03',
    title: 'Visual Navigation & Computer-Vision Prototype',
    description:
      'A prototype pipeline using OpenCV and YOLO, with video streamed via GStreamer (H.264) over UDP and displayed inside QGroundControl. Built as a research prototype, not a completed autonomous-following system.',
    tags: ['OpenCV', 'YOLO', 'GStreamer', 'H.264', 'UDP'],
    layout: 'half',
    badge: 'Prototype',
  },
  {
    id: 'mapping',
    code: 'LOG-04',
    title: 'Geotagging, Photogrammetry & Aerial Image Analysis',
    description:
      'Geotagged aerial imagery and processed surveys with WebODM to produce orthomosaics and analysis-ready outputs.',
    tags: ['Geotagging', 'WebODM', 'Photogrammetry'],
    layout: 'half',
  },
];

export default function FlightLogSection() {
  return (
    <section id="flight-log" className="relative bg-background py-16 lg:py-20" aria-labelledby="flight-log-title">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label mb-4">// Flight Log</p>
              <h2 id="flight-log-title" className="text-section-xl font-extrabold text-foreground">
                Four tracks at Vayukah Drone Systems
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Scope stated plainly: what shipped, what is prototype, and the tools behind each.
            </p>
          </div>
        </Reveal>

        {/* Cell map (lg, 6 cols): Row1 GCS(cs4) + Firmware(cs2 rs2); Row2 Vision(cs2) + Mapping(cs2) + Firmware(rs) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 110}
              className={
                p.layout === 'wide' ?'md:col-span-2 lg:col-span-4'
                  : p.layout === 'tall' ?'md:col-span-2 lg:col-span-2 lg:row-span-2' :'lg:col-span-2'
              }
            >
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}