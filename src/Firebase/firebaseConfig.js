
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCaH7nq_hYtvjJq6RcJQPPoGCICefZ2sRc",
    authDomain: "bd-mart-redux.firebaseapp.com",
    projectId: "bd-mart-redux",
    storageBucket: "bd-mart-redux.appspot.com",
    messagingSenderId: "259852189443",
    appId: "1:259852189443:web:4e04f71d0fbd91130d7336"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;