import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4M2UelhMjSpDoH0PcLzB7hkUWCX61w8I",
  authDomain: "learnerapp-4d229.firebaseapp.com",
  projectId: "learnerapp-4d229",
  storageBucket: "learnerapp-4d229.appspot.com",
  messagingSenderId: "188752737000",
  appId: "1:188752737000:web:a76d395a3275ef264c0f5d",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storeDB = firebase.firestore();
