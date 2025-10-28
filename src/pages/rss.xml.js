import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Marco Schneider | Blog",
    description: "Personal blog and writings",
    site: context.site,
    items: posts.map((post) => {
      const lang = post.slug.startsWith("de/") ? "de" : "en";
      const slug = post.slug.replace(`${lang}/`, "");
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/${lang}/blog/${slug}/`,
      };
    }),
  });
}
