// Import theme styles
import "../css/main.scss";

import stickybits from "stickybits";

stickybits("#header");

window.onload = () => {
  stickybits("#header");
};

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
