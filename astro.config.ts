import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

const layoutOptions = {
  blog: "/src/layouts/BlogLayout.astro",
};

// https://astro.build/config
export default defineConfig({
  site: "https://lanceross.xyz",
  base: "/",
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: "poimandres",
    },
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 0,
    }),
    tailwind(),
    sitemap(),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
