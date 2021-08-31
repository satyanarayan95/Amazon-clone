import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBO1gPnymaRyHFaeUpgN2gnsILzdDZmHx0",
    authDomain: "amzn-nextjs-c147b.firebaseapp.com",
    projectId: "amzn-nextjs-c147b",
    storageBucket: "amzn-nextjs-c147b.appspot.com",
    messagingSenderId: "828082633901",
    appId: "1:828082633901:web:bb7f77488d22f5c2509a24"
  };

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db=app.firestore();

  export default db;