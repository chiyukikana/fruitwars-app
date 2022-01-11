import $ from "jquery";

const elements = {
  nodes: {
    body: $("body"),
    app: $("#app"),
    player: $("#fruit-basket"),
    readme: {
      element: $("#readme"),
      startButton: $("#STARTGAME"),
      totalFruits: $("#total-fruits"),
      totalItems: $("#total-items"),
      historyElement: $("#history"),
      icons: {
        element: $("#fruit-icon"),
        items: $("#readme-menu>ul>li>span"),
        contents: $("#readme>div:last-child>article"),
      },
    },
    statusbar: {
      element: $("#player-status"),
      health: $("#health>i"),
      mana: $("#mana>i"),
      scores: $("#current-scores>i"),
      countdown: $("#countdown>i"),
    },
    levels: {
      element: $("#levels"),
      container: $("#levels>div"),
      value: $("#levels>p"),
    },
    gameover: {
      element: $("#gameover"),
      playtime: $("#over-playtime"),
      levels: $("#over-levels"),
      achievements: $("#over-achievements>ul"),
      achievementsLength: $("#over-achievements-length"),
      totals: {
        fruits: $("#over-fruits"),
        badFruits: $("#over-bad-fruits"),
      },
      scores: $("#over-scores"),
      details: $("#over-details"),
      restart: $("#RESTART"),
    },
  },
  entities: {
    // 因为实体在游戏中是不确定的，所以需要变为函数让定时器调用
    includes: () => $(".fruits, .items"),
    fruits: () => $(".fruits"),
    items: () => $(".items"),
  },
  totalEntities: () => $("#app>*:not(div)"),
};
// const elements = {
//   body: $("body"),
//   app: $("#app"),
//   playerNode: $("#fruit-basket"),
//   readme: {
//     start: $("#STARTGAME"),
//     readme: $("#readme"),
//     details: {
//       totals: {
//         fruits: $("#total-fruits"),
//         items: $("#total-items"),
//       },
//     },
//     history: $("#history"),
//     icons: {
//       icon: $("#fruit-icon"),
//       items: $("#readme-menu>ul>li>span"),
//       contents: $("#readme>div:last-child>article"),
//     },
//   },
//   entities: {
//     // 因为实体在游戏中是不确定的，所以需要变为函数让定时器调用
//     includes: () => $(".fruits, .items"),
//     fruits: () => $(".fruits"),
//     items: () => $(".items"),
//   },
//   statusbar: {
//     main: $("#player-status"),
//     health: $("#health>i"),
//     mana: $("#mana>i"),
//     scores: $("#current-scores>i"),
//     countdown: $("#countdown>i"),
//   },
//   levels: $("#levels"),
//   levelsContainer: $("#levels>div"),
//   levelsValue: $("#levels>p"),
//   gameover: {
//     main: $("#gameover"),
//     playtime: $("#over-playtime"),
//     levels: $("#over-levels"),
//     achievements: $("#over-achievements>ul"),
//     achievementsLength: $("#over-achievements-length"),
//     totals: {
//       fruits: $("#over-fruits"),
//       badFruits: $("#over-bad-fruits"),
//     },
//     scores: $("#over-scores"),
//     details: $("#over-details"),
//     restart: $("#RESTART"),
//   },
//   removeEntities: () => $("#app>*:not(div)"),
// };

export default elements;
