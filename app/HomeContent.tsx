'use client';

import React from 'react';
import Nav from '../components/Nav';
import { useLanguage } from '../components/LanguageContext';

const services = [
  {
    key: "system",
    title: "AI Automation System",
    problem: "Manual work is scattered across spreadsheets, messages, files, and repeated follow-ups.",
    deliverables: "Workflow map, SOP, prototype flow, tool recommendation, and handover guide.",
    price: "Starting at 8,000 THB",
  },
  {
    key: "research",
    title: "Market Intelligence Research",
    problem: "Market information is scattered and hard to turn into a clear business decision.",
    deliverables: "Competitor scan, claim analysis, pricing review, positioning map, and recommendation summary.",
    price: "Starting at 10,000 THB",
  },
  {
    key: "content",
    title: "AI Content Operations",
    problem: "Content ideas, drafts, reviews, and publishing routines are inconsistent.",
    deliverables: "Prompt system, content workflow, editorial SOP, calendar template, and QA checklist.",
    price: "Starting at 7,000 THB",
  },
];

const serviceTranslations = {
  en: {
    system: {
      title: "AI Automation System",
      problem: "Manual work is scattered across spreadsheets, messages, files, and repeated follow-ups.",
      deliverables: "Workflow map, SOP, prototype flow, tool recommendation, and handover guide.",
      price: "Starting at 8,000 THB",
    },
    research: {
      title: "Market Intelligence Research",
      problem: "Market information is scattered and hard to turn into a clear business decision.",
      deliverables: "Competitor scan, claim analysis, pricing review, positioning map, and recommendation summary.",
      price: "Starting at 10,000 THB",
    },
    content: {
      title: "AI Content Operations",
      problem: "Content ideas, drafts, reviews, and publishing routines are inconsistent.",
      deliverables: "Prompt system, content workflow, editorial SOP, calendar template, and QA checklist.",
      price: "Starting at 7,000 THB",
    }
  },
  th: {
    system: {
      title: "ระบบ AI อัตโนมัติ",
      problem: "งานแมนนวลกระจัดกระจายอยู่ในตารางงาน, ข้อความ, ไฟล์ และการติดตามผลที่ซ้ำซาก",
      deliverables: "แผนผังเวิร์กโฟลว์, SOP, โปรโตไทป์, การแนะนำเครื่องมือ และคู่มือการส่งมอบงาน",
      price: "เริ่มต้น 8,000 บาท",
    },
    research: {
      title: "วิจัยข้อมูลอัจฉริยะด้านการตลาด",
      problem: "ข้อมูลการตลาดกระจัดกระจายและยากที่จะเปลี่ยนเป็นการตัดสินใจทางธุรกิจที่ชัดเจน",
      deliverables: "การสแกนคู่แข่ง, การวิเคราะห์การอ้างสรรพคุณ, การตรวจสอบราคา, แผนผังการวางตำแหน่ง และสรุปคำแนะนำ",
      price: "เริ่มต้น 10,000 บาท",
    },
    content: {
      title: "การจัดการคอนเทนต์ด้วย AI",
      problem: "ไอเดียคอนเทนต์, ร่างบทความ, การตรวจสอบ และกิจวัตรการเผยแพร่ไม่มีความสม่ำเสมอ",
      deliverables: "ระบบ Prompt, เวิร์กโฟลว์คอนเทนต์, SOP กองบรรณาธิการ, เทมเพลตปฏิทิน และเช็คลิสต์ QA",
      price: "เริ่มต้น 7,000 บาท",
    }
  }
};

function ServiceCard({ item, lang }: { item: typeof services[0], lang: 'en' | 'th' }) {
  const t = serviceTranslations[lang][item.key as keyof typeof serviceTranslations['en']];
  return (
    <article className="serviceCard">
      <h3>{t.title}</h3>
      <p>{t.problem}</p>
      <strong>Deliverables</strong>
      <p>{t.deliverables}</p>
      <strong>{t.price}</strong>
    </article>
  );
}

export default function HomeContent() {
  const { lang, t } = useLanguage();
  
  const insights = [
    {
      title: lang === 'en' ? "The DHA Saturation" : "The DHA Saturation: เมื่อ DHA กลายเป็นมาตรฐานทั่วไป",
      category: lang === 'en' ? "Market Intelligence" : "ข้อมูลตลาด",
      summary: lang === 'en' 
        ? "Decoding Brain Development Claims in Thailand's Kids Milk. DHA has shifted from premium differentiator to category expectation."
        : "เจาะลึกการอ้างสรรพคุณด้านพัฒนาการสมองในตลาดนมเด็กไทย เมื่อจุดขายระดับพรีเมียมกลายเป็นสิ่งที่ทุกแบรนด์ต้องมี",
      date: "2026-05-22",
      readTime: `6 ${t('insights.readTime')}`,
    },
    {
      title: lang === 'en' ? "AI Stack for Solo Founders" : "AI Stack สำหรับเจ้าของธุรกิจคนเดียว",
      category: "AI Systems",
      summary: lang === 'en'
        ? "A practical view of which tools to start with, which to delay, and how to keep monthly costs controlled."
        : "มุมมองที่ใช้งานได้จริงว่าควรเริ่มด้วยเครื่องมือใด เครื่องมือใดควรรอ และวิธีควบคุมค่าใช้จ่ายรายเดือน",
      date: "2026-05-21",
      readTime: `4 ${t('insights.readTime')}`,
    },
  ];

  return (
    <main>
      <Nav />

      <section className="hero section">
        <div className="heroCopy">
          <div className="eyebrow">{t('home.eyebrow')}</div>
          <h1>{t('home.h1')}</h1>
          <p>{t('home.p')}</p>
          <div className="ctaRow">
            <a href="/insights" className="primaryBtn">
              {t('home.explore')}
            </a>
            <a href="/early-access" className="secondaryBtn">
              {t('home.join')}
            </a>
          </div>
        </div>
        <div className="heroPanel">
          <div className="panelHeader">
            <span>Research</span>
            <span>Intelligence</span>
            <span>Systems</span>
          </div>
          <div className="intelligenceMap">
            <span>Signals</span>
            <span>Research</span>
            <span>Decision Support</span>
            <span>Operating Systems</span>
          </div>
        </div>
      </section>

      <section className="section insightsSection">
        <div className="sectionHeader">
          <span>{t('home.latestInsights')}</span>
          <h2>{t('home.clearNotes')}</h2>
        </div>
        <div className="insightGrid">
          {insights.map((item) => (
            <article className="insightCard compactCard" key={item.title}>
              <div className="insightMeta">
                <span>{item.category}</span>
                <span>{item.readTime}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.date}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="sectionHeader">
          <span>{t('home.reportsEyebrow')}</span>
          <h2>{t('home.reportsH2')}</h2>
          <p>{t('home.reportsP')}</p>
        </div>
        <article className="portfolioCard">
          <div className="portfolioVisual">
            <span>01</span>
          </div>
          <div>
            <div className="tags">
              <span>Early Access</span>
              <span>790 THB</span>
            </div>
            <h3>DataClaw Starter Kit</h3>
            <p>AI Stack for Solo Founder Thailand.</p>
            <a href="/reports" className="detailLink">
              {t('home.viewReport')}
            </a>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span>{t('home.servicesEyebrow')}</span>
          <h2>{t('home.servicesH2')}</h2>
        </div>
        <div className="insightGrid">
          {services.map((item) => (
            <ServiceCard key={item.title} item={item} lang={lang} />
          ))}
        </div>
      </section>

      <section className="section detailCta">
        <div>
          <span className="eyebrow">{t('home.earlyAccessEyebrow')}</span>
          <h2>{t('home.earlyAccessH2')}</h2>
        </div>
        <a className="primaryBtn" href="/early-access">
          {t('home.joinBtn')}
        </a>
      </section>
    </main>
  );
}
