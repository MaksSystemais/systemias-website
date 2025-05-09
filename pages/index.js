import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Image from 'next/image';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-4 text-3xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h1>
        {/* Company motto */}
        <p className="mb-12 text-xl text-center italic text-gray-600 dark:text-gray-300">
          "We solve problems you did not know you have in the ways you don't need to understand"
        </p>
        {/* Blog posts list container */}
        <ul className="w-full">
          {/* Map through all blog posts and create a tile for each */}
          {posts.map((post) => (
            <li
              key={post.filePath}
              // Styling for the blog tile container with hover effects and responsive design
              className="transition border border-b-0 bg-white/10 border-gray-800/10 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 last:border-b"
              data-sb-object-id={`posts/${post.filePath}`}
            >
              {/* Link wrapper for the entire blog tile */}
              <Link
                // Convert .mdx file path to URL-friendly slug
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="block focus:outline-hidden focus:ring-4 focus:ring-primary/50"
              >
                {/* Post image */}
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src={post.data.image || '/images/Picture_Placeholder.jpg'}
                    alt={post.data.title}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                {/* Content container */}
                <div className="px-6 py-6 lg:py-10 lg:px-16">
                  {/* Display post date if available */}
                  {post.data.date && (
                    <p
                      className="mb-3 font-bold uppercase opacity-60"
                      data-sb-field-path="date"
                    >
                      {post.data.date}
                    </p>
                  )}
                  {/* Post title */}
                  <h2 className="text-2xl md:text-3xl" data-sb-field-path="title">
                    {post.data.title}
                  </h2>
                  {/* Display post description if available */}
                  {post.data.description && (
                    <p
                      className="mt-3 text-lg opacity-60"
                      data-sb-field-path="description"
                    >
                      {post.data.description}
                    </p>
                  )}
                  {/* Arrow icon indicating clickable tile */}
                  <ArrowIcon className="mt-4" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
