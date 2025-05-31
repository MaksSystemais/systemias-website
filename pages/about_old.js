import { getGlobalData } from '../utils/global-data';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AboutPage({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`About - ${globalData.name}`}
        description="Learn more about our company and mission"
      />
      <Header name={globalData.name} />
      <main className="w-full px-6 md:px-0 flex justify-center">
        <article className="max-w-3xl w-full">
          <h1 className="mb-12 text-3xl text-center md:text-5xl dark:text-white">
            About Us
          </h1>
          <div className="prose dark:prose-invert">
            <p className="text-xl mb-6">
              Welcome to {globalData.name}. We are a unique collaboration between RIBA-qualified architects and professional software engineers, working together to create bespoke solutions and innovative web applications.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to bridge the gap between architectural excellence and cutting-edge technology. We combine architectural expertise with software engineering to deliver comprehensive solutions that meet the evolving needs of the modern built environment.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h2>
            <ul>
              <li>RIBA-qualified architectural design and consultation</li>
              <li>Custom software development and web applications</li>
              <li>Digital solutions for architectural practices</li>
              <li>Integration of technology in architectural projects</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
            <p>
              By combining architectural expertise with software engineering capabilities, we create innovative solutions that enhance both the physical and digital aspects of architectural projects. Our team brings together the best of both worlds to deliver exceptional results for our clients.
            </p>
          </div>
          <p className="text-xl mb-6 font-bold">
            <a href="mailto:letstalk@systemais.co.uk">letstalk@systemais.co.uk</a>
          </p>
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