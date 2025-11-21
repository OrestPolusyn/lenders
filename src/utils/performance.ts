// Web Vitals monitoring
export interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Track Core Web Vitals
export function trackWebVitals(callback: (metric: Metric) => void): void {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        callback({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: getRating('LCP', lastEntry.renderTime || lastEntry.loadTime),
        });
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP tracking not supported');
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          callback({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            rating: getRating('FID', entry.processingStart - entry.startTime),
          });
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID tracking not supported');
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        callback({
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
        });
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS tracking not supported');
    }
  }
}

// Get rating based on thresholds
function getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
  };

  const threshold = thresholds[metric as keyof typeof thresholds];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Report to analytics
export function reportWebVitals(): void {
  trackWebVitals((metric) => {
    console.log(`[Performance] ${metric.name}:`, {
      value: Math.round(metric.value),
      rating: metric.rating,
    });

    // Send to analytics (uncomment when ready)
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.value),
    //     metric_rating: metric.rating,
    //   });
    // }
  });
}

// Performance marks helper
export function mark(name: string): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(name);
  }
}

export function measure(name: string, startMark: string, endMark?: string): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    try {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }
    } catch (e) {
      // Mark doesn't exist
    }
  }
}
