<template>
  <div class="login">
		<input type="text" placeholder="English Word"><br/>
		<input type="text" placeholder="Turkish Word"><br/>
		<button @click="pushDB">ADD</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
					
			}
		},
		created(){
			
		},
		methods:{
			pushDB(){alert("asd")}
		}
	}
</script>
