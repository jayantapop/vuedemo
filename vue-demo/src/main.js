// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import VuePaginate from 'vue-paginate'
import VueSession from 'vue-session'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../node_modules/slick-carousel/slick/slick.css';


Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(VuePaginate);
Vue.use(VueSession);
Vue.use(VueAxios, axios)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
