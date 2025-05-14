import { getGlobalData } from '../utils/global-data';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ContactPage({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`Contact Us - ${globalData.name}`}
        description="Get in touch with us to discuss your project needs"
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <article className="max-w-2xl mx-auto px-6 md:px-0">
          <h1 className="mb-12 text-3xl text-center md:text-5xl dark:text-white">
            Contact Us
          </h1>
          <div className="prose dark:prose-invert mx-auto text-left">
            <p className="text-xl mb-6">
              Have a project in mind? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <input name="bot-field" />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required={true}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent dark:border-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required={true}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent dark:border-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-lg font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent dark:border-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent dark:border-gray-700 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 text-lg font-medium text-black bg-[#ffd700] rounded-md hover:bg-[#e6c200] transition-colors"
              >
                Send Message
              </button>
            </form>
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