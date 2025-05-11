import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import rehypeUnwrapImages from 'rehype-unwrap-images';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

// getPostFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const getPostFilePaths = () => {
  return (
    fs
      .readdirSync(POSTS_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
};

export const sortPostsBySequence = (posts) => {
  return posts.sort((a, b) => {
    const aSeq = a.data.sequence || 0;
    const bSeq = b.data.sequence || 0;
    return aSeq - bSeq;  // Ascending order (lower sequence numbers first)
  });
};

export const getPosts = () => {
  let posts = getPostFilePaths().map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  posts = sortPostsBySequence(posts);  // Changed from sortPostsByDate to sortPostsBySequence

  return posts;
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism, rehypeUnwrapImages],
    },
    scope: data,
  });

  return { mdxSource, data, postFilePath };
};

export const getNextPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex - 1];
  // no prev post found
  if (!post) return null;

  const nextPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: nextPostSlug,
  };
};

export const getPreviousPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex + 1];
  // no prev post found
  if (!post) return null;

  const previousPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: previousPostSlug,
  };
};
