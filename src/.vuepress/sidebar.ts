import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
   
    // {
    //   text: "知识笔记总结",
    //   icon: "laptop-code",
    //   prefix: "knowledge/",
    //   link: "knowledge/",
    //   children: "structure",
    // },
    // {
    //   text: "网站例子",
    //   icon: "book",
    //   prefix: "demo/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
    // "code-life",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
  "/knowledge/": [
    {
      text: "笔记",
      // icon: "book",
      // prefix: "code-life/",
      // link: "code-life/",
      children: "structure",
    },
    
  ],
  "/demo/": [
    {
      text: "演示",
      icon: "white_large_square",
      // prefix: "code-life/",
      // link: "code-life/",
      children: "structure",
    },
    
  ],
});
