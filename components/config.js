import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCB8h1Atbzn6Vnh50djvkCT4k6f23X0ufw",
  authDomain: "stepedu-d3e25.firebaseapp.com",
  projectId: "stepedu-d3e25",
  storageBucket: "stepedu-d3e25.appspot.com",
  messagingSenderId: "857325433124",
  appId: "1:857325433124:web:c0787903606d7e2efc43b1",
  measurementId: "G-2CC9XNLMCZ"
};


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage();
// export const db=getFirestore(app);
  firebase.initializeApp(firebaseConfig)

if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig)
}
export const auth=getAuth();

export {firebase};