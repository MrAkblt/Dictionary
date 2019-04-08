<template>
  <HelloWorld />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    },
		beforeCreate(){
			// Eger giriş tokeni yoksa logine yönlendir.
		}
  }
</script>
