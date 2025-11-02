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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
