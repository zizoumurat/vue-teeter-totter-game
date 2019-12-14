import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mapMutations, mapState } from 'vuex'


Vue.config.productionTip = false

document.addEventListener('keyup', event => {
    if (event.keyCode == 32) {

    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')