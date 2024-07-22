// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx_6oEeu5tiUNXzYIV3IlHBxtjIg5lQH4",
  authDomain: "umarsalman-portfolio.firebaseapp.com",
  projectId: "umarsalman-portfolio",
  storageBucket: "umarsalman-portfolio.appspot.com",
  messagingSenderId: "995688831031",
  appId: "1:995688831031:web:4c9b9da5fa57a3014907b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };