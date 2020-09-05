let one = new Vue({
	el: '#vue-app-one',
	data: {
		title: 'Vue App One'
	},
	methods: {
	},
	computed: {
		greet: function () {
			return 'from ' + this.title
		}
	}
});
let two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'Vue App Two'
	},
	methods: {
		changeTitle: function () {
			one.title = "title canged";
		}
	},
	computed: {
		greet: function () {
			return 'from '+ this.title
		}
	}
});
two.title = "changed from outside"
