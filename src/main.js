import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import 'bootstrap';

Vue.config.productionTip = false;

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo, {
  duration: 800
})

Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
