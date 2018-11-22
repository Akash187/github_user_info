import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import './font-awesome';
import VueRouter from 'vue-router';
import Routes from './routes/routes';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

export const bus = new Vue();

Vue.use(Vuetify);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
