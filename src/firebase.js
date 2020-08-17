import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjoec9RwlQMyQE3ksNEgkRlHK8M625dRc",
    authDomain: "slack-clone-edf18.firebaseapp.com",
    databaseURL: "https://slack-clone-edf18.firebaseio.com",
    projectId: "slack-clone-edf18",
    storageBucket: "slack-clone-edf18.appspot.com",
    messagingSenderId: "931720118894",
    appId: "1:931720118894:web:afeae3b3f67e874a5d9c7f",
    measurementId: "G-C3RHR2B6ZM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;