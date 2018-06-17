import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { createProvider } from './apollo';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  provide: createProvider().provide(),
  router,
  render: (h) => h(App),
}).$mount('#app');
