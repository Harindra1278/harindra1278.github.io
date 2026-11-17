import React from 'react';
import Reveal from './Reveal';

const details = [
  { label: 'Full Name', value: 'Gummadapu Harshitha Harindra' },
  { label: "Father\'s Name", value: 'Gummadapu Naga Venkata Ramesh' },
  { label: 'Date of Birth', value: '23 June 2001' },
  { label: 'Age', value: '25 Years' },
  { label: 'Marital Status', value: 'Single' },
  { label: 'Languages', value: 'English, Hindi, Telugu, Tamil' },
  { label: 'Email', value: 'Harindra1278@gmail.com', href: 'mailto:Harindra1278@gmail.com' },
  { label: 'Phone', value: '+91 9182487748', href: 'tel:+919182487748' },
];

export default function PersonalInfoSection() {
  return (
    <section id="personal-information" className="relative bg-background py-16 md:py-24" aria-labelledby="personal-title">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="section-label mb-4">// 03 · Personal Information</p>
            <h2 id="personal-title" className="text-section-xl font-extrabold text-foreground">
              Personal Information
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              UAV Software Engineer with 2.4+ years of experience in UAV software development, GCS customization,
              ArduPilot modification, MAVLink integration and UAV system troubleshooting.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={100}>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {details?.map((item) => (
                <div key={item?.label} className="bg-card p-5">
                  <dt className="font-mono-tech text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item?.label}
                  </dt>
                  <dd className="mt-2 break-words text-base font-semibold text-foreground">
                    {item?.href ? (
                      <a href={item?.href} className="transition-colors hover:text-primary">
                        {item?.value}
                      </a>
                    ) : (
                      item?.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
