import { useState, useEffect } from 'react';

const CookieConsent = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    if (onDecline) onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm mb-4 sm:mb-0">
          We use Google Analytics to understand our site traffic.
          {/*<a href="/privacy-policy" className="underline ml-1">Learn more</a>*/}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            style={{ 
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              backgroundColor: '#00e36b',
              color: '#1a1a1a',
              borderRadius: '0.375rem',
              transition: 'background-color 200ms',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#00cc5f'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#00e36b'}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 