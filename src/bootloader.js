import Vue from "vue";
import App from './components/App';
import SideBar from './components/SideBar';
import defaultLayout from './layouts/default';
import router from './router';
import "./index.css";
import { store } from './store';

Vue.component('l-default', defaultLayout);

new Vue({
  el: "#vueApp",
  router,
  template: "<App/>",
  components: { App },
});

new Vue({
  el: "#nav",
  router,
  store,
  template: "<SideBar/>",
  components: { SideBar },
});

