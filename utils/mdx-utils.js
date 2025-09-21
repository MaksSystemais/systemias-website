import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import rehypeUnwrapImages from 'rehype-unwrap-images';

// PROJECTS_PATH is useful when you want to get the path to a specific file
export const PROJECTS_PATH = path.join(process.cwd(), 'projects');

// getProjectFilePaths is the list of all mdx files inside the PROJECTS_PATH directory
export const getProjectFilePaths = () => {
  return (
    fs
      .readdirSync(PROJECTS_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
};

export const sortProjectsBySequence = (projects) => {
  return projects.sort((a, b) => {
    const aSeq = a.data.sequence || 0;
    const bSeq = b.data.sequence || 0;
    return aSeq - bSeq;  // Ascending order (lower sequence numbers first)
  });
};

export const getProjects = () => {
  let projects = getProjectFilePaths().map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  projects = sortProjectsBySequence(projects);  // Changed from sortPostsByDate to sortProjectsBySequence

  return projects;
};

export const getProjectBySlug = async (slug) => {
  const projectFilePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism, rehypeUnwrapImages],
    },
    scope: data,
  });

  return { mdxSource, data, projectFilePath };
};

export const getNextProjectBySlug = (slug) => {
  const projects = getProjects();
  const currentFileName = `${slug}.mdx`;
  const currentProject = projects.find((project) => project.filePath === currentFileName);
  const currentProjectIndex = projects.indexOf(currentProject);

  const project = projects[currentProjectIndex - 1];
  // no prev project found
  if (!project) return null;

  const nextProjectSlug = project?.filePath.replace(/\.mdx?$/, '');

  return {
    title: project.data.title,
    slug: nextProjectSlug,
  };
};

export const getPreviousProjectBySlug = (slug) => {
  const projects = getProjects();
  const currentFileName = `${slug}.mdx`;
  const currentProject = projects.find((project) => project.filePath === currentFileName);
  const currentProjectIndex = projects.indexOf(currentProject);

  const project = projects[currentProjectIndex + 1];
  // no prev project found
  if (!project) return null;

  const previousProjectSlug = project?.filePath.replace(/\.mdx?$/, '');

  return {
    title: project.data.title,
    slug: previousProjectSlug,
  };
};
