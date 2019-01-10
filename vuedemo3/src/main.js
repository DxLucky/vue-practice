import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "./assets/style/basic.scss";

new Vue({
  el: "#app",
  router,//挂载路由
  render: h => h(App)
});

