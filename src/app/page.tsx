import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TelemetrySection from './components/TelemetrySection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import PersonalInfoSection from './components/PersonalInfoSection';
import CertificatesDetailsSection from './components/CertificatesDetailsSection';
import ConnectSection from './components/ConnectSection';

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <TelemetrySection />
      <ProjectsSection />
      <SkillsSection />
      <PersonalInfoSection />
      <CertificatesDetailsSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}