import React, { useState } from 'react';
import ThreeCanvasBG from './components/ThreeCanvasBG';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CurriculumTimeline from './components/CurriculumTimeline';
import PracticeLab3D from './components/PracticeLab3D';
import SalaryCalculator from './components/SalaryCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import CertificateShowcase from './components/CertificateShowcase';
import FAQSection from './components/FAQSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('demo'); // 'demo' or 'enroll'

  const handleOpenModal = (mode = 'demo') => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#FFFFFF', color: '#0F172A' }}>
      {/* 3D Canvas Animated Background */}
      <ThreeCanvasBG />

      {/* Main UI Overlay Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenModal={handleOpenModal} />
        
        <main>
          <HeroSection onOpenModal={handleOpenModal} />
          <CurriculumTimeline onOpenModal={handleOpenModal} />
          <PracticeLab3D onOpenModal={handleOpenModal} />
          <SalaryCalculator onOpenModal={handleOpenModal} />
          <TestimonialsSection />
          <CertificateShowcase onOpenModal={handleOpenModal} />
          <FAQSection onOpenModal={handleOpenModal} />
        </main>

        <Footer onOpenModal={handleOpenModal} />
        <FloatingWhatsApp onOpenModal={handleOpenModal} />

        <RegistrationModal 
          isOpen={modalOpen}
          mode={modalMode}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
