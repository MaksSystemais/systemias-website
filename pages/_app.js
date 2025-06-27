import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { initGA, pageview, GA_MEASUREMENT_ID } from '../utils/analytics';
import CookieConsent from '../components/CookieConsent';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Check if analytics is allowed
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'accepted') {
      initGA();
    }

    // Handle route changes
    const handleRouteChange = (url) => {
      if (cookieConsent === 'accepted') {
        pageview(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleCookieAccept = () => {
    initGA();
    pageview(window.location.pathname);
  };

  return (
    <>
      {/* Google Analytics Script */}
      {GA_MEASUREMENT_ID && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
      )}
      
      <span className="theme-bejamas" />
      <Component {...pageProps} />
      <CookieConsent
        onAccept={handleCookieAccept}
        onDecline={() => {}}
      />
    </>
  );
}

export default MyApp;
