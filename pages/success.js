import { getGlobalData } from '../utils/global-data';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function SuccessPage({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`Message Sent - ${globalData.name}`}
        description="Thank you for contacting us"
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <article className="max-w-2xl mx-auto px-6 md:px-0">
          <h1 className="mb-12 text-3xl text-center md:text-5xl dark:text-white">
            Message Sent Successfully
          </h1>
          <div className="prose dark:prose-invert mx-auto text-center">
            <p className="text-xl mb-6">
              Thank you for reaching out! We have received your message and will get back to you as soon as possible.
            </p>
            <Link href="/" className="px-6 py-3 text-lg font-medium text-black bg-[#ffd700] rounded-md hover:bg-[#e6c200] transition-colors inline-block">
              Return to Home
            </Link>
          </div>
        </article>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return {
    props: {
      globalData,
    },
  };
} 