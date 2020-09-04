new Vue({
	el: '#vue-app',
	data: {
		name: 'Volkan',
		job: 'Hacker',
		age: 22,
		x:0,
		y:0
	},
	methods: {
		logName: function () {
			console.log("log name");
		},
		logAge: function () {
			console.log("log age");
		},
	}
});
