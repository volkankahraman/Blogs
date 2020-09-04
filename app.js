new Vue({
	el: '#vue-app',
	data: {
		red: false,
		blue: false
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
