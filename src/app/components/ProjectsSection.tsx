import React from 'react';
import Reveal from './Reveal';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
  {
    id: 'gcs',
    code: 'PRJ-01 · GCS',
    title: 'Ground Control Station Development — QGroundControl',
    description:
      'Customized QGroundControl with C++, Qt and QML for UAV operator workflows: battery warning messaging, proximity/radar-style display, weather forecast presentation and navigation-light controls, plus MAVLink telemetry, parameters and mission planning.',
    tags: ['C++', 'Qt/QML', 'QGroundControl', 'MAVLink', 'Telemetry'],
    layout: 'wide',
  },
  {
    id: 'ardupilot',
    code: 'PRJ-02 · FIRMWARE',
    title: 'ArduPilot Firmware Modifications & Flight-Controller Integration',
    description:
      'Customized ArduPilot firmware and failsafe logic (ESC overcurrent/overtemperature alerts, wind-related handling), investigated the FLTMODE_GCSBLOCK flight-mode restriction, and debugged autopilot-to-QGroundControl integration.',
    tags: ['ArduPilot', 'MAVLink', 'Failsafe', 'Parameters', 'Bootloader'],
    layout: 'wide',
  },
  {
    id: 'vision',
    code: 'PRJ-03 · VISION',
    title: 'Visual Navigation & Computer-Vision Prototype',
    description:
      'OpenCV and YOLO person/object detection on recorded or camera video, encoded with GStreamer (H.264) and streamed over UDP into QGroundControl. A groundwork prototype, not a completed autonomous-following system.',
    tags: ['Python', 'OpenCV', 'YOLO', 'GStreamer', 'H.264', 'UDP'],
    layout: 'wide',
    badge: 'Prototype',
  },
  {
    id: 'mapping',
    code: 'PRJ-04 · MAPPING',
    title: 'Geotagging, Photogrammetry & Aerial-Image Analysis — WebODM',
    description:
      'Geotagged aerial photographs with GPS/EXIF metadata, integrated WebODM for photogrammetry processing and review, and worked on AI-based building detection from aerial imagery.',
    tags: ['WebODM', 'Geotagging', 'GPS/EXIF', 'Photogrammetry'],
    layout: 'wide',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-background py-16 md:py-24" aria-labelledby="projects-title">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <p className="section-label mb-4">// 01 · Projects</p>
          <h2 id="projects-title" className="text-section-xl font-extrabold text-foreground">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Selected work from Vayukah Drone Systems and Services Pvt. Ltd. across ground control, autopilot firmware,
            computer vision and mapping.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
