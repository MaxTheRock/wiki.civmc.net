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
            collapsed: true,
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
            collapsed: true,
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
            text: "A",
            link: "/pages/commands/a/",
            collapsed: true,
            items: [
              { text: "Aliases", link: "/pages/commands/a/aliases" },
              { text: "/", link: "/pages/commands/a/slash" },
            ],
          },
          {
            text: "B",
            link: "/pages/commands/b/",
            collapsed: true,
            items: [
              { text: "Bastion", link: "/pages/commands/b/bastion" },
              { text: "BreweryX", link: "/pages/commands/b/breweryx" },
              { text: "Bukkit", link: "/pages/commands/b/bukkit" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "C",
            link: "/pages/commands/c/",
            collapsed: true,
            items: [
              { text: "CastleGates", link: "/pages/commands/c/castlegates" },
              { text: "Citadel", link: "/pages/commands/c/citadel" },
              { text: "CivChat2", link: "/pages/commands/c/civchat2" },
              { text: "CivModCore", link: "/pages/commands/c/civmodcore" },
              { text: "ClearLag", link: "/pages/commands/c/clearlag" },
              { text: "CombatTagPlus", link: "/pages/commands/c/combattagplus" },
              { text: "CraftEnhance", link: "/pages/commands/c/craftenhance" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "D",
            link: "/pages/commands/d/",
            collapsed: true,
            items: [
              { text: "Donum", link: "/pages/commands/d/donum" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "E",
            link: "/pages/commands/e/",
            collapsed: true,
            items: [
              { text: "EssenceGlue", link: "/pages/commands/e/essenceglue" },
              { text: "ExilePearl", link: "/pages/commands/e/exilepearl" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "F",
            link: "/pages/commands/f/",
            collapsed: true,
            items: [
              { text: "FactoryMod", link: "/pages/commands/f/factorymod" },
              { text: "Finale", link: "/pages/commands/f/finale" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "G",
            link: "/pages/commands/g/",
            collapsed: true,
            items: [
              { text: "GSit", link: "/pages/commands/g/gsit" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "H",
            link: "/pages/commands/h/",
            collapsed: true,
            items: [
              { text: "Help", link: "/pages/commands/h/help" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "I",
            link: "/pages/commands/i/",
            collapsed: true,
            items: [
              { text: "Insights", link: "/pages/commands/i/insights" },
              { text: "ItemExchange", link: "/pages/commands/i/itemexchange" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "J",
            link: "/pages/commands/j/",
            collapsed: true,
            items: [
              { text: "JukeAlert", link: "/pages/commands/j/jukealert" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "K",
            link: "/pages/commands/k/",
            collapsed: true,
            items: [
              { text: "KiraBukkitGateway", link: "/pages/commands/k/kirabukkitgateway" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "L",
            link: "/pages/commands/l/",
            collapsed: true,
            items: [
              { text: "LuckPerms", link: "/pages/commands/l/luckperms" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "N",
            link: "/pages/commands/n/",
            collapsed: true,
            items: [
              { text: "NameLayer", link: "/pages/commands/n/namelayer" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "R",
            link: "/pages/commands/r/",
            collapsed: true,
            items: [
              { text: "RailSwitch", link: "/pages/commands/r/railswitch" },
              { text: "RandomSpawn", link: "/pages/commands/r/randomspawn" },
              { text: "RealisticBiomes", link: "/pages/commands/r/realisticbiomes" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "S",
            link: "/pages/commands/s/",
            collapsed: true,
            items: [
              { text: "SimpleAdminHacks", link: "/pages/commands/s/simpleadminhacks" },
              { text: "SuperVanish", link: "/pages/commands/s/supervanish" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "T",
            link: "/pages/commands/t/",
            collapsed: true,
            items: [
              { text: "TAB", link: "/pages/commands/t/tab" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "V",
            link: "/pages/commands/v/",
            collapsed: true,
            items: [
              { text: "voicechat", link: "/pages/commands/v/voicechat" },
              { text: "Vulcan", link: "/pages/commands/v/vulcan" },
              { text: "/", link: "/pages/commands//slash" },
            ],
          },
          {
            text: "W",
            link: "/pages/commands/w/",
            collapsed: true,
            items: [
              { text: "WorldEdit", link: "/pages/commands/w/worldedit" },
              { text: "WorldEditSelectionVisualizer", link: "/pages/commands/w/worldeditselectionvisualizer" },
              { text: "/", link: "/pages/commands//slash" },
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
