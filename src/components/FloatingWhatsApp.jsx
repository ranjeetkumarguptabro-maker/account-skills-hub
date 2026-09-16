import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenModal }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
      
      {showTooltip && (
        <div style={{
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid #25D366',
          color: '#FFFFFF',
          padding: '10px 14px',
          borderRadius: '14px',
          fontSize: '0.85rem',
          fontWeight: 700,
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backdropFilter: 'blur(10px)',
          animation: 'floatSlow 4s infinite ease-in-out'
        }}>
          <span>💬 Need Internship Info? Text us!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      <button
        className="btn-whatsapp"
        onClick={() => onOpenModal('enroll')}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          padding: 0,
          justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.6)'
        }}
        title="WhatsApp Chat Support"
      >
        <MessageCircle size={30} />
      </button>

    </div>
  );
}
