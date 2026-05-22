'use client';

import React from 'react';
import Nav from '../../components/Nav';
import { useLanguage } from '../../components/LanguageContext';

export default function InsightsContent() {
  const { lang, t } = useLanguage();

  const insights = [
    {
      title: lang === 'en' ? "The DHA Saturation" : "The DHA Saturation: เมื่อ DHA กลายเป็นมาตรฐานทั่วไป",
      category: lang === 'en' ? "Market Intelligence" : "ข้อมูลตลาด",
      summary: lang === 'en' 
        ? "Decoding Brain Development Claims in Thailand's Kids Milk. DHA has shifted from premium differentiator to category expectation. This research asset explores how repeated brain-development claims are reshaping positioning, ingredient stacks, and market differentiation in Thailand's kids milk category."
        : "เจาะลึกการอ้างสรรพคุณด้านพัฒนาการสมองในตลาดนมเด็กไทย เมื่อจุดขายระดับพรีเมียมกลายเป็นสิ่งที่ทุกแบรนด์ต้องมี บทวิเคราะห์นี้สำรวจผลต่อการวางตำแหน่งสินค้า ส่วนผสม และการแข่งขันในตลาดนมเด็กไทย",
      date: "2026-05-22",
      readTime: `6 ${t('insights.readTime')}`,
      href: "/insights/dha-saturation-thailand-kids-milk",
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
    {
      title: lang === 'en' ? "Why You Should Not Automate Too Early" : "ทำไมคุณไม่ควรทำระบบอัตโนมัติเร็วเกินไป",
      category: "Operations",
      summary: lang === 'en'
        ? "Automation works best after the workflow is repeated, understood, and worth maintaining."
        : "ระบบอัตโนมัติทำงานได้ดีที่สุดหลังจากเวิร์กโฟลว์นั้นถูกทำซ้ำ จนเข้าใจถ่องแท้ และคุ้มค่าที่จะบำรุงรักษา",
      date: "2026-05-21",
      readTime: `3 ${t('insights.readTime')}`,
    },
    {
      title: lang === 'en' ? "From Research to Sellable Digital Products" : "จากงานวิจัยสู่ผลิตภัณฑ์ดิจิทัลที่ขายได้",
      category: "Productization",
      summary: lang === 'en'
        ? "How structured research can become reports, templates, checklists, and service offers."
        : "วิธีเปลี่ยนงานวิจัยที่มีโครงสร้างให้กลายเป็นรายงาน, เทมเพลต, เช็คลิสต์ และข้อเสนอบริการ",
      date: "2026-05-21",
      readTime: `5 ${t('insights.readTime')}`,
    },
  ];

  return (
    <main>
      <Nav />
      <section className="section detailHero">
        <div>
          <span className="eyebrow">{t('insights.eyebrow')}</span>
          <h1>{t('insights.h1')}</h1>
          <p>{t('insights.p')}</p>
        </div>
      </section>

      <section className="section insightGrid pageGrid">
        {insights.map((item) => (
          <a key={item.title} href={item.href || "#"}>
            <article className="insightCard compactCard">
              <div className="insightMeta">
                <span>{item.category}</span>
                <span>{item.readTime}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.date}</small>
            </article>
          </a>
        ))}
      </section>
    </main>
  );
}
