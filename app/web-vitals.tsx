'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metric);
    }

    // You can send to analytics service here
    // Example: analytics.track('web-vitals', metric);

    // Color coding for console output
    const getColor = (value: number, thresholds: [number, number]) => {
      if (value <= thresholds[0]) return '🟢';
      if (value <= thresholds[1]) return '🟡';
      return '🔴';
    };

    const thresholds: Record<string, [number, number]> = {
      CLS: [0.1, 0.25],
      FID: [100, 300],
      FCP: [1800, 3000],
      LCP: [2500, 4000],
      TTFB: [800, 1800],
      INP: [200, 500],
    };

    const threshold = thresholds[metric.name];
    if (threshold && process.env.NODE_ENV === 'development') {
      const color = getColor(metric.value, threshold);
      console.log(`${color} ${metric.name}: ${metric.value.toFixed(2)}${metric.name === 'CLS' ? '' : 'ms'}`);
    }
  });

  return null;
}
