'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  en: {
    nav: {
      insights: "Insights",
      reports: "Reports",
      services: "Services",
      earlyAccess: "Early Access"
    },
    home: {
      eyebrow: "DataClaw",
      h1: "Turn Signals Into Decisions.",
      p: "Practical AI, market intelligence, and operating systems for solo founders and business operators.",
      explore: "Explore Insights",
      join: "Join Early Access",
      latestInsights: "Latest Insights",
      clearNotes: "Clear notes for practical operators.",
      reportsEyebrow: "Reports",
      reportsH2: "Product #001 is in early access.",
      reportsP: "A lean decision guide for choosing an AI stack under 3,000 THB/month.",
      viewReport: "View Report",
      servicesEyebrow: "Services",
      servicesH2: "Three ways to work with DataClaw.",
      earlyAccessEyebrow: "Early Access",
      earlyAccessH2: "Help shape DataClaw.",
      joinBtn: "Join Early Access"
    },
    insights: {
      eyebrow: "Insights",
      h1: "Practical notes for better operating decisions.",
      p: "Short DataClaw insights for solo founders, freelancers, AI operators, and small business teams in Thailand.",
      readTime: "min",
    },
    dha: {
      eyebrow: "Market Intelligence Case Study",
      h1: "The DHA Saturation",
      p: "Decoding Brain Development Claims in Thailand's Kids Milk. How a premium differentiator became the category baseline—and what comes next for cognitive positioning.",
      coreQuestionLabel: "Core Question",
      coreQuestion: "How has DHA become a mandatory \"table stakes\" ingredient, and how are brands differentiating now?",
      availableSoon: "Framework available soon",
      marketContext: "Market Context",
      whyThisMatters: "Why This Matters",
      whyThisMattersText: "DHA has moved from a premium 'gold' differentiator to a category-wide requirement for entry into the Thai kids milk market.",
      saturationLabel: "Saturation",
      saturationH3: "90%+ Penetration",
      saturationP: "Presence across premium UHT and powder segments.",
      strategyLabel: "Strategy",
      strategyH3: "Multi-Nutrient Stacks",
      strategyP: "Shift from solo DHA to complex cognitive stacks.",
      brandAnalysis: "Brand Analysis",
      stackWarH2: "The Ingredient Stack War",
      stackWarText: "Top brands are layering proprietary complexes over the DHA baseline to preserve premium status.",
      timelineLabel: "Timeline",
      timelineH2: "The Journey to Saturation",
      signalsLabel: "Intelligence Signals",
      signalsH2: "What Comes Next?",
      signalCurrent: "Current",
      signalCurrentText: "100mg+ DHA per serving is the new baseline for student-tier milk.",
      signalEmerging: "Emerging",
      signalEmergingText: "MFGM (Milk Fat Globule Membrane) becoming the gold standard differentiator.",
      signalWeak: "Weak",
      signalWeakText: "\"Focus\" and \"Calm\" benefits emerging vs. pure \"Smart/IQ\" claims.",
      deepDive: "Deep Dive",
      researchQuestionsH2: "Open Research Questions",
      q1: "Is \"Brain Development\" still a primary conversion driver for Gen Alpha parents?",
      q2: "Which secondary nutrients effectively support the DHA story on shelf?",
      q3: "How are discount brands leveraging \"DHA\" to compete with premium tiers?",
      furtherReading: "Further Reading",
      exploreIngredientH2: "Explore Ingredient Intelligence",
      exploreIngredientP: "Deep dive into the DataClaw Ingredient Intelligence MOC.",
      viewMoc: "View MOC",
      feedbackH3: "Was this research useful?",
      useful: "Useful",
      needsImprovement: "Needs improvement",
      suggestNext: "Suggest next topic",
      suggestPlaceholder: "e.g. Immunity claims in snacks"
    },
    footer: {
      tagline: "Practical Market Intelligence"
    }
  },
  th: {
    nav: {
      insights: "ข้อมูลเชิงลึก",
      reports: "รายงาน",
      services: "บริการ",
      earlyAccess: "สิทธิ์เข้าถึงก่อนใคร"
    },
    home: {
      eyebrow: "DataClaw",
      h1: "เปลี่ยนสัญญาณตลาดเป็นคำตอบทางธุรกิจ",
      p: "AI ที่ใช้งานได้จริง, การวิเคราะห์ข้อมูลตลาด และระบบปฏิบัติการสำหรับเจ้าของธุรกิจคนเดียวและผู้ประกอบการ",
      explore: "สำรวจข้อมูลเชิงลึก",
      join: "เข้าสิทธิ์ก่อนใคร",
      latestInsights: "ข้อมูลเชิงลึกใหม่ล่าสุด",
      clearNotes: "บันทึกที่ชัดเจนเพื่อการตัดสินใจจริง",
      reportsEyebrow: "รายงาน",
      reportsH2: "Product #001 เปิดให้เข้าถึงก่อนใคร",
      reportsP: "คู่มือการเลือกใช้ AI Stack ในงบไม่เกิน 3,000 บาท/เดือน",
      viewReport: "ดูรายงาน",
      servicesEyebrow: "บริการ",
      servicesH2: "สามรูปแบบการทำงานกับ DataClaw",
      earlyAccessEyebrow: "Early Access",
      earlyAccessH2: "ร่วมสร้าง DataClaw ไปกับเรา",
      joinBtn: "รับสิทธิ์ก่อนใคร"
    },
    insights: {
      eyebrow: "Insights",
      h1: "บันทึกที่ใช้งานได้จริง เพื่อการตัดสินใจที่ดีขึ้น",
      p: "ข้อมูลเชิงลึกฉบับย่อสำหรับเจ้าของธุรกิจ, ฟรีแลนซ์ และทีมขนาดเล็กในไทย",
      readTime: "นาที",
    },
    dha: {
      eyebrow: "Market Intelligence Case Study",
      h1: "The DHA Saturation: เมื่อ DHA กลายเป็นมาตรฐานทั่วไป",
      p: "เจาะลึกการอ้างสรรพคุณด้านพัฒนาการสมองในตลาดนมเด็กไทย เมื่อจุดขายระดับพรีเมียมกลายเป็นสิ่งที่ทุกแบรนด์ต้องมี และก้าวต่อไปของการสร้างจุดต่างคืออะไร",
      coreQuestionLabel: "คำถามสำคัญ",
      coreQuestion: "DHA กลายเป็นส่วนผสม 'พื้นฐาน' ได้อย่างไร และแบรนด์ต่างๆ สร้างความแตกต่างอย่างไรในปัจจุบัน?",
      availableSoon: "อยู่ระหว่างเตรียมไฟล์คู่มือ",
      marketContext: "บริบทตลาด",
      whyThisMatters: "ทำไมเรื่องนี้ถึงสำคัญ",
      whyThisMattersText: "DHA เคยเป็นจุดขายระดับพรีเมียม แต่การถูกใช้ซ้ำในหลายแบรนด์ทำให้ DHA กลายเป็นสิ่งที่ผู้บริโภคคาดหวังมากกว่าจุดต่าง บทวิเคราะห์นี้สำรวจผลต่อการวางตำแหน่งสินค้า ส่วนผสม และการแข่งขันในตลาดนมเด็กไทย",
      saturationLabel: "การเข้าถึงตลาด",
      saturationH3: "ครอบคลุมกว่า 90%",
      saturationP: "พบในกลุ่มนม UHT และนมผงระดับพรีเมียมเกือบทั้งหมด",
      strategyLabel: "กลยุทธ์",
      strategyH3: "การรวมกลุ่มสารอาหาร (Stacks)",
      strategyP: "เปลี่ยนจากการชู DHA เดี่ยวๆ เป็นการรวมกลุ่มสารอาหารเพื่อสมองที่ซับซ้อนขึ้น",
      brandAnalysis: "วิเคราะห์แบรนด์",
      stackWarH2: "สงครามส่วนผสม (Ingredient Stack War)",
      stackWarText: "แบรนด์ชั้นนำเริ่มเพิ่มสารอาหารลิขสิทธิ์เฉพาะทับซ้อนบนฐานของ DHA เพื่อรักษาภาพลักษณ์พรีเมียม",
      timelineLabel: "Timeline",
      timelineH2: "เส้นทางสู่จุดอิ่มตัวของ DHA",
      signalsLabel: "สัญญาณตลาด",
      signalsH2: "ก้าวต่อไปคืออะไร?",
      signalCurrent: "ปัจจุบัน",
      signalCurrentText: "DHA 100มก.+ ต่อกล่อง กลายเป็นมาตรฐานใหม่สำหรับนมเกรดนักเรียน",
      signalEmerging: "กำลังมา",
      signalEmergingText: "MFGM กลายเป็นมาตรฐานทองคำตัวใหม่ที่ใช้สร้างจุดต่าง",
      signalWeak: "สัญญาณอ่อนๆ",
      signalWeakText: "ประโยชน์เรื่อง \"สมาธิ (Focus)\" และ \"ความสงบ (Calm)\" เริ่มปรากฏแทนที่เรื่อง \"ฉลาด/IQ\" เพียงอย่างเดียว",
      deepDive: "เจาะลึก",
      researchQuestionsH2: "คำถามที่ยังต้องค้นหาคำตอบ",
      q1: "การพัฒนาสมองยังคงเป็นเหตุผลหลักในการตัดสินใจซื้อของพ่อแม่ Gen Alpha หรือไม่?",
      q2: "สารอาหารรองตัวไหน (โคลีน, ลูทีน, เหล็ก) ที่ช่วยส่งเสริมเรื่องราวของ DHA ได้ดีที่สุดบนชั้นวาง?",
      q3: "แบรนด์ราคาประหยัดใช้ DHA เข้ามาแข่งกับกลุ่มพรีเมียมอย่างไร?",
      furtherReading: "อ่านเพิ่มเติม",
      exploreIngredientH2: "สำรวจข้อมูลวัตถุดิบ",
      exploreIngredientP: "เจาะลึกฐานข้อมูล Ingredient Intelligence ของ DataClaw",
      viewMoc: "ดู MOC",
      feedbackH3: "งานวิจัยนี้มีประโยชน์กับคุณไหม?",
      useful: "มีประโยชน์",
      needsImprovement: "ควรปรับปรุง",
      suggestNext: "แนะนำหัวข้อถัดไป",
      suggestPlaceholder: "เช่น การอ้างสรรพคุณเรื่องภูมิคุ้มกันในขนมเด็ก"
    },
    footer: {
      tagline: "ข้อมูลอัจฉริยะด้านการตลาดที่ใช้งานได้จริง"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('dc_lang') as Language;
    if (saved && (saved === 'en' || saved === 'th')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('dc_lang', newLang);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[lang];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
