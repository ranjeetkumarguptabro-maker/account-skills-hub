import React, { useState } from 'react';
import { Calculator, CheckCircle2, RefreshCw, Sparkles, FileSpreadsheet, ArrowRight, DollarSign, Award, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PracticeLab3D({ onOpenModal }) {
  const [activeTool, setActiveTool] = useState('journal');

  // Tool 1: Journal Entry Simulator State
  const [debitAccount, setDebitAccount] = useState('Equipment / Office Assets');
  const [creditAccount, setCreditAccount] = useState('Cash / Bank Account');
  const [amount, setAmount] = useState('25000');
  const [journalFeedback, setJournalFeedback] = useState(null);

  const handleVerifyJournal = () => {
    if (debitAccount !== creditAccount) {
      setJournalFeedback({
        type: 'success',
        msg: `🎉 PERFECT! Journal Entry Passed: Dr. ${debitAccount} ₹${Number(amount).toLocaleString('en-IN')} | Cr. ${creditAccount} ₹${Number(amount).toLocaleString('en-IN')}`
      });
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    } else {
      setJournalFeedback({
        type: 'error',
        msg: '⚠️ Debit and Credit accounts cannot be the same. Select separate accounts.'
      });
    }
  };

  // Tool 2: Invoice Builder Preview State
  const [clientName, setClientName] = useState('Apex Technologies Pvt Ltd');
  const [invoiceItem, setInvoiceItem] = useState('Accounting & CRM Consulting');
  const [qty, setQty] = useState(2);
  const [rate, setRate] = useState(12500);

  const subtotal = qty * rate;
  const gst = subtotal * 0.18;
  const totalAmount = subtotal + gst;

  return (
    <section id="practicelab" style={{ position: 'relative', padding: '80px 0', background: '#FFFFFF' }}>
      <div className="section-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div style={{
            color: '#2563EB',
            fontSize: '0.9rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '10px',
            textTransform: 'uppercase'
          }}>
            ⚡ INTERACTIVE LEARNING PREVIEW
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Experience Our <span className="gradient-text">Practical Accounting Lab</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Try these live hands-on simulations right here to see how practical tasks are taught during the 15-day internship.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTool('journal')}
            className={activeTool === 'journal' ? 'btn-primary' : 'btn-glass'}
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <Calculator size={18} /> 1. Journal Entry Simulator
          </button>
          <button
            onClick={() => setActiveTool('invoice')}
            className={activeTool === 'invoice' ? 'btn-primary' : 'btn-glass'}
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <FileSpreadsheet size={18} /> 2. Real-Time Invoicing Sandbox
          </button>
        </div>

        {/* TOOL 1: Journal Entry Practice Simulator */}
        {activeTool === 'journal' && (
          <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px', maxWidth: '900px', margin: '0 auto', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div>
                <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1px' }}>
                  PRACTICAL SCENARIO #01
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
                  Transaction: Purchase of Office Computers for Cash
                </h3>
              </div>
              <div style={{
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                color: '#1E40AF',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                Interactive Exercise
              </div>
            </div>

            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #E2E8F0',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 120px', gap: '20px' }} className="simulator-grid">
                
                {/* Debit Column */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#2563EB', marginBottom: '8px' }}>
                    1. DEBIT ACCOUNT (Dr.)
                  </label>
                  <select 
                    value={debitAccount}
                    onChange={(e) => setDebitAccount(e.target.value)}
                    style={selectStyle}
                  >
                    <option value="Equipment / Office Assets">Equipment / Office Assets</option>
                    <option value="Cash / Bank Account">Cash / Bank Account</option>
                    <option value="Accounts Payable Vendor">Accounts Payable Vendor</option>
                    <option value="Sales Revenue Account">Sales Revenue Account</option>
                  </select>
                </div>

                {/* Credit Column */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#D97706', marginBottom: '8px' }}>
                    2. CREDIT ACCOUNT (Cr.)
                  </label>
                  <select 
                    value={creditAccount}
                    onChange={(e) => setCreditAccount(e.target.value)}
                    style={selectStyle}
                  >
                    <option value="Cash / Bank Account">Cash / Bank Account</option>
                    <option value="Equipment / Office Assets">Equipment / Office Assets</option>
                    <option value="Capital Account">Capital Account</option>
                    <option value="Sales Revenue Account">Sales Revenue Account</option>
                  </select>
                </div>

                {/* Amount Column */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#059669', marginBottom: '8px' }}>
                    AMOUNT (₹)
                  </label>
                  <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={inputStyle}
                  />
                </div>

              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }} className="sim-footer">
              <button className="btn-gold" onClick={handleVerifyJournal} style={{ padding: '14px 28px' }}>
                <Sparkles size={18} /> VERIFY JOURNAL ENTRY
              </button>

              <button className="btn-glass" onClick={() => onOpenModal('demo')}>
                Learn Full Ledger Posting in Demo Class <ArrowRight size={16} />
              </button>
            </div>

            {journalFeedback && (
              <div style={{
                marginTop: '20px',
                padding: '16px',
                borderRadius: '12px',
                background: journalFeedback.type === 'success' ? '#ECFDF5' : '#FEF2F2',
                border: journalFeedback.type === 'success' ? '1px solid #A7F3D0' : '1px solid #FECACA',
                color: journalFeedback.type === 'success' ? '#065F46' : '#991B1B',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}>
                {journalFeedback.msg}
              </div>
            )}
          </div>
        )}

        {/* TOOL 2: Real-Time Invoicing Sandbox */}
        {activeTool === 'invoice' && (
          <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px', maxWidth: '950px', margin: '0 auto', background: '#FFFFFF' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '30px' }} className="invoice-grid">
              
              {/* Controls */}
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px', color: '#0F172A' }}>
                  Invoice Input Parameters
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Client / Company Name</label>
                    <input 
                      type="text" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      style={inputStyle} 
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Description of Service</label>
                    <input 
                      type="text" 
                      value={invoiceItem}
                      onChange={(e) => setInvoiceItem(e.target.value)}
                      style={inputStyle} 
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Quantity / Hrs</label>
                      <input 
                        type="number" 
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        style={inputStyle} 
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Rate per Unit (₹)</label>
                      <input 
                        type="number" 
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        style={inputStyle} 
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <button className="btn-gold" onClick={() => onOpenModal('demo')} style={{ width: '100%', justifyContent: 'center' }}>
                    <Sparkles size={18} /> Master Invoicing Software Workflows
                  </button>
                </div>
              </div>

              {/* Live Invoice Preview Sheet */}
              <div style={{
                background: '#FFFFFF',
                color: '#0F172A',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #CBD5E1',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                fontFamily: 'sans-serif'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #E2E8F0', paddingBottom: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#0F172A' }}>ACCOUNTSKILLS HUB</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>TAX INVOICE • ORIGINAL</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, color: '#2563EB' }}>INV-2026-089</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Date: Sept 16, 2026</div>
                  </div>
                </div>

                <div style={{ marginBottom: '16px', fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748B', fontWeight: 600 }}>Billed To:</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0F172A' }}>{clientName || 'Client Name'}</div>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '16px' }}>
                  <thead>
                    <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #CBD5E1', textAlign: 'left' }}>
                      <th style={{ padding: '8px' }}>Description</th>
                      <th style={{ padding: '8px', textAlign: 'center' }}>Qty</th>
                      <th style={{ padding: '8px', textAlign: 'right' }}>Rate</th>
                      <th style={{ padding: '8px', textAlign: 'right' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px', borderBottom: '1px solid #E2E8F0' }}>{invoiceItem}</td>
                      <td style={{ padding: '8px', borderBottom: '1px solid #E2E8F0', textAlign: 'center' }}>{qty}</td>
                      <td style={{ padding: '8px', borderBottom: '1px solid #E2E8F0', textAlign: 'right' }}>₹{rate.toLocaleString()}</td>
                      <td style={{ padding: '8px', borderBottom: '1px solid #E2E8F0', textAlign: 'right' }}>₹{subtotal.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', fontSize: '0.85rem' }}>
                  <div>Subtotal: <strong>₹{subtotal.toLocaleString()}</strong></div>
                  <div>GST (18%): <strong>₹{gst.toLocaleString()}</strong></div>
                  <div style={{ fontSize: '1.05rem', color: '#2563EB', fontWeight: 900, marginTop: '4px', borderTop: '2px solid #0F172A', paddingTop: '4px' }}>
                    Total Payable: ₹{totalAmount.toLocaleString()}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 800px) {
          .simulator-grid { grid-template-columns: 1fr !important; }
          .sim-footer { flex-direction: column !important; }
          .invoice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  background: '#F8FAFC',
  border: '1px solid #CBD5E1',
  color: '#0F172A',
  fontFamily: 'inherit',
  fontSize: '0.9rem'
};

const selectStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  background: '#F8FAFC',
  border: '1px solid #CBD5E1',
  color: '#0F172A',
  fontFamily: 'inherit',
  fontSize: '0.9rem'
};
