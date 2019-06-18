import firebase from 'firebase'

var firebaseConfig = {
      apiKey: "AIzaSyDhMx3hMGaiQdoq2ssctr2-CGiEW99T85c",
      authDomain: "meal-2c7e0.firebaseapp.com",
      databaseURL: "https://meal-2c7e0.firebaseio.com",
      projectId: "meal-2c7e0",
      storageBucket: "meal-2c7e0.appspot.com",
      messagingSenderId: "447004561733",
      appId: "1:447004561733:web:7f973f33c4f358e0"
    
}

firebase.initializeApp(firebaseConfig)
export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()


