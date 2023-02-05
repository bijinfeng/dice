import { defineConfig } from "dumi";

const isProd =
  process.env.NODE_ENV === "production" && process.env.PREVIEW_PR !== "true";

export default defineConfig({
  exportStatic: isProd ? {} : false,
  favicons: ["https://img01.yzcdn.cn/vant/logo.png"],
  hash: isProd,
  base: "/",
  publicPath: "/",
  sitemap: {
    hostname: "https://bijinfeng.github.io/rn-vant/",
  },
  themeConfig: {
    name: "RN Vant",
    logo: "https://img01.yzcdn.cn/vant/logo.png",
    socialLinks: {
      github: "https://github.com/bijinfeng/rn-vant",
    },
  },
  resolve: {
    entryFile: "./src/index.tsx",
    codeBlockMode: "passive",
  },
  headScripts: [
    {
      src: "https://hm.baidu.com/hm.js?a0896c62a58a2ebf6a458b9361a6d106",
      async: true,
    },
  ],
  mfsu: false,
  plugins: ["./plugins/plugin-react-native"],
  alias: {
    "rn-vant": require.resolve("./src/index"),
  },
});
