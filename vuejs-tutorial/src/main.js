import Vue from 'vue'
import App from './App.vue'
import Blogs from './Blog.vue'

Vue.component('blogs', Blogs)

new Vue({
  el: '#app',
  render: h => h(App)
})
