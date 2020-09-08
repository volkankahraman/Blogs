<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All Blog Articals</h1>
    <input type="text" v-model="search" placeholder="search" />
    <div v-for="post in filteredBlogs" class="single-blog">
      
      <router-link :to="'/blog/'+post.id">
        <h3>{{post.title | to-uppercase}}</h3>
      </router-link>
      <!-- <a [routerLink]="'blog',blog.id"><h3>{{post.title | to-uppercase}}</h3></a> -->
      <p>{{post.content | snippet}}</p>
    </div>
  </div>
</template>

<script>
import searchMixin from "./../mixins/searchMixin";

export default {
  components: {},
  data() {
    return {
      posts: [],
      search: "",
    };
  },
  methods: {},
  mixins: [searchMixin],
  created() {
    this.$http
      .get("https://blogs-a90d5.firebaseio.com/post.json")
      .then((data) => {
        for (const key in data.body) {
          if (data.body.hasOwnProperty(key)) {
            data.body[key].id = key;
            
        this.posts.push(data.body[key])
            
          }
        }
        console.log(this.posts);
        // this.posts = data.body.slice(0, 10);
      });
  },
  filters: {
    toUppercase: function (value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 600px;
  margin: 0 auto;

  /* padding: 10px; */
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  color:blacks
}
a{
  color:black
}
</style>
