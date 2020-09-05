<template>
  <div>
    <h1>{{title}}</h1>
    <blogs></blogs>
  </div>
</template>

<script>
import Blogs from "./Blog.vue";
export default {
  components:{
    'blogs': Blogs
  },
  data () {
    return {
      title: 'Blog App'
    }
  }
}
</script>

<style>
</style>
