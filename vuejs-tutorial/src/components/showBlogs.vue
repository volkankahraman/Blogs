<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All Blog Articals</h1>
    <input type="text" v-model="search" placeholder="search">
    <div v-for="post in filteredBlogs" class="single-blog">
        <h3 v-rainbow>{{post.title | to-uppercase}}</h3>
        <p>{{post.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
        posts:[],
        search: ''
    };
  },
  methods:{
    
  },
  computed:{
    filteredBlogs:function () {
      return this.posts.filter((blog) => {
        return blog.title.includes(this.search)
      })
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/').then((data)=>{
        this.posts = data.body.slice(0,10);
    })
  }
};
</script>

<style>
#show-blogs{
    max-width: 600px;
    margin: 0 auto;

    /* padding: 10px; */
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
