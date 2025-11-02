import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function DownloadSuccess({ globalData }) {
  const router = useRouter();
  const { app } = router.query;
  const [downloadStarted, setDownloadStarted] = useState(false);

  // App-specific configurations
  const appConfig = {
    'weekly-timesheets': {
      title: 'Weekly Timesheets Power App',
      downloadUrl: '/downloads/weekly-timesheets/Weekly-Timesheets--Instalation-ZipFile-And-Instructions.zip',
      fileName: 'Weekly-Timesheets--Instalation-ZipFile-And-Instructions.zip'
    }
  };

  const config = appConfig[app] || appConfig['weekly-timesheets'];

  // Auto-start download after a short delay
  // useEffect(() => {
  //   if (!downloadStarted) {
  //     const timer = setTimeout(() => {
  //       setDownloadStarted(true);
  //       // Trigger download
  //       window.location.href = config.downloadUrl;
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [downloadStarted, config.downloadUrl]);

  return (
    <Layout>
      <SEO 
        title={`Download ${config.title} - ${globalData.name}`}
        description={`Thank you for downloading ${config.title}. Your download should start automatically.`}
      />
      <Header name={globalData.name} />
      
      <main className="w-full px-6 md:px-0 max-w-3xl mx-auto flex-1 flex flex-col justify-center py-12">
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
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Your download is ready
          </p>
          <a
            href={config.downloadUrl}
            className="inline-flex items-center justify-center px-8 py-3 bg-[rgb(22,163,74)] hover:bg-[rgb(21,128,61)] text-white font-semibold rounded-md transition-all duration-300 hover:shadow-lg"
            download
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Download {config.title}
          </a>
        </div>

        {/* Back to Projects */}
        <div className="text-center">
          <Link
            href="/projects/weekly-timesheets"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
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
            Back to Project Details
          </Link>
          <span className="mx-4 text-gray-400">|</span>
          <Link
            href="/"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
          >
            View All Projects
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

