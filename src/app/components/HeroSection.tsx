'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CvDownloadButton from './CvDownloadButton';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(1.08)`;
      if (blobARef.current) blobARef.current.style.transform = `translate3d(0, ${y * 0.5}px, 0)`;
    };
    const onMove = (e: MouseEvent) => {
      const mx = e.clientX / window.innerWidth - 0.5;
      const my = e.clientY / window.innerHeight - 0.5;
      if (blobBRef.current) blobBRef.current.style.transform = `translate3d(${mx * -50}px, ${my * -40}px, 0)`;
      if (cardRef.current) cardRef.current.style.transform = `translate3d(${mx * 14}px, ${my * 12}px, 0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-foreground"
      aria-labelledby="hero-title">
      
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_465ae9369-1794888938197.png"
          alt="Aerial view of a multirotor drone hovering over misty mountain terrain at dusk, deep blue shadows, low-key lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover" />
        
      </div>
      <div className="scrim-hero absolute inset-0" />
      <div className="grid-hud absolute inset-0 opacity-70" />
      <div ref={blobARef} className="blob-amber animate-blob absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full" />
      <div ref={blobBRef} className="blob-teal animate-blob absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full" />
      <div className="grain" />

      {/* HUD reticle */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[22%] hidden h-[340px] w-[340px] text-accent/50 lg:block"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8">
        
        <circle cx="100" cy="100" r="92" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="62" />
        <circle cx="100" cy="100" r="30" strokeDasharray="1 4" />
        <path d="M100 0v36M100 164v36M0 100h36M164 100h36" />
        <path d="M100 100l-1 0" strokeWidth="3" />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent"> UAV Software Engineer
              </span>
            </div>
            <h1 id="hero-title" className="text-hero-xl font-extrabold text-foreground">
              Gummadapu
              <br />
              <span className="text-primary">Harshitha</span> Harindra
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I build the ground control layer and autopilot integrations that put pilots in command of the aircraft.
              QGroundControl, ArduPilot, MAVLink, and the troubleshooting that keeps them flying.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CvDownloadButton
                label="Download CV"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
              />
              <a
                href="#connect"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-foreground/30 px-8 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">
                
                Connect
                <Icon name="ArrowRightIcon" size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div ref={cardRef} className="glass-panel rounded-2xl p-6 transition-transform duration-200 ease-out">
              <div className="mb-5 flex justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-primary">
                  <AppImage
                    src="/assets/images/hari.jpg"
                    alt="Portrait of Gummadapu Harshitha Harindra, UAV software engineer"
                    fill
                    unoptimized
                    priority
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">Pilot Profile</span>
                <span className="font-mono-tech text-xs text-muted-foreground">ID · GHH-01</span>
              </div>
              <dl className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-sm text-muted-foreground">Experience</dt>
                  <dd className="font-mono-tech text-lg font-semibold text-foreground">2.6+ yrs</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-sm text-muted-foreground">Primary stack</dt>
                  <dd className="font-mono-tech text-sm font-semibold text-primary">C++ · Qt/QML</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-sm text-muted-foreground">Autopilots</dt>
                  <dd className="font-mono-tech text-sm font-semibold text-foreground">ArduPilot · PX4</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-sm text-muted-foreground">Base</dt>
                  <dd className="font-mono-tech text-sm font-semibold text-foreground">Vijayawada</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>);

}