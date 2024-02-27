// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0TbSgQGUF1cubJlo0uccVZ-AylZPZHLM",
  authDomain: "movieui-c4e72.firebaseapp.com",
  projectId: "movieui-c4e72",
  storageBucket: "movieui-c4e72.appspot.com",
  messagingSenderId: "601300221298",
  appId: "1:601300221298:web:f7afa083f4de208c6a31eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;