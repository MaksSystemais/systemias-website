import { getGlobalData } from '../../utils/global-data';
import {
  getNextProjectBySlug,
  getProjectBySlug,
  getPreviousProjectBySlug,
  getProjectFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import Button from '../../components/Button';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import FormComponent from '../../components/FormComponent';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

// Define custom components for MDX rendering
// These components will be used to render MDX content with custom styling and behavior
const components = {
  a: CustomLink,        // Custom link component for handling internal/external links
  Button,               // Custom button component
  FormComponent,        // Reusable form component for downloads and contact
  Head,                 // Next.js Head component for managing document head
  img: CustomImage,     // Custom image component for optimized image loading
};

// Main project page component
export default function ProjectPage({
  source,              // MDX source content
  frontMatter,         // Project metadata (title, description, etc.)
  prevProject,         // Previous project data for navigation
  nextProject,         // Next project data for navigation
  globalData,          // Global site data
  slug,                // Current project slug
}) {
  return (
    <Layout>
      {/* SEO component for managing meta tags */}
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      
      {/* Main article container */}
      <article className="px-6 md:px-0 max-w-2xl mx-auto" data-sb-object-id={`projects/${slug}.mdx`}>
        {/* Article header with title and description */}
        <header>
          <h1
            className="mb-12 text-3xl font-bold text-center md:text-5xl dark:text-white pt-12 pb-4 mx-auto"
            data-sb-field-path="title"
          >
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="mb-4 text-xl mx-auto" data-sb-field-path="description">
              {frontMatter.description}
            </p>
          )}
        </header>

        {/* Main content area with MDX rendering */}
        <main className="w-full mx-auto">
          <article
            className="prose dark:prose-invert max-w-none w-full prose-p:text-lg prose-p:mb-4 prose-p:leading-relaxed prose-li: text-lg"
            data-sb-field-path="markdown_content"
          >
            <MDXRemote {...source} components={components} />
          </article>
        </main>

        {/* Navigation between projects */}
        <div className="grid mt-12 md:grid-cols-2 lg:-mx-24">
          {/* Previous project link */}
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex flex-col px-10 py-8 text-center transition border border-gray-800/10 bg-white/10 md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg last:rounded-b-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none"
            >
              <p className="mb-4 text-gray-500 uppercase dark:text-white dark:opacity-60">
                Previous
              </p>
              <h4 className="mb-6 text-2xl text-gray-700 dark:text-white">
                {prevProject.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto transform rotate-180 md:mr-0" />
            </Link>
          )}
          
          {/* Next project link */}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex flex-col px-10 py-8 text-center transition border border-t-0 border-b-0 border-gray-800/10 bg-white/10 md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 first:border-t first:rounded-t-lg md:border-t last:border-b"
            >
              <p className="mb-4 text-gray-500 uppercase dark:text-white dark:opacity-60">
                Next
              </p>
              <h4 className="mb-6 text-2xl text-gray-700 dark:text-white">
                {nextProject.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto md:ml-0" />
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      {/* Gradient backgrounds commented out
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
      */}
    </Layout>
  );
}

// Get static props for the page
// This function runs at build time to generate the page
export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getProjectBySlug(params.slug);
  const prevProject = getPreviousProjectBySlug(params.slug);
  const nextProject = getNextProjectBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      prevProject,
      nextProject,
    },
  };
};

// Get static paths for all projects
// This function tells Next.js which pages to pre-render at build time
export const getStaticPaths = async () => {
  const paths = getProjectFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // Return 404 for paths not returned by getStaticPaths
  };
};
