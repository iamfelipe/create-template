// webpack.settings.js - webpack settings config

// Webpack settings exports
module.exports = {
  paths: {
    src: {
      js: "./src/js/",
    },
    dist: {
      base: "./dist/",
      clean: ["**/*"],
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
      context: "./src/assets/",
      from: "**/*",
      to: "./assets/[folder]/[name].[ext]?[contenthash]",
      flatten: true,
    },
  ],
  devServerConfig: {
    public: () => "/dist/",
    host: () => "localhost",
    port: () => 8080,
    https: () => false,
  },
  manifestConfig: {
    basePath: "",
  },
  purgeCssConfig: {
    paths: ["./templates/**/*.{twig,html}", "./src/js/**/*.js"],
  },
};
