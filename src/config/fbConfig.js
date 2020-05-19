import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDBM5PZsX7fr2ZThC8jbCUsauZGxz1C7s8",
  authDomain: "react-redux-firebase-7519f.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-7519f.firebaseio.com",
  projectId: "react-redux-firebase-7519f",
  storageBucket: "react-redux-firebase-7519f.appspot.com",
  messagingSenderId: "476084195703",
  appId: "1:476084195703:web:b97e37d9b2b464e9709172",
  measurementId: "G-CE71VR3V9Y",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
