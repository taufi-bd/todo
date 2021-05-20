import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCgQ6o_A8MkB5FEMhvoPwZf58T4pkfe7A0",
  authDomain: "todo-app-49acf.firebaseapp.com",
  databaseURL: "https://todo-app-49acf-default-rtdb.firebaseio.com",
  projectId: "todo-app-49acf",
  storageBucket: "todo-app-49acf.appspot.com",
  messagingSenderId: "867079484075",
  appId: "1:867079484075:web:bd5ed576edcb63bbf07dee",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
