import Link from 'next/link';
import { getProjects } from '../utils/mdx-utils';
import Image from 'next/image';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import TechnologyIcons from '../components/TechnologyIcons';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ projects, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full px-6 md:px-0">
        <h1 className="mb-4 text-2xl text-center lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto pt-12">
          {/*{globalData.blogTitle}*/} Work smarter, perform better. <span className="px-1 py-1 font-bold" style={{backgroundColor: 'rgba(0, 227, 107, 0.3)'}}>Efficiency</span> in action!
        </h1>
        {/* Company motto */}
        <p className="mb-12 text-base text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto pb-12">
        We aim to develop effective digital tools for architects and AEC industry professionals tackling the current real industry challenges.
        </p>
        {/* Projects grid container - 2 column gallery */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through all projects and create a tile for each */}
          {projects.map((project) => (
            <li
              key={project.filePath}
              // Styling for the project tile container with hover effects and responsive design
              className="transition-all duration-300 border border-white/50 dark:border-white/20 hover:bg-gradient-to-br hover:from-green-400/20 hover:to-yellow-400/20 hover:shadow-lg hover:shadow-green-500/10 focus-within:border-2 focus-within:border-[rgb(0,226,108)] rounded-lg"
              data-sb-object-id={`projects/${project.filePath}`}
            >
              {/* Link wrapper for the entire blog tile */}
              <Link
                // Convert .mdx file path to URL-friendly slug
                as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`}
                href={`/projects/[slug]`}
                className="block focus:outline-none"
              >
                {/* Project image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.data.image || '/images/Picture_Placeholder.jpg'}
                    alt={project.data.title}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                {/* Content container */}
                <div className="px-4 py-4 lg:px-6 lg:py-6">
                  {/* Display project date if available */}
                  {/*{project.data.date && (
                    <p
                      className="mb-2 text-sm font-bold uppercase opacity-60"
                      data-sb-field-path="date"
                    >
                      {project.data.date}
                    </p>
                  )}*/}
                  {/* Project title */}
                  <h2 className="text-lg md:text-xl lg:text-xl" data-sb-field-path="title">
                    {project.data.title}
                  </h2>
                  {/* Display project description if available */}
                  {project.data.description && (
                    <p
                      className="mt-2 text-sm md:text-base opacity-60"
                      data-sb-field-path="description"
                    >
                      {project.data.description}
                    </p>
                  )}
                  {/* Technology icons */}
                  <TechnologyIcons technologies={project.data.technologies} />
                  
                  {/* Read more text and arrow icon */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Read more</span>
                    <ArrowIcon />
                  </div>
                  

                </div>
              </Link>
            </li>
          ))}
         
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      {/* Original gradient components commented out
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
      */}
    </Layout>
  );
}

export function getStaticProps() {
  const projects = getProjects();
  const globalData = getGlobalData();

  return { props: { projects, globalData } };
}
