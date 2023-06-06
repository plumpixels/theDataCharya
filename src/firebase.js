import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgeZHVbHspPQ-QbAZqRIAfLav6vlswUyg",
  authDomain: "thedatacharya-2710.firebaseapp.com",
  projectId: "thedatacharya-2710",
  storageBucket: "thedatacharya-2710.appspot.com",
  messagingSenderId: "424850956901",
  appId: "1:424850956901:web:b1b8463f085711c6cfdc8c",
  measurementId: "G-RBHWJZTC8R"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Access the authentication module
const auth = getAuth(app);

export { app, auth };
