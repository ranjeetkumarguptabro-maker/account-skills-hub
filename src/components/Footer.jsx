import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import logoImg from '../assets/account-skills-logo.jpg';

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: '#475569'
    }}>
      <div className="section-container" style={{ paddingBottom: '30px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '40px'
        }} className="footer-grid">
          
          {/* Brand Info & Newsletter Bar matching Reference Image */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src={logoImg} alt="AccountSkills Hub" style={{ height: '42px', borderRadius: '8px' }} />
              <div>
                <div style={{ fontWeight: 900, color: '#0F172A', fontSize: '1.2rem' }}>
                  ACCOUNTSKILLS <span style={{ color: '#2563EB' }}>HUB</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#D97706', fontWeight: 800, letterSpacing: '2px' }}>
                  LEARN • PRACTICE • GROW
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px', color: '#64748B' }}>
              Unlock new opportunities and reach your full potential through our curated 15-Day Practical Accounting & CRM Internship.
            </p>

            {/* Email Newsletter Input Box matching Reference Image */}
            <form onSubmit={handleSubscribe} style={{ position: 'relative', maxWidth: '360px', marginBottom: '16px' }}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 48px 12px 16px',
                  borderRadius: '9999px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#2563EB',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ArrowRight size={16} />
              </button>
            </form>

            {subscribed && (
              <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>
                ✓ Subscribed! You will receive internship & class updates.
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '16px' }}>
              Quick Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <a href="#overview" style={linkStyle}>Program Overview</a>
              <a href="#curriculum" style={linkStyle}>15-Day Curriculum</a>
              <a href="#practicelab" style={linkStyle}>Practical Accounting Lab</a>
              <a href="#certificate" style={linkStyle}>Internship Certificate</a>
              <a href="#calculator" style={linkStyle}>Career & Salary Calculator</a>
              <a href="#faq" style={linkStyle}>FAQ</a>
            </div>
          </div>

          {/* Internship Specs */}
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '16px' }}>
              Program Specs
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#475569' }}>
              <div>⏱️ <strong>Duration:</strong> 15 Days</div>
              <div>💰 <strong>Fee:</strong> ₹399 Only</div>
              <div>🎁 <strong>Demo:</strong> 1st Class Free</div>
              <div>📜 <strong>Credential:</strong> Verified Certificate</div>
              <div>💻 <strong>Format:</strong> Live Batches</div>
            </div>
          </div>

          {/* Contact Helpline */}
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '16px' }}>
              Helpline & Support
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <a href="https://wa.me/919310585743" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16A34A', textDecoration: 'none', fontWeight: 800 }}>
                <MessageCircle size={16} /> 9310585743
              </a>
              <a href="https://wa.me/919643442360" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16A34A', textDecoration: 'none', fontWeight: 800 }}>
                <MessageCircle size={16} /> 9643442360
              </a>
              <button className="btn-gold" onClick={() => onOpenModal('demo')} style={{ marginTop: '8px', padding: '10px 16px', fontSize: '0.8rem' }}>
                <Sparkles size={14} /> BOOK FREE DEMO CLASS
              </button>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #E2E8F0', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
          © 2026 AccountSkills Hub. All Rights Reserved. Practical Accounting & CRM Internship Program.
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

const linkStyle = {
  color: '#64748B',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};
