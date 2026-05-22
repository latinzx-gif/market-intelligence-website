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
        
        {/* Language Toggle */}
        <div className="langToggle" style={{ 
          marginLeft: '8px', 
          display: 'flex', 
          gap: '2px', 
          background: 'var(--pale-blue)', 
          padding: '2px', 
          borderRadius: '999px',
          border: '1px solid var(--line)'
        }}>
          <button 
            onClick={() => setLang('en')}
            style={{ 
              minHeight: '28px', 
              padding: '0 10px', 
              fontSize: '10px', 
              fontWeight: '900',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              background: lang === 'en' ? 'var(--blue)' : 'transparent',
              color: lang === 'en' ? 'var(--white)' : 'var(--muted)',
              transition: 'all 0.2s ease'
            }}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('th')}
            style={{ 
              minHeight: '28px', 
              padding: '0 10px', 
              fontSize: '10px', 
              fontWeight: '900',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              background: lang === 'th' ? 'var(--blue)' : 'transparent',
              color: lang === 'th' ? 'var(--white)' : 'var(--muted)',
              transition: 'all 0.2s ease'
            }}
          >
            TH
          </button>
        </div>
      </div>
    </nav>
  );
}
