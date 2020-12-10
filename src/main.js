import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { fakeApi } from '@/fakeApi';
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.config.productionTip = false

Vue.use( VueReCaptcha, { siteKey: process.env.VUE_APP_RECAPTCHA } );

if( process.env.NODE_ENV === 'development' ) {
  fakeApi();
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
