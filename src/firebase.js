import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7kaDeeIwvQBC0kEzFMN0RwSFn-G1kmD0",
  authDomain: "disneyplus-clone-7f82f.firebaseapp.com",
  projectId: "disneyplus-clone-7f82f",
  storageBucket: "disneyplus-clone-7f82f.appspot.com",
  messagingSenderId: "972639140479",
  appId: "1:972639140479:web:bf81a9e34c8bd19a921d4a"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;