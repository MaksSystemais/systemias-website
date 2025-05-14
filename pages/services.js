import { getGlobalData } from '../utils/global-data';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ServicesPage({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`Services - ${globalData.name}`}
        description="Explore our range of architectural and digital solutions"
      />
      <Header name={globalData.name} />
      <main className="w-full px-6 md:px-0">
        <article className="max-w-3xl mx-auto">
          <h1 className="mb-12 text-3xl text-center md:text-5xl dark:text-white">
            Our Services
          </h1>
          <div className="prose dark:prose-invert">
            <p className="text-xl mb-6">
              We combine architectural expertise with digital innovation to provide comprehensive solutions for your projects.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Bespoke Web Applications</h2>
            <p>
              We develop custom web applications and digital solutions to streamline your complex workflows and optimize your processes. Our solutions are tailored to your specific needs, ensuring maximum efficiency and effectiveness.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Microsoft Solutions</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">SharePoint & Power Apps</h3>
              <p>
                We offer low-code, cost-effective solutions using Microsoft's powerful platforms:
              </p>
              <ul>
                <li>Custom SharePoint site development</li>
                <li>Power Apps integration and customization</li>
                <li>Workflow automation</li>
                <li>Document management systems</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Project Collaboration Solutions with SharePoint</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Project CDEs (Common Data Environments)</h3>
              <p>
                We provide comprehensive project collaboration solutions:
              </p>
              <ul>
                <li>Project-specific SharePoint site setup</li>
                <li>Design information exchange platforms</li>
                <li>Collaboration workspace configuration</li>
                <li>Ongoing hosting and management</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Need Something Different?</h2>
            <p>
              If you don&apos;t see exactly what you&apos;re looking for, please <Link href="/contact" className="text-[#ffd700] hover:text-[#e6c200] transition-colors">get in touch</Link>. Contact us to discuss how we can help with your unique challenges.
            </p>


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