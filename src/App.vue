<template>
  <v-app>
		<v-toolbar app height="40px" color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>My Dictionary</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat><router-link tag="span" to="/">Home</router-link></v-btn>
				<v-btn flat @click="logout">Logout</v-btn>
				<v-btn flat href="https://github.com/MrAkblt/Dictionary" target="_blank">
					<i class="fab fa-github fa-2x"></i>
				</v-btn>
			</v-toolbar-items>
    </v-toolbar>
    <v-content>
			<router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  },
	methods:{
		logout(){
			this.$store.dispatch('signOut');
		}
	}
}
</script>
