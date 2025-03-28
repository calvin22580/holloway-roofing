import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Holloway Roofing | Blog',
    description: 'Expert roofing advice, tips, and insights for Cambridge homeowners and businesses. Learn about flat roofing, repairs, and maintenance from Holloway Roofing.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
} 