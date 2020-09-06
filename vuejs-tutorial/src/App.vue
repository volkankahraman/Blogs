<template>
<div>
  <app-header></app-header>
  <blogs></blogs>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Blogs from "./components/Blogs.vue";
export default {
  components: {
    'app-header':Header,
    'app-footer':Footer,
    'blogs': Blogs
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
