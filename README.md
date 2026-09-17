# 🎓 AccountSkills Hub — 15-Day Practical Accounting & CRM Internship

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js&logoColor=white)
![CSS3](https://img.shields.io/badge/Style-Modern_White_%26_Blue-2563EB)
![License](https://img.shields.io/badge/License-MIT-green)

A high-converting, modern, and corporate web platform designed for the **AccountSkills Hub 15-Day Practical Accounting & CRM Internship Program**, targeted at B.Com students, BBA students, MBA Finance graduates, commerce freshers, and job seekers.

---

## 🌟 Key Features

### 1. 🎨 Corporate White & Blue Aesthetic
- Built with a clean, high-contrast **White  (`#FFFFFF`)  & Sky Blue (`#E0F2FE`)** visual hierarchy matching corporate financial platforms.
- Ambient 3D floating geometric backdrop powered by React Three Fiber & Three.js.

### 2. 🔁 Continuous Live News Marquee
- Interactive top ticker displaying live seat availability (`5 DEMO SEATS REMAINING`) and program fee (`₹399 ONLY`).
- Smooth `@keyframes marqueeScroll` animation with pause-on-hover functionality.

### 3. 📲 Interactive Enrollment & Buy Contact Modal
- Triggered by **"ENROL NOW ₹399"** or **"FREE DEMO CLASS"** buttons.
- Features high-resolution scannable QR codes:
  - 🟢 **WhatsApp Official Contact QR Code** (`Accountskill Hub`)
  - 🔴 **Instagram Official Profile QR Code** (`@ACCOUNTSKILLS_HUB`)
- Direct WhatsApp chat link generator with auto-filled user details.

### 4. 🖼️ Dedicated Module Visuals & 10+ Slide Lightbox Gallery
- Each of the 8 curriculum modules displays a dedicated  high-resolution visual topic cover:
  - **Module 1**: Laptop Financial Workflows & Business Dashboard
  - **Module 2**: Journal Entries & Ledger Management (*Assets, Liabilities & Equity*)
  - **Module 3**: Invoicing & Payment Handling (*Record, Organize, Reconcile, Grow*)
  - **Module 4**: Accounts Receivable & Payable (*Numbers Tell a Better Story*)
  - **Module 5**: Bank Reconciliation Basics BRS (*Chart of Accounts*)
  - **Module 6**: Excel for Practical Accounting (*VLOOKUP, Pivot Tables, Data Analysis*)
  - **Module 7**: CRM & Cloud Accounting Workflows (*Tally, Zoho Books, CRM Platforms*)
  - **Module 8**: Practical Accounting Capstone Project
- Full-screen 12-slide Lightbox Slider with left/right keyboard and button controls.

### 5. 📜 Official Certificate Specimen Showcase
- Displays the official verified **AccountSkills Hub Internship Certificate**.
- Interactive click-to-expand lightbox viewer for prospective students to inspect credential details.

### 6. 💻 Interactive Practical Software Sandbox
- **Journal Entry Simulator**: Real-time Debit/Credit balance verification.
- **GST Invoicing Simulator**: Auto-computes subtotals and 18% GST tax breakdowns.

### 7. 📈 Salary & Career ROI Calculator
- Interactive salary calculator demonstrating salary boost projections for B.Com, BBA, and MBA graduates.

---

## 🛠️ Tech Stack

- **Frontend Library:** React 18
- **Build Tool:** Vite 6
- **3D Graphics:** Three.js / React Three Fiber / Drei
- **Icons:** Lucide React
- **Styling:** Custom CSS3 Design System with CSS Variables
- **Fonts:** Outfit, Inter, Space Grotesk

---

## 📁 Project Structure

```text
account-skills-hub/
├── public/
├── src/
│   ├── assets/               # Certificate, Flyer, QR codes, & Module images
│   │   ├── account-skills-logo.jpg
│   │   ├── basic-accounting-bookkeeping.jpg
│   │   ├── certificate1demo.jpeg
│   │   ├── check-icon.png
│   │   ├── crm-module.jpg
│   │   ├── excel-module.jpg
│   │   ├── insta-qr.png
│   │   ├── whatsapp-qr.png
│   │   └── ... (module 1-6 images)
│   ├── components/
│   │   ├── CertificateShowcase.jsx   # Credential & Lightbox Viewer
│   │   ├── CurriculumTimeline.jsx   # 8-Module Grid & 10-Slide Gallery
│   │   ├── FAQSection.jsx           # Accordion FAQ
│   │   ├── FloatingWhatsApp.jsx     # Sticky Chat Widget
│   │   ├── Footer.jsx               # Footer with Helplines & Newsletter
│   │   ├── HeroSection.jsx          # Hero Banner & Audience Tags
│   │   ├── Navbar.jsx               # Header & Live Scrolling Marquee
│   │   ├── PracticeLab3D.jsx        # Journal & GST Invoice Simulators
│   │   ├── RegistrationModal.jsx    # QR Codes & Quick Enrollment Form
│   │   ├── SalaryCalculator.jsx     # Career ROI Calculator
│   │   ├── TestimonialsSection.jsx  # Student Feedback Cards
│   │   └── ThreeCanvasBG.jsx        # 3D Geometric Scene
│   ├── App.jsx                      # Main Layout Assembly
│   ├── index.css                    # Design System & Utility Classes
│   └── main.jsx                     # Entry Point
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Quick Start & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ranjeetkumarguptabro-maker/account-skills-hub.git
   cd account-skills-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` or `http://localhost:3001`.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 👤 Author & Support

**AccountSkills Hub**  
- **Instagram:** [@ACCOUNTSSKILLS_HUB](https://instagram.com/ACCOUNTSSKILLS_HUB)  
- **WhatsApp Helpline:** [+91 9310585743](https://wa.me/919310585743)  
- **GitHub Repository Owner:** [ranjeetkumarguptabro-maker](https://github.com/ranjeetkumarguptabro-maker)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
