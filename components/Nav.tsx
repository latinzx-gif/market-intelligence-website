'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

export default function Nav() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="nav">
      <a className="brand" href="/" aria-label="DataClaw Home">
        <span>DC</span>
        DataClaw
      </a>
      <div className="navLinks">
        <a href="/insights">{t('nav.insights')}</a>
        <a href="/reports">{t('nav.reports')}</a>
        <a href="/services">{t('nav.services')}</a>
        <a href="/early-access">{t('nav.earlyAccess')}</a>
        
        <div style={{ marginLeft: '12px', display: 'flex', gap: '4px', borderLeft: '1px solid var(--line)', paddingLeft: '12px' }}>
          <button 
            onClick={() => setLang('en')}
            className={lang === 'en' ? 'statusPill' : 'ghostBtn'}
            style={{ minHeight: '32px', padding: '0 8px', fontSize: '11px', border: lang === 'en' ? '1px solid var(--blue)' : 'none' }}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('th')}
            className={lang === 'th' ? 'statusPill' : 'ghostBtn'}
            style={{ minHeight: '32px', padding: '0 8px', fontSize: '11px', border: lang === 'th' ? '1px solid var(--blue)' : 'none' }}
          >
            TH
          </button>
        </div>
      </div>
    </nav>
  );
}
