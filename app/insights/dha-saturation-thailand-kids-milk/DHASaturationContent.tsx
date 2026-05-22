'use client';

import React from 'react';
import Image from "next/image";
import Nav from '../../../components/Nav';
import { useLanguage } from '../../../components/LanguageContext';

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="sectionHeader">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function EvidenceCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <article className="evidenceCard">
      <div className="evidenceVisual">
         <Image src={image} alt={title} width={300} height={132} />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
}

export default function DHASaturationContent() {
  const { t } = useLanguage();

  return (
    <main>
      <Nav />

      {/* Hero Section */}
      <section className="section detailHero">
        <div>
          <span className="eyebrow">{t('dha.eyebrow')}</span>
          <h1>{t('dha.h1')}</h1>
          <p>{t('dha.p')}</p>
          <div className="ctaRow">
            <span className="statusPill" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
              {t('dha.availableSoon')}
            </span>
          </div>
        </div>
        <div className="detailTakeaway">
          <span>{t('dha.coreQuestionLabel')}</span>
          <strong>{t('dha.coreQuestion')}</strong>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section">
        <div className="insightVisual">
           <Image 
            src="/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg" 
            alt="DHA Saturation Hero" 
            className="insightVisualImage"
            fill
            priority
           />
        </div>
      </section>

      {/* Section 1: Why This Matters */}
      <section className="section splitSection">
        <SectionHeader 
          eyebrow={t('dha.marketContext')} 
          title={t('dha.whyThisMatters')} 
          text={t('dha.whyThisMattersText')}
        />
        <div className="metricStrip">
           <article>
              <span>{t('dha.saturationLabel')}</span>
              <h3>{t('dha.saturationH3')}</h3>
              <p>{t('dha.saturationP')}</p>
           </article>
           <article>
              <span>{t('dha.strategyLabel')}</span>
              <h3>{t('dha.strategyH3')}</h3>
              <p>{t('dha.strategyP')}</p>
           </article>
        </div>
      </section>

      <section className="section">
         <Image src="/images/insights/dha-saturation-thailand-kids-milk/shelf-change-segments.svg" alt="Shelf segment growth" width={1180} height={500} />
      </section>

      {/* Section 2: Evidence */}
      <section className="section evidenceSection">
        <SectionHeader 
          eyebrow={t('dha.brandAnalysis')} 
          title={t('dha.stackWarH2')} 
          text={t('dha.stackWarText')}
        />
        <div className="evidenceGrid">
          <EvidenceCard title="Enfagrow A+ MindPro" subtitle="MFGM + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="Hi-Q 1 Plus Super Gold" subtitle="Prebio ProteQ + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="S-26 Gold Pro" subtitle="Alpha-Sphingomyelin + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="Bear Brand Omega" subtitle="Omega 3-6-9 + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="Ovaltine Smart" subtitle="DHA + Vitamin B12" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
        </div>
      </section>

      {/* Section 3: Market Evolution */}
      <section className="section">
        <SectionHeader eyebrow={t('dha.timelineLabel')} title={t('dha.timelineH2')} />
        <Image src="/images/insights/dha-saturation-thailand-kids-milk/positioning-evolution.svg" alt="Positioning Evolution" width={1180} height={500} />
      </section>

      {/* Section 4: Signals */}
      <section className="section">
        <SectionHeader eyebrow={t('dha.signalsLabel')} title={t('dha.signalsH2')} />
        <div className="detailGrid">
          <div className="detailCard">
            <span>{t('dha.signalCurrent')}</span>
            <p>{t('dha.signalCurrentText')}</p>
          </div>
          <div className="detailCard">
            <span>{t('dha.signalEmerging')}</span>
            <p>{t('dha.signalEmergingText')}</p>
          </div>
          <div className="detailCard">
            <span>{t('dha.signalWeak')}</span>
            <p>{t('dha.signalWeakText')}</p>
          </div>
        </div>
      </section>

      {/* Section 5: Research Questions */}
      <section className="section narrativeSection">
        <div className="narrativeCard">
           <SectionHeader eyebrow={t('dha.deepDive')} title={t('dha.researchQuestionsH2')} />
           <ul className="cleanList">
             <li>{t('dha.q1')}</li>
             <li>{t('dha.q2')}</li>
             <li>{t('dha.q3')}</li>
           </ul>
        </div>
      </section>

       {/* Section 6: Related Research */}
       <section className="section detailCta">
        <div>
          <span className="eyebrow">{t('dha.furtherReading')}</span>
          <h2>{t('dha.exploreIngredientH2')}</h2>
          <p>{t('dha.exploreIngredientP')}</p>
        </div>
        <a className="primaryBtn" href="/ingredients">
          {t('dha.viewMoc')}
        </a>
      </section>

      {/* Feedback Analytics Section */}
      <section className="section">
        <div className="formCard">
          <h3>{t('dha.feedbackH3')}</h3>
          <div className="ctaRow">
            <button className="secondaryBtn">{t('dha.useful')}</button>
            <button className="ghostBtn">{t('dha.needsImprovement')}</button>
          </div>
          <div className="formField" style={{ marginTop: '16px' }}>
            <label>{t('dha.suggestNext')}</label>
            <input type="text" placeholder={t('dha.suggestPlaceholder')} />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>DataClaw AI</strong>
          <span>© 2026 {t('footer.tagline')}</span>
        </div>
        <div className="footerLinks">
          <a href="/insights">{t('nav.insights')}</a>
          <a href="/reports">{t('nav.reports')}</a>
          <a href="/services">{t('nav.services')}</a>
        </div>
      </footer>
    </main>
  );
}
