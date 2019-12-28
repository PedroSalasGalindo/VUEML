import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import { firestorePlugin } from 'vuefire'
import router from './routes/index'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA6vgUhMKMvhy2jR07iAWJA5BzGz9jvF_A",
  authDomain: "fabrica-memes-9e8ee.firebaseapp.com",
  databaseURL: "https://fabrica-memes-9e8ee.firebaseio.com",
  projectId: "fabrica-memes-9e8ee",
  storageBucket: "fabrica-memes-9e8ee.appspot.com",
  messagingSenderId: "765795144966",
  appId: "1:765795144966:web:ec9e7ad0dcc7940f17fa87"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore()
export const storage = firebaseApp.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
