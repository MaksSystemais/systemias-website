import { getGlobalData } from '../utils/global-data';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CustomImage from '../components/CustomImage';
import CustomLink from '../components/CustomLink';
import FormComponent from '../components/FormComponent';

const components = {
  a: CustomLink,
  img: CustomImage,
  FormComponent,
};

export default function AboutPage({ mdxSource, frontMatter, globalData }) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      <main className="w-full px-6 md:px-0">
        <article className="prose dark:prose-invert max-w-2xl mx-auto w-full prose-p:text-lg prose-p:mb-4 prose-p:leading-relaxed">
          <h1 className="mb-12 pt-12 text-3xl text-center md:text-5xl dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </article>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = getGlobalData();
  const source = fs.readFileSync(path.join(process.cwd(), 'pages/about.mdx'));
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return {
    props: {
      globalData,
      mdxSource,
      frontMatter: data,
    },
  };
} 