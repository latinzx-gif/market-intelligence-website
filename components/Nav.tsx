'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="/" aria-label="DataClaw Home">
        <span>DC</span>
        DataClaw
      </a>
      <div className="navLinks">
        <a href="/signals">Signals</a>
        <a href="/insights">Insights</a>
        <a href="/reports">Reports</a>
        <a href="/theme">Themes</a>
        <a href="/sources">Source Library</a>
        <a href="#search" className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}>Search</a>
      </div>
    </nav>
  );
}
