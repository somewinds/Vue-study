
// https://segmentfault.com/a/1190000008010666?utm_source=tag-newest

let MyTest = {
	template: `
		<div>测试组件</div>
	`,
	// 对应父组件的 v-if else 就销毁当前组件
	beforeDestroy(){
		console.log('beforeDestroy')
	},
	destroyed(){
		console.log('destroyed')
	},
	beforeCreate(){
		console.log('beforeCreate')
	},
	created(){
		console.log('created')
	},
	activated(){
		console.log('组件激活')
	},
	deactivated(){
		console.log('组件停用')
	},
}

let App = {
	components: {
		MyTest
	},
	template: `
		<div>
			<input type="text" v-model="text" />
			{{ text }}

			<hr />
			<button @click="isShow=!isShow">测试销毁创建</button>

			<h4>
				频繁创建销毁组件不合理，
				进而引发出内部缓存组件 keep-alive，
				进而引发 activated激活/deactivated停用 生命周期
			</h4>

			<keep-alive>
				<my-test v-if="isShow"></my-test>
			</keep-alive>

			<br />
			测试激活：
			<my-test v-show="isShow" :key="2"></my-test>
		</div>
	`,
	data(){
		return {
			text: 'Hello World',
			isShow: true,
		}
	},
	/*beforeCreate(){
		console.log(this.text)
	},
	// created 可以操作数据，并且可以实现vue->html页面的影响，应用：发起ajax请求
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$el属性还不存在
	created(){
		console.log('created: $data: ' + this.text, '$el: ' + this.$el);
	},
	// beforeMount vue起作用，装载数据到DOM之前
	// 模板编译/挂载之前
	beforeMount(){
		console.log('beforeMount: $data: ' + this.text, '$el: ' + this.$el);
		// console.log(document.body.innerHTML);
	},
	// 模板编译/挂载之后
	mounted(){
		console.log('mounted: $data: ' + this.text, '$el: ' + this.$el);
		// console.log(document.body.innerHTML);
	},
	// beforeUpdate updated 更新数据后触发
	// beforeUpdate 可以获取原DOM
	// updated 可以获取新DOM
	beforeUpdate(){
		console.log('beforeUpdate: $data: ' + this.text, '$el: ' + this.$el);
	},
	updated(){
		console.log('updated: $data: ' + this.text, '$el: ' + this.$el);
	},*/

}

new Vue({
	el: '#app',
	components: {
		app: App
	},
	template: `<app/>`
})