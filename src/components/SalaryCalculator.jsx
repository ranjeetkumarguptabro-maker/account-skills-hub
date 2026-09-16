import React, { useState } from 'react';
import { TrendingUp, Briefcase, GraduationCap, DollarSign, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SalaryCalculator({ onOpenModal }) {
  const [degree, setDegree] = useState('B.Com Student / Graduate');
  const [targetRole, setTargetRole] = useState('Junior Accountant');

  const roleSalaryData = {
    'Junior Accountant': { base: 18000, postInternship: 28000, boost: '55%' },
    'Accounts Payable / Receivable Specialist': { base: 20000, postInternship: 32000, boost: '60%' },
    'Billing & Invoicing Executive': { base: 16000, postInternship: 25000, boost: '56%' },
    'CRM & Software Accounting Lead': { base: 22000, postInternship: 36000, boost: '63%' }
  };

  const currentData = roleSalaryData[targetRole] || roleSalaryData['Junior Accountant'];

  return (
    <section id="calculator" style={{ position: 'relative', padding: '80px 0', background: '#F8FAFC' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div style={{
            color: '#D97706',
            fontSize: '0.9rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '10px',
            textTransform: 'uppercase'
          }}>
            📈 CAREER IMPACT & ROI ESTIMATOR
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Calculate Your <span className="gold-gradient-text">Salary & Career Growth</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Employers hire candidates with practical skills over theory. See how practical accounting experience boosts your starting salary!
          </p>
        </div>

        <div className="ref-card" style={{
          padding: '40px',
          borderRadius: '24px',
          maxWidth: '1000px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="calc-grid">
            
            {/* Left Inputs */}
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GraduationCap color="#D97706" /> Select Your Background
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>
                    1. Current Qualification
                  </label>
                  <select 
                    value={degree} 
                    onChange={(e) => setDegree(e.target.value)}
                    style={calcSelectStyle}
                  >
                    <option value="B.Com Student / Graduate">B.Com Student / Graduate</option>
                    <option value="BBA Student / Graduate">BBA Student / Graduate</option>
                    <option value="MBA Finance / Accounting">MBA Finance / Accounting</option>
                    <option value="Commerce Fresher">Commerce Fresher / Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>
                    2. Desired Career Role
                  </label>
                  <select 
                    value={targetRole} 
                    onChange={(e) => setTargetRole(e.target.value)}
                    style={calcSelectStyle}
                  >
                    <option value="Junior Accountant">Junior Accountant</option>
                    <option value="Accounts Payable / Receivable Specialist">Accounts Payable / Receivable Specialist</option>
                    <option value="Billing & Invoicing Executive">Billing & Invoicing Executive</option>
                    <option value="CRM & Software Accounting Lead">CRM & Software Accounting Lead</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Output ROI Card matching Reference Dark Card */}
            <div className="ref-card-dark" style={{
              borderRadius: '20px',
              padding: '28px'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#60A5FA', letterSpacing: '1px', marginBottom: '8px' }}>
                ESTIMATED MONTHLY SALARY POTENTIAL
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#D9F99D' }}>
                  ₹{currentData.postInternship.toLocaleString('en-IN')}<span style={{ fontSize: '1rem', color: '#94A3B8' }}>/mo</span>
                </div>
                <div style={{
                  background: 'rgba(217, 249, 157, 0.2)',
                  color: '#D9F99D',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  padding: '2px 10px',
                  borderRadius: '12px'
                }}>
                  +{currentData.boost} Increase
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '20px' }}>
                Without practical accounting skills: ~₹{currentData.base.toLocaleString('en-IN')}/mo
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginBottom: '24px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  🚀 Internship Fee Return on Investment:
                </div>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                  Invest <strong>₹399</strong> today ➔ Gain potential <strong>₹10,000+ monthly salary boost</strong> upon securing your accounting job!
                </div>
              </div>

              <button className="btn-gold" onClick={() => onOpenModal('enroll')} style={{ width: '100%', justifyContent: 'center' }}>
                <Sparkles size={18} /> ENROL TODAY FOR ONLY ₹399
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const calcSelectStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '12px',
  background: '#F8FAFC',
  border: '1px solid #CBD5E1',
  color: '#0F172A',
  fontSize: '0.95rem',
  fontFamily: 'inherit'
};
