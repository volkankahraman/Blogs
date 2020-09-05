Vue.component('greeting',{
	template: '<p> hello there i am {{name}} <button @click="changeName">change</button></p>',
	data: function () {
		return{
			name:'Yoshi'
		}
	},
	methods:{
		changeName: function () {
			this.name = 'Mario'
		}
	}
})

new Vue({
	el: '#vue-app-one',
});
new Vue({
	el: '#vue-app-two',
});
