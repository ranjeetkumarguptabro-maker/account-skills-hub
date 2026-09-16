import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, BookOpen, Award, PhoneCall, Layers, CheckCircle } from 'lucide-react';
import logoImg from '../assets/account-skills-logo.jpg';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Urgent Alert Bar with Continuous Scrolling Marquee */}
      <div style={{
        background: 'linear-gradient(90deg, #1E3A8A 0%, #2563EB 50%, #0284C7 100%)',
        color: '#FFFFFF',
        fontSize: '0.85rem',
        fontWeight: '800',
        padding: '8px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 101,
        letterSpacing: '0.5px',
        whiteSpace: 'nowrap'
      }}>
        <div className="marquee-track" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '24px',
          whiteSpace: 'nowrap'
        }}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span>🔥 <strong>ENROLMENTS OPEN</strong></span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>15-Day Accounting & CRM</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span style={{ background: '#F59E0B', color: '#0F172A', padding: '2px 8px', borderRadius: '10px', fontWeight: 900, fontSize: '0.78rem' }}>
                ⚡ {seatsLeft} SEATS LEFT
              </span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span style={{ color: '#D9F99D', fontWeight: 900 }}>Fee: ₹399</span>
              <span style={{ opacity: 0.3, margin: '0 12px' }}>|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main White Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.2)' : '1px solid #E2E8F0',
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.06)' : 'none'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Brand Logo & Name */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img 
              src={logoImg} 
              alt="AccountSkills Hub Logo" 
              style={{
                height: '46px',
                borderRadius: '8px',
                border: '2px solid rgba(37, 99, 235, 0.3)',
                boxShadow: '0 2px 10px rgba(37, 99, 235, 0.15)'
              }} 
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: '#0F172A',
                lineHeight: 1.1,
                letterSpacing: '0.5px'
              }}>
                ACCOUNTSKILLS <span style={{ color: '#2563EB' }}>HUB</span>
              </div>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#D97706',
                letterSpacing: '2px'
              }}>
                LEARN • PRACTICE • GROW
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }} className="desktop-nav">
            <a href="#overview" style={navLinkStyle}>Overview</a>
            <a href="#curriculum" style={navLinkStyle}>Curriculum</a>
            <a href="#practicelab" style={navLinkStyle}>Practical Lab</a>
            <a href="#certificate" style={navLinkStyle}>Certificate</a>
            <a href="#calculator" style={navLinkStyle}>Career Calculator</a>
            <a href="#faq" style={navLinkStyle}>FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              className="btn-gold" 
              onClick={() => onOpenModal('demo')}
              style={{ 
                padding: '6px 14px', 
                fontSize: '0.78rem', 
                fontWeight: 800,
                letterSpacing: '0.4px',
                borderRadius: '9999px',
                gap: '5px'
              }}
            >
              <Sparkles size={14} /> FREE DEMO CLASS
            </button>
            <button 
              className="btn-primary"
              onClick={() => onOpenModal('enroll')}
              style={{ 
                padding: '6px 14px', 
                fontSize: '0.78rem', 
                fontWeight: 800,
                letterSpacing: '0.4px',
                borderRadius: '9999px',
                gap: '5px'
              }}
            >
              <MessageCircle size={14} /> ENROL NOW ₹399
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: inline-flex;
          animation: marqueeScroll 22s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}

const navLinkStyle = {
  color: '#334155',
  fontSize: '0.9rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
