import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store/store';
import "./http";

Vue.config.productionTip = false;

Vue.use(Vuex);

window.app = new Vue({
    data: {
        client_id: localStorage.getItem('client_id')
    },
    router,
    store,
    render: h => h(App),
}).$mount('#app');
