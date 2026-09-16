import React from 'react';

const testimonials = [
  {
    quote: "I used to struggle with ledger posting and debit/credit rules. The mentor explained complex accounts topics so simply that I built real confidence for interviews!",
    name: "Yash Royman",
    role: "B.Com Graduate • Junior Accountant",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "The GST Invoicing and Bank Reconciliation practical modules were the best part! Real software tasks made me job-ready.",
    name: "Divya Dutra",
    role: "BBA Student • Billing Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "I never realized how powerful Excel VLOOKUP & Pivot tables were until I joined this 15-day internship. Best ₹399 investment!",
    name: "Clara Santoso",
    role: "MBA Finance • Accounts Executive",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "Got placed as an Accounts Receivable Associate right after adding the AccountSkills Hub Internship Certificate to my LinkedIn & Resume.",
    name: "Riya Karikalan",
    role: "Commerce Fresher • AR Specialist",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section style={{
      position: 'relative',
      padding: '100px 0',
      background: 'var(--bg-blue-accent)',
      overflow: 'hidden'
    }}>
      {/* Giant Background Uppercase Typography matching Reference Image */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
        zIndex: 1
      }}>
        <div className="giant-bg-text">
          WHAT OUR <br />
          STUDENTS SAY
        </div>
      </div>

      {/* Floating Testimonial Cards Overlay */}
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: '#FFFFFF',
            border: '1px solid #BFDBFE',
            color: '#1E40AF',
            fontSize: '0.8rem',
            fontWeight: 800,
            padding: '6px 16px',
            borderRadius: '20px'
          }}>
            🎓 STUDENT REVIEWS & FEEDBACK
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginTop: '12px' }}>
            Trusted by Commerce Students & Freshers
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto'
        }} className="testi-grid">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="ref-card"
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                border: '1px solid #BFDBFE'
              }}
            >
              <p style={{
                fontSize: '0.98rem',
                color: '#1E293B',
                lineHeight: 1.6,
                fontWeight: 600,
                marginBottom: '20px',
                fontStyle: 'italic'
              }}>
                "{item.quote}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #2563EB' }} 
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>{item.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 600 }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
