// Import theme styles
import "../css/main.scss";
// Import package plugins
import "alpinejs";

// Process custom static images
function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context("../static/", false, /\.(png|jpe?g|svg)$/));

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
