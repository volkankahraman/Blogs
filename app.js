new Vue({
	el: '#vue-app',
	data: {
		error: false,
		success: false
	},
	methods: {
	},
	computed: {
		compClasses: function () {
			return {
				red: this.red,
				blue: this.blue
			}
		}
	}
});
