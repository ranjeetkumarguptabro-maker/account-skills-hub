import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: "Who can join this 15-Day Practical Accounting Internship?",
    a: "This program is specially designed for B.Com, BBA, MBA finance/accounting students, graduates, and commerce freshers looking to gain practical hands-on experience for jobs."
  },
  {
    q: "How does the FREE DEMO Class work?",
    a: "Your very first class is 100% free! You can attend the demo class live, interact with the instructor, check the teaching methodology, and then decide to complete your enrollment."
  },
  {
    q: "Is prior accounting experience mandatory?",
    a: "No prior work experience is required! We start from basic bookkeeping fundamentals and build up to practical invoicing, bank reconciliation, Excel, and CRM software workflows step by step."
  },
  {
    q: "What is the Internship Fee and how do I get certified?",
    a: "The complete 15-day internship fee is only ₹399. Upon successful completion of all practical tasks and capstone project, you will be awarded an official Internship Completion Certificate."
  },
  {
    q: "What software tools and practical skills will I learn?",
    a: "You will master Journal Entries, General Ledger, Invoicing, Receipt & Payment processing, Accounts Receivable & Payable (AR/AP), Bank Reconciliation Statements (BRS), Excel for Accounting (VLOOKUP, Pivot Tables), and CRM & Accounting software workflows."
  },
  {
    q: "How do I contact support or enrol right now?",
    a: "You can text or WhatsApp us directly at 9310585743 or 9643442360 for immediate registration support."
  }
];

export default function FAQSection({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" style={{ position: 'relative', padding: '80px 0', background: '#F8FAFC' }}>
      <div className="section-container" style={{ maxWidth: '850px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#2563EB', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '8px' }}>
            ❓ FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Got Questions? <span className="gradient-text">We Have Answers</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="ref-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  border: isOpen ? '2px solid #2563EB' : '1px solid #E2E8F0',
                  boxShadow: isOpen ? '0 10px 25px rgba(37, 99, 235, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: '#0F172A',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={20} color={isOpen ? '#2563EB' : '#64748B'} />
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: isOpen ? '#2563EB' : '#94A3B8' }} 
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 56px',
                    color: '#475569',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn-gold" onClick={() => onOpenModal('demo')}>
            <Sparkles size={18} /> ATTEND FREE DEMO CLASS FIRST
          </button>
        </div>

      </div>
    </section>
  );
}
