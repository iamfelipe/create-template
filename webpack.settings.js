// webpack.settings.js - webpack settings config

const srcRoot = "src";

// Webpack settings exports
module.exports = {
  paths: {
    src: {
      js: "./" + srcRoot + "/js/",
    },
    dist: {
      base: "./dist/",
    },
    templates: "./templates/",
  },
  urls: {
    publicPath: () => "../",
  },
  entries: {
    main: ["index.js"],
  },
  copyWebpackConfig: [
    {
      context: "./" + srcRoot + "/assets/",
      from: "**/*",
      to: "./assets/[folder]/[name].[ext]?[contenthash]",
      flatten: true,
    },
  ],
  devServerConfig: {
    proxy: () => "",
    public: () => "/dist/",
    port: () => 8181,
    https: () => true,
  },
  manifestConfig: {
    basePath: "",
  },
  purgeCssConfig: {
    paths: [
      "./templates/**/*.{twig,html}",
      "./" + srcRoot + "/js/**/*.js",
      "./" + srcRoot + "/vue/**/*.{vue,html}",
    ],
    whitelist: [],
    whitelistPatterns: [],
    extensions: [
      "html",
      "js",
      "twig",
      "vue",
    ],
  },
};
