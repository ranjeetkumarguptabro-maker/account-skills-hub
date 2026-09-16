import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, CheckCircle2, Phone, User, GraduationCap, Clock, QrCode, Instagram } from 'lucide-react';
import whatsappQrImg from '../assets/whatsapp-qr.png';
import instaQrImg from '../assets/insta-qr.png';

export default function RegistrationModal({ isOpen, mode, onClose }) {
  if (!isOpen) return null;

  const [activeContactTab, setActiveContactTab] = useState('qr'); // 'qr' or 'form'
  const [selectedQr, setSelectedQr] = useState('whatsapp'); // 'whatsapp' or 'insta'

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('B.Com Student');
  const [batch, setBatch] = useState('Evening Batch (7:00 PM - 8:30 PM)');
  const [targetPhone, setTargetPhone] = useState('9310585743');

  const handleWhatsAppAction = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your Name and WhatsApp phone number.');
      return;
    }

    const typeText = mode === 'demo' ? 'FREE DEMO CLASS' : 'ENROLLMENT (₹399)';
    const textMessage = `Hello AccountSkills Hub! 👋%0A%0AI want to register for the *15-Day Practical Accounting Internship*.%0A%0A📌 *Registration Type:* ${typeText}%0A👤 *Name:* ${name}%0A📱 *WhatsApp:* ${phone}%0A🎓 *Qualification:* ${qualification}%0A⏰ *Preferred Batch:* ${batch}%0A%0APlease confirm my seat!`;

    const whatsappUrl = `https://wa.me/91${targetPhone}?text=${textMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(16px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="ref-card" style={{
        maxWidth: '560px',
        width: '100%',
        padding: '32px',
        borderRadius: '24px',
        position: 'relative',
        background: '#FFFFFF',
        border: '2px solid #2563EB',
        boxShadow: '0 25px 60px rgba(15, 23, 42, 0.25)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F1F5F9',
            border: 'none',
            color: '#0F172A',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: mode === 'demo' ? '#FEF3C7' : '#DCFCE7',
            color: mode === 'demo' ? '#D97706' : '#16A34A',
            fontWeight: 800,
            fontSize: '0.8rem',
            padding: '4px 12px',
            borderRadius: '20px',
            marginBottom: '10px'
          }}>
            <Sparkles size={14} />
            {mode === 'demo' ? 'FIRST CLASS ABSOLUTELY FREE DEMO' : 'ENROLMENT FEE ONLY ₹399'}
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>
            {mode === 'demo' ? 'Reserve Your Free Demo Seat' : 'Complete Internship Enrollment'}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
            Scan our Official QR Code or fill out the form to register instantly!
          </p>
        </div>

        {/* Contact Method Tab Selector */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', background: '#F8FAFC', padding: '6px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
          <button 
            type="button"
            onClick={() => setActiveContactTab('qr')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              border: 'none',
              background: activeContactTab === 'qr' ? '#2563EB' : 'transparent',
              color: activeContactTab === 'qr' ? '#FFFFFF' : '#475569',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <QrCode size={16} /> 📲 Scan Official QR Code
          </button>
          <button 
            type="button"
            onClick={() => setActiveContactTab('form')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              border: 'none',
              background: activeContactTab === 'form' ? '#2563EB' : 'transparent',
              color: activeContactTab === 'form' ? '#FFFFFF' : '#475569',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <MessageCircle size={16} /> 📝 Fill Quick Application Form
          </button>
        </div>

        {/* TAB 1: QR CODE DISPLAY (WhatsApp & Instagram) */}
        {activeContactTab === 'qr' && (
          <div style={{ textAlign: 'center' }}>
            {/* QR Selector Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
              <button
                type="button"
                onClick={() => setSelectedQr('whatsapp')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedQr === 'whatsapp' ? '2px solid #16A34A' : '1px solid #CBD5E1',
                  background: selectedQr === 'whatsapp' ? '#DCFCE7' : '#FFFFFF',
                  color: selectedQr === 'whatsapp' ? '#15803D' : '#475569',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MessageCircle size={14} /> WhatsApp Official QR
              </button>
              <button
                type="button"
                onClick={() => setSelectedQr('insta')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedQr === 'insta' ? '2px solid #E1306C' : '1px solid #CBD5E1',
                  background: selectedQr === 'insta' ? '#FCE7F3' : '#FFFFFF',
                  color: selectedQr === 'insta' ? '#BE185D' : '#475569',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Instagram size={14} /> Instagram QR (@ACCOUNTSSKILLS_HUB)
              </button>
            </div>

            {/* Display Selected QR Code Image */}
            <div style={{
              background: selectedQr === 'whatsapp' ? '#F0FDF4' : '#FFF1F2',
              border: selectedQr === 'whatsapp' ? '2px solid #86EFAC' : '2px solid #FECDD3',
              borderRadius: '20px',
              padding: '20px',
              maxWidth: '340px',
              margin: '0 auto 20px auto',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
            }}>
              <img 
                src={selectedQr === 'whatsapp' ? whatsappQrImg : instaQrImg} 
                alt={selectedQr === 'whatsapp' ? "WhatsApp Official QR Code" : "Instagram Official QR Code"}
                style={{
                  width: '100%',
                  maxHeight: '280px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <div style={{ marginTop: '12px', fontWeight: 800, fontSize: '0.9rem', color: '#0F172A' }}>
                {selectedQr === 'whatsapp' 
                  ? '📱 Scan with WhatsApp Camera to add AccountSkills Hub' 
                  : '📷 Scan to follow @ACCOUNTSSKILLS_HUB on Instagram'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
                Scan with any QR Scanner or phone camera to connect & enrol!
              </div>
            </div>

            {/* Direct Helpline Click Options */}
            <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', marginBottom: '8px' }}>
                OR CLICK TO CALL / CHAT DIRECTLY:
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <a 
                  href="https://wa.me/919310585743" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-whatsapp" 
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  <MessageCircle size={14} /> WhatsApp: 9310585743
                </a>
                <a 
                  href="https://wa.me/919643442360" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-whatsapp" 
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  <MessageCircle size={14} /> WhatsApp: 9643442360
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATION FORM */}
        {activeContactTab === 'form' && (
          <form onSubmit={handleWhatsAppAction} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={labelStyle}><User size={14} /> Full Name *</label>
              <input 
                type="text" 
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}><Phone size={14} /> WhatsApp Number *</label>
              <input 
                type="tel" 
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}><GraduationCap size={14} /> Qualification</label>
              <select 
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                style={inputStyle}
              >
                <option value="B.Com Student">B.Com Student</option>
                <option value="BBA Student">BBA Student</option>
                <option value="MBA Student / Graduate">MBA Student / Graduate</option>
                <option value="Commerce Fresher">Commerce Fresher</option>
                <option value="Other Student / Job Seeker">Other Student / Job Seeker</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}><Clock size={14} /> Preferred Batch Timing</label>
              <select 
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                style={inputStyle}
              >
                <option value="Evening Batch (7:00 PM - 8:30 PM)">Evening Batch (7:00 PM - 8:30 PM)</option>
                <option value="Morning Batch (10:00 AM - 11:30 AM)">Morning Batch (10:00 AM - 11:30 AM)</option>
                <option value="Weekend Special Batch">Weekend Special Batch</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '6px', padding: '14px' }}
            >
              <MessageCircle size={18} /> SEND DETAILS VIA WHATSAPP NOW
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: 700,
  color: '#334155',
  marginBottom: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  background: '#F8FAFC',
  border: '1px solid #CBD5E1',
  color: '#0F172A',
  fontSize: '0.9rem',
  fontFamily: 'inherit'
};
