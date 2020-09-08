export default {
    computed: {
        filteredBlogs: function () {
            return this.posts.filter((blog) => {
                return blog.title.includes(this.search);
            });
        }
    }
}