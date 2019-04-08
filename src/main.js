import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBmKvxmJgL53tx-cbk91Moc3QYrfxgMkb0",
	authDomain: "dictionary-17fb2.firebaseapp.com",
	databaseURL: "https://dictionary-17fb2.firebaseio.com",
	projectId: "dictionary-17fb2",
	storageBucket: "dictionary-17fb2.appspot.com",
	messagingSenderId: "507611795763"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
		localStorage.removeItem('email')
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
