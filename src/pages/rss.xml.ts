import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  const clean = (s: string) => s.trim().replace(/\s+/g, " ");
  return rss({
    title: "defmarco.com",
    description: "Personal blog and writings",
    site: context.site,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      content: 'http://purl.org/rss/1.0/modules/content/'
    },
    items: posts.map((post) => {
      const lang = post.slug.startsWith("de/") ? "de" : "en";
      const slug = post.slug.replace(`${lang}/`, "");
      return {
        title: clean(post.data.title!),
        pubDate: post.data.pubDate,
        description: clean(post.data.description!),
        link: `${context.site}${lang}/blog/${slug}/`,
      };
    }),
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`
  });
}
