import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking ID - Replace with your actual GA4 measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll send page views manually
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Analytics component to track route changes
export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
