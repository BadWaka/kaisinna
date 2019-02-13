import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './pages/Index.vue';
import ComponentIndex from './pages/ComponentIndex.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/components',
            component: ComponentIndex
        }
    ]
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');