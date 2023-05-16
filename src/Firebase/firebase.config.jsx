// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import.meta.env.Vite_apiKey,
// "AIzaSyCvJPMnc02K0jyb3Z2RrC-JaUHZyZlxrTc"
// "AIzaSyCvJPMnc02K0jyb3Z2RrC-JaUHZyZlxrTc"
// "AIzaSyCvJPMnc02K0jyb3Z2RrC-JaUHZyZlxrTc"
// Vite_authDomain
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.Vite_authDomain,
  projectId:import.meta.env.Vite_projectId,
  storageBucket:import.meta.env.Vite_storageBucket ,
  messagingSenderId:import.meta.env.Vite_messagingSenderId,
  appId:import.meta.env.Vite_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app