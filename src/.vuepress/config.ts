import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/lzc-blog.github.io/",

  lang: "zh-CN",
  title: "lzc的博客",
  description: "vuepress-theme-hope 的博客演示",


  theme,
  // head：处理得是页面主题栏上得页签上面得图标
  head: [['link', { rel: 'icon', href: 'http://wx.qlogo.cn/mmopen/hq5eSuP936UuicLNJoPk3v5ksFoeq51J9yI6uF6QtLpfVewy63EIgnceVFFW8BD3uAUXTrrQlQ8AV6JZRJHib4iansmlqIoUznO/64' }]],
  // head: [
  //   ["meta", { name: "heroImage", content: "./public/assets/images/cover1.jpg" }],
  // ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
