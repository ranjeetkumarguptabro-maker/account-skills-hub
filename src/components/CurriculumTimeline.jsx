import React, { useState } from 'react';
import { BookOpen, FileText, Receipt, CreditCard, Landmark, FileSpreadsheet, Layers, CheckSquare, ChevronRight, Award, Sparkles, ZoomIn, X, ChevronLeft, Image as ImageIcon } from 'lucide-react';
import basicAccImg from '../assets/basic-accounting-bookkeeping.jpg';
import demoClass1 from '../assets/demo-class-1.png';
import demoClass2 from '../assets/demo-class-2.png';
import demoClass3 from '../assets/demo-class-3.png';
import demoClass4 from '../assets/demo-class-4.png';
import demoClass5 from '../assets/demo-class-5.png';

import module2Img from '../assets/module-2.png';
import module3Img from '../assets/module-3.png';
import module4Img from '../assets/module-4.png';
import module5Img from '../assets/module-5.png';
import excelImg from '../assets/excel-module.jpg';
import crmImg from '../assets/crm-module.jpg';

const curriculumModules = [
  {
    id: 1,
    title: "Basic Accounting & Bookkeeping",
    duration: "Day 1 - 2",
    icon: BookOpen,
    color: "#00D2FF",
    image: basicAccImg,
    subImages: [demoClass1, demoClass2, demoClass3, demoClass4, demoClass5],
    desc: "Foundation principles of accounting, chart of accounts, assets vs liabilities, and real-world business bookkeeping framework.",
    topics: [
      "Accounting Equation & Golden Rules",
      "Classification of Accounts (Personal, Real, Nominal)",
      "Setting up Chart of Accounts for Small & Medium Enterprises",
      "Understanding Cash vs Accrual Accounting"
    ]
  },
  {
    id: 2,
    title: "Journal Entries & Ledger Management",
    duration: "Day 3 - 4",
    icon: FileText,
    color: "#FFB703",
    image: module2Img,
    desc: "Mastering debit and credit posting for everyday business transactions, sub-ledgers, and trial balance creation.",
    topics: [
      "Recording Journal Entries for Sales, Purchases & Expenses",
      "General Ledger Posting & Balancing",
      "Trial Balance Preparation & Error Rectification",
      "Adjusting Entries for Prepayments & Accruals"
    ]
  },
  {
    id: 3,
    title: "Invoicing & Payment Handling",
    duration: "Day 5 - 6",
    icon: Receipt,
    color: "#10B981",
    image: module3Img,
    desc: "Drafting professional GST invoices, debit/credit notes, receipt vouchers, and payment gateway workflows.",
    topics: [
      "Components of Standard Business Invoices",
      "Generating Sales & Purchase Tax Invoices",
      "Payment Voucher Processing & Vendor Receipts",
      "Handling Discounts, Tax Deductions (TDS) & Returns"
    ]
  },
  {
    id: 4,
    title: "Accounts Receivable & Accounts Payable",
    duration: "Day 7 - 8",
    icon: CreditCard,
    color: "#FF0055",
    image: module4Img,
    desc: "Managing customer credit terms, vendor bill payment schedules, aging analysis, and working capital optimization.",
    topics: [
      "Customer Invoice Tracking & Aging Analysis (AR)",
      "Vendor Invoice Processing & Credit Management (AP)",
      "Follow-up Statements & Outstanding Dues Reminders",
      "Managing Cash Flow & Credit Periods"
    ]
  },
  {
    id: 5,
    title: "Bank Reconciliation Basics (BRS)",
    duration: "Day 9 - 10",
    icon: Landmark,
    color: "#9D4EDD",
    image: module5Img,
    desc: "Matching bank statement entries against internal cash books, identifying timing differences, and resolving mismatches.",
    topics: [
      "Understanding Bank Statement Formats & Passbooks",
      "Identifying Uncleared Cheques & Direct Deposits",
      "Preparing Monthly Bank Reconciliation Statements",
      "Bank Charge & Interest Adjustments"
    ]
  },
  {
    id: 6,
    title: "Excel for Practical Accounting",
    duration: "Day 11 - 12",
    icon: FileSpreadsheet,
    color: "#25D366",
    image: excelImg,
    desc: "Supercharging efficiency using lookup formulas, pivot tables, cash flow templates, and automated financial modeling.",
    topics: [
      "VLOOKUP, XLOOKUP & INDEX/MATCH for Financial Datasets",
      "Pivot Tables & Dynamic Financial Summaries",
      "IF / SUMIFS / COUNTIFS for Accounting Reports",
      "Designing Automated Cash Flow & Ledger Sheets"
    ]
  },
  {
    id: 7,
    title: "CRM & Accounting Software Workflows",
    duration: "Day 13 - 14",
    icon: Layers,
    color: "#3A86EF",
    image: crmImg,
    desc: "Navigating modern cloud accounting & CRM tools (Tally / Zoho / CRM platforms) for seamless business operations.",
    topics: [
      "Introduction to Cloud Accounting & CRM Integration",
      "Customer Relationship Management (CRM) for Billing",
      "Automating Recurring Invoices & Payment Reminders",
      "Creating Executive Financial Dashboards & KPI Reports"
    ]
  },
  {
    id: 8,
    title: "Practical Accounting Capstone Tasks",
    duration: "Day 15",
    icon: CheckSquare,
    color: "#F72585",
    image: crmImg,
    desc: "End-to-end practical project simulating a full month of accounting for a real business entity.",
    topics: [
      "Full 1-Month Practical Accounting Case Study",
      "Final Trial Balance & Financial Review",
      "Live Assessment & Mentor Review",
      "Internship Completion Certificate Presentation"
    ]
  }
];

const allGalleryImages = [
  { src: basicAccImg, title: "Module 1: Basic Accounting & Bookkeeping Main Poster" },
  { src: demoClass1, title: "First Class Slide 1: Laptop Financial Workflows & Business Dashboard" },
  { src: demoClass2, title: "First Class Slide 2: The Accounting Equation (ASSETS = LIABILITIES + EQUITY)" },
  { src: demoClass3, title: "First Class Slide 3: Core Bookkeeping Cycle (Record • Organize • Reconcile • Grow)" },
  { src: demoClass4, title: "First Class Slide 4: Financial Storytelling (Numbers Tell a Better Story)" },
  { src: demoClass5, title: "First Class Slide 5: Structure of Chart of Accounts Clipboard" },
  { src: module2Img, title: "Module 2: Journal Entries & Ledger Management (Balance Builds Business Scale)" },
  { src: module3Img, title: "Module 3: Invoicing & Payment Handling (GST Invoice & Payment Processing)" },
  { src: module4Img, title: "Module 4: Accounts Receivable & Payable (Sales, Expenses, Bank, Payroll Binders)" },
  { src: module5Img, title: "Module 5: Bank Reconciliation & Reports (BRS Financial Analysis)" },
  { src: excelImg, title: "Module 6: Excel for Practical Accounting (VLOOKUP • Pivot Tables • Data Turns into Decisions)" },
  { src: crmImg, title: "Module 7 & 8: CRM & Cloud Accounting Workflows (Tally • Zoho Books • CRM Platforms)" },
];

export default function CurriculumTimeline({ onOpenModal }) {
  const [filter, setFilter] = useState('all');
  const [galleryIndex, setGalleryIndex] = useState(null);

  const filteredModules = curriculumModules.filter(m => {
    if (filter === 'bookkeeping') return m.id <= 2;
    if (filter === 'invoicing') return m.id === 3 || m.id === 4;
    if (filter === 'brs') return m.id === 5;
    if (filter === 'excel') return m.id === 6;
    if (filter === 'crm') return m.id >= 7;
    return true;
  });

  const openImageInGallery = (imgSrc) => {
    const idx = allGalleryImages.findIndex(g => g.src === imgSrc);
    setGalleryIndex(idx !== -1 ? idx : 0);
  };

  return (
    <section id="curriculum" style={{ position: 'relative', padding: '80px 0', background: '#F8FAFC' }}>
      <div className="section-container">
        
        {/* Section Header matching Reference */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '12px' }}>
            Browse Our 15-Day <span className="gradient-text">Practical Modules</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '16px' }}>
            Comprehensive industry-aligned practical curriculum with 10+ real corporate accounting visual slides!
          </p>

          {/* Quick Gallery Trigger Button */}
          <button
            onClick={() => setGalleryIndex(0)}
            style={{
              background: '#FFFFFF',
              border: '2px solid #2563EB',
              color: '#2563EB',
              fontWeight: 800,
              fontSize: '0.85rem',
              padding: '8px 20px',
              borderRadius: '9999px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.12)',
              transition: 'all 0.2s ease'
            }}
          >
            <ImageIcon size={16} /> 🖼️ Click to Preview All 10 Course Visual Slides
          </button>
        </div>

        {/* Filter Bar Pills matching Reference Image */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <button className={`btn-pill-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All Modules (15 Days)
          </button>
          <button className={`btn-pill-filter ${filter === 'bookkeeping' ? 'active' : ''}`} onClick={() => setFilter('bookkeeping')}>
            Bookkeeping & Ledgers
          </button>
          <button className={`btn-pill-filter ${filter === 'invoicing' ? 'active' : ''}`} onClick={() => setFilter('invoicing')}>
            Invoicing & AR/AP
          </button>
          <button className={`btn-pill-filter ${filter === 'brs' ? 'active' : ''}`} onClick={() => setFilter('brs')}>
            BRS Bank Recon
          </button>
          <button className={`btn-pill-filter ${filter === 'excel' ? 'active' : ''}`} onClick={() => setFilter('excel')}>
            Excel Automation
          </button>
          <button className={`btn-pill-filter ${filter === 'crm' ? 'active' : ''}`} onClick={() => setFilter('crm')}>
            CRM Software & Capstone
          </button>
        </div>

        {/* 4-Column Course Cards Grid matching Reference Image */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {filteredModules.map((mod) => {
            const IconComp = mod.icon;
            return (
              <div key={mod.id} className="ref-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Card Top Banner with Image Poster or Icon */}
                  {mod.image ? (
                    <div 
                      style={{
                        height: '190px',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        background: '#0F172A'
                      }}
                      onClick={() => openImageInGallery(mod.image)}
                    >
                      <img 
                        src={mod.image} 
                        alt={mod.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '12px',
                        zIndex: 2
                      }}>
                        MODULE {mod.id} • {mod.duration}
                      </span>
                      <span style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'rgba(37, 99, 235, 0.95)',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        zIndex: 2,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                      }}>
                        <ZoomIn size={12} /> Expand Visual
                      </span>
                    </div>
                  ) : (
                    <div style={{
                      background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                      height: '140px',
                      padding: '16px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(8px)',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '12px'
                      }}>
                        MODULE {mod.id} • {mod.duration}
                      </span>

                      <IconComp size={48} color="#FFFFFF" opacity={0.9} />
                    </div>
                  )}

                  {/* Card Body Content */}
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
                      {mod.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>
                      {mod.desc}
                    </p>

                    {/* First Class Sub-Lesson Slide Thumbnails for Module 1 */}
                    {mod.subImages && mod.subImages.length > 0 && (
                      <div style={{ background: '#F1F5F9', padding: '10px', borderRadius: '12px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1E40AF', marginBottom: '8px' }}>
                          📸 FIRST CLASS 5 PRACTICAL SLIDES:
                        </div>
                        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                          {mod.subImages.map((subImg, sIdx) => (
                            <img
                              key={sIdx}
                              src={subImg}
                              alt={`First Class Slide ${sIdx + 1}`}
                              onClick={() => openImageInGallery(subImg)}
                              style={{
                                width: '48px',
                                height: '48px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '1.5px solid #93C5FD',
                                cursor: 'pointer',
                                flexShrink: 0
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Topics Bullet Points */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {mod.topics.slice(0, 2).map((t, i) => (
                        <div key={i} style={{ fontSize: '0.8rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <span style={{ color: '#2563EB', fontWeight: 'bold' }}>✓</span> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price & Action */}
                <div style={{
                  padding: '16px 20px',
                  background: '#F8FAFC',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: '#94A3B8', marginRight: '6px' }}>
                      ₹1,999
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: 900, color: '#2563EB' }}>
                      INCLUDED
                    </span>
                  </div>

                  <button 
                    className="btn-primary" 
                    onClick={() => onOpenModal(mod.id === 1 ? 'demo' : 'enroll')}
                    style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                  >
                    <Sparkles size={12} /> {mod.id === 1 ? 'FREE DEMO' : 'ENROL NOW'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Curriculum */}
        <div style={{
          background: 'linear-gradient(90deg, #1E3A8A 0%, #2563EB 50%, #0284C7 100%)',
          borderRadius: '20px',
          padding: '24px 32px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '4px' }}>
              Want to see how Day 1 & Day 2 modules are taught live?
            </div>
            <div style={{ fontSize: '0.9rem', color: '#BFDBFE' }}>
              Attend the 1st Class ABSOLUTELY FREE DEMO before deciding to join!
            </div>
          </div>
          <button className="btn-gold" onClick={() => onOpenModal('demo')} style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
            <Sparkles size={18} /> BOOK FREE DEMO CLASS FIRST
          </button>
        </div>

      </div>

      {/* 10-Image Course Visuals Lightbox Gallery Slider */}
      {galleryIndex !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setGalleryIndex(null)}>
          <div style={{ position: 'relative', maxWidth: '640px', width: '100%', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={() => setGalleryIndex(null)}
              style={{
                position: 'absolute',
                top: '-18px',
                right: '-18px',
                background: '#FFFFFF',
                color: '#0F172A',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            {/* Main Image Frame */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', background: '#0F172A', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}>
              <img 
                src={allGalleryImages[galleryIndex].src} 
                alt={allGalleryImages[galleryIndex].title} 
                style={{ width: '100%', maxHeight: '72vh', objectFit: 'contain', display: 'block' }} 
              />
              
              {/* Previous / Next Arrow Controls */}
              <button
                onClick={() => setGalleryIndex((galleryIndex - 1 + allGalleryImages.length) % allGalleryImages.length)}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.75)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setGalleryIndex((galleryIndex + 1) % allGalleryImages.length)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.75)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Title & Counter Badge */}
            <div style={{ marginTop: '16px', color: '#FFFFFF' }}>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '4px' }}>
                {allGalleryImages[galleryIndex].title}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
                Slide {galleryIndex + 1} of {allGalleryImages.length} • Click left/right arrows to browse
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
