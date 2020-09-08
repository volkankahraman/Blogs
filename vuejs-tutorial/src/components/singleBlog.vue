<template>
  <div id="single-blog">
      <h1>{{blog.title}} </h1>
      <p align="right">{{date}}</p>
      <article>{{blog.content}}</article>
      <p>Categories : {{blog.categories}}</p>
      <p>Author: {{blog.author}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            blog:{},
            date: ''
        }
    },
    created(){
        this.$http.get('https://blogs-a90d5.firebaseio.com/post.json').then(
            function (res) {
                console.log(this.id);
                this.blog = res.body[this.id]
                this.date= new Date(this.blog.timestamp).getHours() +':'+new Date(this.blog.timestamp).getMinutes()
            }
        )
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>