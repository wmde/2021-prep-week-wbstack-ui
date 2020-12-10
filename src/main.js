import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { fakeApi } from '@/fakeApi';

Vue.config.productionTip = false

if( process.env.NODE_ENV === 'development' ) {
  fakeApi();
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
