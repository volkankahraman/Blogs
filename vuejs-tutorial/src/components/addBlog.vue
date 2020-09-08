<template>
  <div id="add-blog">
    <h2>Add new blog post</h2>
    <form  v-if="!submited">
      <label for>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label for>Blog Content</label>
      <textarea name v-model.lazy="blog.content" id cols="30" rows="10"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Ninjas</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="fighters" v-model="blog.categories" />
        <label>Fighters</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Mario</label>
        
      </div>
      <label>Author:</label>
        <select v-model="blog.author">
          <option  disabled >Choose</option>
          <option v-for="author in authors"> {{author}}</option>
        </select>
        <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submited"><h3> Thanks for the submit</h3></div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: { title: "", content: "", categories: [] ,author:''},
      authors: ['volkan','memed'],
      submited: false
    };
  },
  methods:{
    post:function () {
      this.blog.timestamp = {  
       '.sv':"timestamp"
      }
      console.log(this.blog);
      this.$http.post('https://blogs-a90d5.firebaseio.com/post.json', this.blog).then((data)=>{
        if(data.ok){
          this.submited = true;
        }
      })
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-left: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
