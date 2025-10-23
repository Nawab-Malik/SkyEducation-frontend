import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Reload page to initialize analytics
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Delete all cookies
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <p className="cookie-consent-text">
          This site uses cookies to enhance your browsing experience and provide personalized content. 
          By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="cookie-consent-buttons">
          <button className="cookie-consent-btn cookie-consent-accept" onClick={handleAccept}>
            Accept
          </button>
          <button className="cookie-consent-btn cookie-consent-reject" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
