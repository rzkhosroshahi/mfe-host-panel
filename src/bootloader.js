import Vue from "vue";
import App from './components/App';
import defaultLayout from './layouts/default';
import router from './router';
import "./index.css";

Vue.component('l-default', defaultLayout);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});

