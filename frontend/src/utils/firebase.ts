// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppDispatch } from "../redux/slices/store";
import { getUserSuccess } from "../redux/slices/userSlice";
import { User } from "../typings";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0gAEhqsm618DOGDMBAO19cgAGNUs4mmY",
  authDomain: "otogmn.firebaseapp.com",
  projectId: "otogmn",
  storageBucket: "otogmn.appspot.com",
  messagingSenderId: "540609158635",
  appId: "1:540609158635:web:ba017af84360d81629cdae",
  measurementId: "G-YNZ7N9NQ8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signinWithGoogle = (dispatch:AppDispatch) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user:User= {
        name:result.user.displayName!,
        id:result.user.uid,
        phone:result.user.phoneNumber!,
        email:result.user.email!,
        accessToken:result.user.refreshToken
      }

      dispatch(getUserSuccess(user))
    })
    .catch((err) => {
      alert(err);
    });
};
