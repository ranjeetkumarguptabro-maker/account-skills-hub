import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function MobileStickyBar({ onOpenModal }) {
  return (
    <>
      <div 
        className="mobile-sticky-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          borderTop: '2px solid #BFDBFE',
          padding: '10px 16px',
          zIndex: 999,
          boxShadow: '0 -4px 20px rgba(15, 23, 42, 0.15)',
          display: 'none', // Shown only on mobile screens via CSS media query
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <button 
          className="btn-gold" 
          onClick={() => onOpenModal('demo')}
          style={{ 
            flex: 1, 
            padding: '10px 12px', 
            fontSize: '0.8rem', 
            fontWeight: 800,
            borderRadius: '12px',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <Sparkles size={14} /> FREE DEMO
        </button>

        <button 
          className="btn-whatsapp" 
          onClick={() => onOpenModal('enroll')}
          style={{ 
            flex: 1, 
            padding: '10px 12px', 
            fontSize: '0.8rem', 
            fontWeight: 800,
            borderRadius: '12px',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <MessageCircle size={14} /> ENROL ₹399
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: flex !important;
          }
          body {
            padding-bottom: 60px; /* Prevent footer content from being covered by sticky bar */
          }
        }
      `}</style>
    </>
  );
}
