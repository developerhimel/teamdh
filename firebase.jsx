import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCgQH3lHt24gTTM0maDpMfmuCNS1avBrjk",
  authDomain: "ds-topup.firebaseapp.com",
  projectId: "ds-topup",
  storageBucket: "ds-topup.appspot.com",
  messagingSenderId: "743908522803",
  appId: "1:743908522803:web:2e7b7cb978ab3b9378dc46",
  measurementId: "G-720FKFH72W",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
