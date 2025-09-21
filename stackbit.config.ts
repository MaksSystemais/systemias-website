// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['projects'],
            models: [
                {
                    name: "Project",
                    type: "page",
                    urlPath: "/projects/{slug}",
                    filePath: "projects/{slug}.mdx",
                    fields: [
                        { name: "title", type: "string", required: true, default: 'Project Title' }, 
                        { name: "description", type: "string", default: 'Project description goes here' },
                        { name: "date", type: "date", required: true },
                        { name: "image", type: "image", default: '/images/Picture_Placeholder.jpg' },
                        { name: "sequence", type: "number", required: true, default: 0 }
                    ]
                  }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
});