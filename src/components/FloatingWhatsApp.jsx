import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenModal }) {
  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
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
