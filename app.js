new Vue({
	el: '#vue-app',
	data: {
		a: 1,
		b:0,
		age: 20
	},
	methods: {
	},
	computed:{
		atoAge: function () {
			return this.age+this.a
		},
		btoAge: function () {
			return this.age + this.b
		}
	}
});
