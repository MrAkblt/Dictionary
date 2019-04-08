import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		token : "",
		//loggedIn: false,
  },

  mutations: {
		login(state, email){
			//state.loggedIn = true;
			localStorage.setItem('email',email)
		},
		logout(state){
			//state.loggedIn = false;
			localStorage.removeItem('email')
		}
  },

  actions: {
		signUp(){
			firebase.auth().createWithEmailAndPassword(email, password)
			.then(() => router.push('/login'))
			.catch((error) => alert(error.message))
		},
		signIn({commit, dispatch, state}, {email, password}){
			firebase.auth().signInWithEmailAndPassword(email, password) 
      .then((Info) => {
				commit('login', Info.user.email)
				router.push('/')
			})  
      .catch((error) => alert(error.message)) 
		},
		signOut({commit, dispatch, state}){
			firebase.auth().signOut()
			.then(() => {
				commit('logout');
				router.push('/login')
			})
			.catch((error) => alert(error.message))
		}
  }
})  	
    	
    	
    	
