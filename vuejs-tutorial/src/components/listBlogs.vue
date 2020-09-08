<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search" />
    <div v-for="post in filteredBlogs" class="single-blog">
      <h3 v-rainbow>{{post.title | to-uppercase}}</h3>
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
  //
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((data) => {
        this.posts = data.body.slice(0, 10);
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

<style>
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
}
</style>
