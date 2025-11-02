import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { generateCssVariables } from '../utils/theme-utils';

class MyDocument extends Document {
  render() {
    const cssVars = generateCssVariables();

    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <style>{`:root{${cssVars}}`}</style>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
        </Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-black dark:text-white leading-base`}
        >
          {/* Hidden forms for Netlify Forms detection */}
          <form name="download-form" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="download-form" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="company" />
            <input type="text" name="app-name" />
            <input type="text" name="bot-field" />
          </form>
          <form name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="contact-form" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="company" />
            <textarea name="message"></textarea>
            <input type="text" name="bot-field" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
