import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import myRoutes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes, mode: 'history'})

Vue.http.options.root = 'http://localhost:3003';

export default {
  bus: new Vue()
}

new Vue({
  router : myRouter,
  el: '#app',
  render: h => h(App)
})
