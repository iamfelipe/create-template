// Packages
import Vue from "vue";
import App from "@/src/vue/App.vue";

// Assets
import "@/src/css/main.scss";

new Vue({
  el: "#app",
  render: h => h(App),
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
