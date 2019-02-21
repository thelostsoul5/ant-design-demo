// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App";

Vue.use(DatePicker);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});