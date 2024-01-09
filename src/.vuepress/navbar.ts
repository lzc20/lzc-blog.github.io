import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "随笔",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "代码心得",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "思路", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "工作随笔",
        icon: "pen-to-square",
        prefix: "java/",
        children: [
          { text: "测试", icon: "pen-to-square", link: "test" },
        ],
      },
      {
        text: "生活随笔",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "感悟",
            icon: "pen-to-square",
            link: "1",
          },
        
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  "/code-life",

  

  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
