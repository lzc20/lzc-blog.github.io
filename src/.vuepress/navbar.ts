import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "随笔",
    icon: "pen-to-square",
    prefix: "/随笔/",
    children: [
      {

        text: "代码心得",
        icon: "pen-to-square",
        prefix: "想法/",
        children: [
          { text: "思路", icon: "pen-to-square", link: "学习思路" },
          {
            text: "突如其来的感想",
            icon: "pen-to-square",
            link: "cao",
          },
        ],
      },
      {
        text: "工作随笔",
        icon: "pen-to-square",
        prefix: "工作/",
        children: [
          { text: "测试", icon: "pen-to-square", link: "test" },
        ],
      },
      {
        text: "生活随笔",
        icon: "pen-to-square",
        prefix: "生活/",
        children: [
          {
            text: "感悟",
            icon: "pen-to-square",
            link: "生活感悟",
          },
         
        
        ],
      },
    ],
  },
  "/knowledge",
  
  "/demo",

  
// 也可以放链接这里
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
