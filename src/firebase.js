// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgeZHVbHspPQ-QbAZqRIAfLav6vlswUyg",
  authDomain: "thedatacharya-2710.firebaseapp.com",
  projectId: "thedatacharya-2710",
  storageBucket: "thedatacharya-2710.appspot.com",
  messagingSenderId: "424850956901",
  appId: "1:424850956901:web:b1b8463f085711c6cfdc8c",
  measurementId: "G-RBHWJZTC8R"
};

const auth = getAuth();
const app = initializeApp(firebaseConfig);

export{app,auth};