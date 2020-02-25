import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/store';
import apollo from './apolloClient';
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apollo
});

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
