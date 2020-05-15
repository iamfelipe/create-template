// Import theme styles
import "../css/main.scss";
// Package plugins
import "alpinejs";
import stickybits from "stickybits";

window.onload = () => {
  stickybits("#header");
};

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
