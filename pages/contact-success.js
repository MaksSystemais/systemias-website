import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function ContactSuccess({ globalData }) {
  return (
    <Layout>
      <SEO 
        title={`Message Sent - ${globalData.name}`}
        description="Thank you for contacting us. We'll get back to you soon."
      />
      <Header name={globalData.name} />
      
      <main className="w-full px-6 md:px-0 max-w-3xl mx-auto py-12">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <svg 
              className="w-12 h-12 text-green-600 dark:text-green-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Message Sent!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thank you for reaching out
          </p>
        </div>

        {/* Confirmation Message */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-lg border border-green-200 dark:border-green-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            We have received your message
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Thank you for contacting Systemais. We appreciate your interest and will get back to you as soon as possible, typically within 1-2 business days.
          </p>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Your message has been successfully submitted</span>
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We&apos;ll review your inquiry and respond promptly</span>
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Check your inbox for a confirmation email</span>
            </p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What happens next?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full font-bold mr-3">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  We review your message
                </h3>
                <p className="text-sm">
                  Our team will carefully read your inquiry to understand your needs and how we can help.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full font-bold mr-3">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  We prepare a response
                </h3>
                <p className="text-sm">
                  Depending on your inquiry, we&apos;ll gather the necessary information or prepare a detailed response.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full font-bold mr-3">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  We get in touch
                </h3>
                <p className="text-sm">
                  You&apos;ll receive a personalized response via email within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Need Immediate Assistance */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need immediate assistance?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If your matter is urgent, you can also reach us directly:
          </p>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:letstalk@systemais.co.uk" className="text-green-600 dark:text-green-400 hover:underline">
                letstalk@systemais.co.uk
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Home
          </Link>
          <span className="mx-4 text-gray-400">|</span>
          <Link
            href="/"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
          >
            View Our Projects
          </Link>
        </div>
      </main>

      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const globalData = getGlobalData();

  return {
    props: {
      globalData,
    },
  };
}

