import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/lzc-blog.github.io/",

  lang: "zh-CN",
  title: "lzc的博客",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  head: [
    ["meta", { name: "heroImage", content: "./public/assets/images/cover1.jpg" }],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
