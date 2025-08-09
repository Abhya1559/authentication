import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqa5_KqsOOQgBmo7KGAZe9DG-UDCsH0eM",
  authDomain: "authentication-72d34.firebaseapp.com",
  projectId: "authentication-72d34",
  storageBucket: "authentication-72d34.firebasestorage.app",
  messagingSenderId: "861144281925",
  appId: "1:861144281925:web:ca317da88d3ea45281042c",
  measurementId: "G-EKLLE658CX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
