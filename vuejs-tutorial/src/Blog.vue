<template>
  <ul>
      <li v-for="blog in blogs">{{blog}}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      blogs: ['hello', 'world']
    }
  }
}
</script>

<style>
</style>
