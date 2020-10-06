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
  entries: {
    main: ["index.js"],
  },
  copyWebpackConfig: [
    {
      context: "./" + srcRoot + "/static/",
      from: "**/*",
      to: "./static/[folder]/[name].[ext]?[contenthash]",
      flatten: true,
    },
  ],
  devServerConfig: {
    // The base path of your Drupal development server. This is what you would
    // normally navigate to in your browser when working on the site.
    proxy: () => "",
    // The absolute path to the directory, relative to the PROXY path above, to the
    // directory that contains the files that you want webpack-dev-server to NOT
    // pass on to Drupal.
    // For example, if your .js file is normally accessed via http://a.com/src/script.js
    // and you want webpack-dev-server to handle all the .js files in the src
    // directory set this to '/src/'
    public: () => "/dist/",
    port: () => 8181,
    https: () => true,
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
