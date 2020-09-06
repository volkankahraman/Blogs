<template>
  <div id="blogs">
      <ul>
          <li v-for="blog in blogs" v-on:click="blog.show = !blog.show">
              <h2>{{blog.title}}</h2>
              <h3 v-show="blog.show">{{blog.content}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        { title: "Hello", content: "Hello world", show: false },
        { title: "Lorem", content: "Lorem Ipsum", show: false },
        { title: "My", content: "My application", show: false },
      ],
    };
  },
};
</script>

<style scoped>
#blogs{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border:1px solid #222;
    margin:10px;
}
</style>
