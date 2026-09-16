import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Eye, Sparkles, X, ZoomIn } from 'lucide-react';
import logoImg from '../assets/account-skills-logo.jpg';
import certImg from '../assets/certificate1demo.jpeg';

export default function CertificateShowcase({ onOpenModal }) {
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="certificate" style={{ position: 'relative', padding: '80px 0', background: '#FFFFFF' }}>
      <div className="section-container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }} className="cert-grid">
          
          {/* Left Side: Real Student Certificate Image Showcase */}
          <div 
            className="ref-card" 
            style={{
              padding: '16px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: '2px solid #F59E0B',
              boxShadow: '0 20px 50px rgba(245, 158, 11, 0.15)',
              position: 'relative',
              cursor: 'pointer'
            }}
            onClick={() => setShowCertModal(true)}
          >
            {/* Top Verified Badge Overlay */}
            <div style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              zIndex: 10,
              background: 'rgba(15, 23, 42, 0.9)',
              color: '#F59E0B',
              border: '1px solid #F59E0B',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '6px 14px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
            }}>
              <ZoomIn size={14} /> Click to Inspect Certificate
            </div>

            {/* Certificate Real Image Display */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
              <img 
                src={certImg} 
                alt="AccountSkills Hub Official Internship Completion Certificate"
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                }}
              />
            </div>

            <div style={{ padding: '16px 8px 4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: '#0F172A' }}>Official Internship Certificate Specimen</div>
                <div style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 700 }}>Issued upon 100% completion of practical tasks & capstone</div>
              </div>
              <div style={{ color: '#2563EB', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Inspect <Eye size={14} />
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Benefits */}
          <div>
            <div style={{
              color: '#D97706',
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '2px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              📜 OFFICIAL CERTIFICATION
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '20px' }}>
              Boost Your Resume with an <span className="gold-gradient-text">Internship Certificate</span>
            </h2>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Upon successful completion of your 15-day practical tasks and capstone project, you will be awarded this official <strong>Internship Completion Certificate</strong> that you can showcase on your Resume & LinkedIn profile.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Sharable on LinkedIn, Resume, and Job Portals (Naukri, Indeed)',
                'Demonstrates real hands-on practical accounting experience to employers',
                'Includes verified credential ID for employer background checks',
                'Backed by AccountSkills Hub practical learning guarantee'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1E293B', fontSize: '0.95rem', fontWeight: 600 }}>
                  <CheckCircle2 size={20} color="#059669" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <button className="btn-gold" onClick={() => onOpenModal('enroll')} style={{ padding: '16px 32px' }}>
              <Sparkles size={20} /> ENROL NOW FOR ₹399 & GET CERTIFIED
            </button>
          </div>

        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {showCertModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <button 
            onClick={() => setShowCertModal(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>

          <div style={{ maxWidth: '750px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <img 
              src={certImg} 
              alt="Official Internship Certificate Specimen Full View" 
              style={{ width: '100%', borderRadius: '16px', border: '2px solid #F59E0B', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}
            />
            <div style={{ marginTop: '16px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button className="btn-gold" onClick={() => { setShowCertModal(false); onOpenModal('enroll'); }}>
                ENROL NOW FOR ₹399 & CLAIM CERTIFICATE
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
