// Google Analytics initialization utility
export const initAnalytics = () => {
  // Check if user has accepted cookies
  const consent = localStorage.getItem('cookieConsent');

  if (consent === 'accepted') {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    // Add gtag to window object for global access
    window.gtag = gtag;

    // Load Google Analytics script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'; // Replace with your actual GA ID

    // Add configuration script
    script.onload = () => {
      gtag('config', 'G-XXXXXXX'); // Replace with your actual GA ID
    };

    document.head.appendChild(script);
  }
};

// Utility function to track events (only if analytics is initialized)
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag && localStorage.getItem('cookieConsent') === 'accepted') {
    window.gtag('event', eventName, parameters);
  }
};

// Utility function to track page views (only if analytics is initialized)
export const trackPageView = (pagePath) => {
  if (window.gtag && localStorage.getItem('cookieConsent') === 'accepted') {
    window.gtag('config', 'G-XXXXXXX', { // Replace with your actual GA ID
      page_path: pagePath,
    });
  }
};
