'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * DataClaw Lightweight Analytics
 * Tracks: page_view, scroll_50, cta_click
 * Output: Client Console (No backend required)
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Track Page View
    console.log(`[Analytics] page_view: ${pathname}`);

    // 2. Track 50% Scroll Depth
    let scrollTracked = false;
    const handleScroll = () => {
      if (scrollTracked) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      
      if (scrollPercentage >= 0.5) {
        console.log(`[Analytics] scroll_50: ${pathname}`);
        scrollTracked = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 3. Track CTA Clicks (Event Delegation)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect clicks on DataClaw standard button/link classes
      const cta = target.closest('.primaryBtn, .secondaryBtn, .ghostBtn, .detailLink, .detailTakeaway');
      
      if (cta) {
        const label = cta.textContent?.trim() || 'unlabeled_cta';
        console.log(`[Analytics] cta_click: "${label}" on ${pathname}`);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}
