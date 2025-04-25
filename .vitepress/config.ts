import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CivMC Wiki",
  description: "Hints, tips, tricks and guides on all things CivMC",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "New Player Guide", link: "/pages/new-player-guide" },
      { text: "Server Overview", link: "/pages/server-overview" },
      { text: "Unique Plugins", link: "/pages/plugins/unique/" },
    ],

    sidebar: [
      { text: "New Player Guide", link: "/pages/new-player-guide" },
      { text: "Server Overview", link: "/pages/server-overview" },
      { text: "Change Log", link: "/pages/changelog" },
      {
        text: "Plugins",
        items: [
          {
            text: "Essential",
            link: "pages/plugins/essential/",
            collapsed: false,
            items: [
              { text: "NameLayer", link: "pages/plugins/essential/namelayer" },
              { text: "Citadel", link: "pages/plugins/essential/citadel" },
              {
                text: "ExilePearl",
                link: "pages/plugins/essential/exilepearl",
              },
            ],
          },
          {
            text: "Unique",
            link: "pages/plugins/unique/",
            collapsed: false,
            items: [
              { text: "Hiddenore", link: "pages/plugins/unique/hiddenore" },
              { text: "Factorymod", link: "pages/plugins/unique/factorymod" },
              { text: "Finale", link: "pages/plugins/unique/finale" },
              { text: "PvP Server", link: "pages/plugins/unique/pvpserver" },
              { text: "JukeAlert", link: "pages/plugins/unique/jukealert" },
              { text: "Bastions", link: "pages/plugins/unique/bastions" },
              { text: "Realistic Biomes", link: "pages/plugins/unique/rb" },
              { text: "Heliodor", link: "pages/plugins/unique/heliodor" },
              { text: "Transport Changes", link: "pages//plugins/unique/Transport" },
              { text: "Chunk Limits", link: "pages/plugins/unique/chunklimits" },
            ],
          },
          {
            text: "Fun",
            link: "pages/plugins/fun/",
            collapsed: true,
            items: [
              { text: "Item Exchange", link: "pages/plugins/fun/itemexchange" },
              { text: "Brewery", link: "pages/plugins/fun/brewery" },
              { text: "EvenMoreFish", link: "pages/plugins/fun/evenmorefish" },
              { text: "Wordbank", link: "pages/plugins/fun/wordbank" },
              { text: "Railswitch", link: "pages/plugins/fun/railswitch" },
              { text: "Elevators", link: "pages/plugins/fun/elevators" },
              { text: "Castlegate", link: "pages/plugins/fun/castlegate" },
              { text: "Arthropod Egg", link: "pages/plugins/fun/arthropodegg" },
            ],
          },
        ],
      },
      {
        text: "Commands",
        items: [
          {
            text: "Test",
            link: "/pages/commands/test1",
            collapsed: false,
            items: [
              { text: "Test", link: "/pages/commands/test1/test" },
            ],
          },
        ],
      },
    ],

    editLink: {
      pattern: "https://github.com/CivMC/wiki.civmc.net/edit/main/:path",
    },

    footer: {
      message:
        'All Content is released under the <a href="https://github.com/CivMC/wiki.civmc.net/blob/main/LICENSE.txt">MIT License</a>.',
      copyright:
        'Copyright © 2023-Present <a href="https://github.com/CivMC">CivMC</a>',
    },

    socialLinks: [{ icon: "github", link: "https://github.com/CivMC/" }],
  },
});
