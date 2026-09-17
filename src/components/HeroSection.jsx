import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Award, Zap, Phone, Eye, X, ArrowRight, ShieldCheck, TrendingUp, Users, Laptop, ZoomIn } from 'lucide-react';
import flyerImg from '../assets/internship-flyer.jpg';
import checkIcon from '../assets/check-icon.png';
import practicalLabImg from '../assets/practical-lab-poster.jpg';
import verifiedCredImg from '../assets/verified-credential-poster.jpg';

export default function HeroSection({ onOpenModal }) {
  const [activePoster, setActivePoster] = useState(null);

  return (
    <section id="overview" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. TOP HERO SECTION WITH SKY-BLUE GRADIENT & GIANT HEADING */}
      <div style={{
        background: 'linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 65%, #FFFFFF 100%)',
        paddingTop: '60px',
        paddingBottom: '80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Target Audience Pill List */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            background: '#FFFFFF',
            border: '1px solid #BFDBFE',
            color: '#1E40AF',
            fontWeight: 800,
            fontSize: '0.85rem',
            marginBottom: '24px',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.08)'
          }}>
            <Zap size={16} color="#F59E0B" /> 15-DAY PRACTICAL ACCOUNTING & CRM INTERNSHIP PROGRAM
          </div>

          {/* Giant Bold Headline matching Reference Image */}
          <h1 className="giant-heading" style={{ marginBottom: '16px' }}>
            GAIN CORPORATE <br />
            <span className="gradient-text">ACCOUNTING SKILLS</span> TODAY.
          </h1>

          <p style={{
            maxWidth: '720px',
            margin: '0 auto 36px auto',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#334155',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Master real-world Ledger Posting, Invoicing, BRS, Excel Automation, and CRM software workflows used in actual corporate finance environments!
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button className="btn-gold" onClick={() => onOpenModal('demo')} style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <Sparkles size={20} /> BOOK FREE DEMO CLASS
            </button>
            <button className="btn-navy" onClick={() => onOpenModal('enroll')} style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              ENROL NOW FOR ₹399 <ArrowRight size={18} />
            </button>
          </div>

          {/* Target Audience Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
            {['B.Com Students', 'BBA Students', 'MBA Graduates', 'Commerce Freshers', 'Job Seekers'].map((tag, idx) => (
              <span key={idx} style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: '9999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <img src={checkIcon} alt="Check" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                {tag}
              </span>
            ))}
          </div>

          {/* 3 Showcase Cards Grid with High-Res Posters */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '24px',
            maxWidth: '1080px',
            margin: '0 auto'
          }} className="hero-3cards">
            
            {/* Card 1: Practical Software Lab Poster */}
            <div 
              className="ref-card" 
              style={{
                padding: '12px',
                textAlign: 'left',
                border: '2px solid #2563EB',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.12)',
                transition: 'transform 0.3s ease',
                background: '#FFFFFF'
              }}
              onClick={() => setActivePoster({ img: practicalLabImg, title: "Practical Software Lab Poster" })}
            >
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '14px', height: '380px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <img src={practicalLabImg} alt="Practical Software Lab Poster" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '14px' }} />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backdropFilter: 'blur(8px)'
                }}>
                  <Eye size={12} /> Expand
                </div>
              </div>
              <div style={{ padding: '12px 4px 4px 4px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Practical Software Lab</div>
                <div style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700 }}>Tally • Excel • CRM (100% Practical)</div>
              </div>
            </div>

            {/* Card 2: Official Syllabus Brochure */}
            <div 
              className="ref-card" 
              style={{
                padding: '12px',
                textAlign: 'left',
                border: '2px solid #2563EB',
                cursor: 'pointer',
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.18)',
                background: '#FFFFFF'
              }}
              onClick={() => setActivePoster({ img: flyerImg, title: "Official Internship Syllabus Poster" })}
            >
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '14px', height: '380px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <img src={flyerImg} alt="Official Internship Brochure" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '14px' }} />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#F59E0B',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backdropFilter: 'blur(8px)'
                }}>
                  <Eye size={12} /> Expand
                </div>
              </div>
              <div style={{ padding: '12px 4px 4px 4px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Official Syllabus Brochure</div>
                <div style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700 }}>Full 15-Day Course Plan</div>
              </div>
            </div>

            {/* Card 3: Verified Credential & Internship Certification Poster */}
            <div 
              className="ref-card" 
              style={{
                padding: '12px',
                textAlign: 'left',
                border: '2px solid #2563EB',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.12)',
                transition: 'transform 0.3s ease',
                background: '#FFFFFF'
              }}
              onClick={() => setActivePoster({ img: verifiedCredImg, title: "Verified Credential & Internship Certification Poster" })}
            >
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '14px', height: '380px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <img src={verifiedCredImg} alt="Verified Credential Poster" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '14px' }} />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backdropFilter: 'blur(8px)'
                }}>
                  <Eye size={12} /> Expand
                </div>
              </div>
              <div style={{ padding: '12px 4px 4px 4px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Verified Credential</div>
                <div style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700 }}>Shareable on Resume & LinkedIn</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. SUB-HERO SECTION: "Discover the Freedom to Learn Your Way" matching Reference Middle */}
      <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
              Discover the Freedom to <span className="gradient-text">Learn Accounting Your Way</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem' }}>
              Join hundreds of commerce students and freshers gaining corporate accounting skills online with live mentors and hands-on software labs.
            </p>
          </div>

          {/* Filter Pill Buttons matching Reference */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button className="btn-pill-filter active">All Features</button>
            <button className="btn-pill-filter" onClick={() => onOpenModal('demo')}>Free Demo Class</button>
            <button className="btn-pill-filter" onClick={() => onOpenModal('enroll')}>₹399 Full Access</button>
            <button className="btn-pill-filter">Practical Accounting Lab</button>
            <button className="btn-pill-filter">Verified Certificate</button>
          </div>

          {/* 2 Big Feature Cards matching Reference Middle Section (Dark Card Left + Light Card Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="mode-grid">
            
            {/* Left Big Dark Card with 85% Salary Chart Highlight */}
            <div className="ref-card-dark" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  background: 'rgba(217, 249, 157, 0.2)',
                  color: '#D9F99D',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '20px'
                }}>
                  <TrendingUp size={16} /> CAREER IMPACT STATS
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                  Boost Your Starting Salary Potential
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '28px' }}>
                  Candidates with practical ledger, invoicing, and BRS experience get hired faster with up to 55%-63% higher starting salary offers!
                </p>
              </div>

              {/* 85% Graphic Box matching Reference image */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#D9F99D', lineHeight: 1 }}>
                  85%
                </div>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '6px', marginBottom: '16px' }}>
                  Percentage of candidates reporting increased interview calls & job offers after completing practical accounting tasks.
                </div>
                
                {/* Bar chart graphic */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '40px' }}>
                  {[30, 45, 55, 40, 65, 75, 90, 85, 95, 100, 85, 90].map((h, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i > 6 ? '#D9F99D' : '#3B82F6',
                      borderRadius: '4px'
                    }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Light Cards matching Reference */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div className="ref-card" style={{ padding: '30px' }}>
                <div style={{
                  background: '#FEF3C7',
                  color: '#D97706',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Live Interactive Practical Batches
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Learn directly from experienced corporate accounting practitioners. Engage in live task solving, clear doubts instantly, and work on real business ledger cases.
                </p>
              </div>

              <div className="ref-card" style={{ padding: '30px' }}>
                <div style={{
                  background: '#EFF6FF',
                  color: '#2563EB',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Laptop size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Hands-On Software & CRM Workflows
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Master Excel formulas (VLOOKUP, Pivot Tables), GST Invoicing formats, Bank Reconciliation Statements (BRS), and cloud CRM accounting software workflows step by step.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal for Poster Viewer */}
      {activePoster && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }} onClick={() => setActivePoster(null)}>
          <div style={{ position: 'relative', maxWidth: '600px', width: '100%', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setActivePoster(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                background: '#FFFFFF',
                color: '#0F172A',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>
            <img 
              src={activePoster.img} 
              alt={activePoster.title} 
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '16px', border: '2px solid #BFDBFE', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', display: 'block' }}
            />
            <div style={{ marginTop: '16px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button className="btn-gold" onClick={() => { setActivePoster(null); onOpenModal('demo'); }}>
                BOOK FREE DEMO NOW
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hero-3cards { grid-template-columns: 1fr !important; }
          .mode-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
