// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKsTLl7I78i08ZF2mPCLszJQinZKnHW9I",
  authDomain: "salem-vintage.firebaseapp.com",
  projectId: "salem-vintage",
  storageBucket: "salem-vintage.appspot.com",
  messagingSenderId: "723171531919",
  appId: "1:723171531919:web:2fb12b10935143da3ae4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db