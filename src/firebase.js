import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArLF4xf4s22FW9R4jg7K_J-UJAjADTUG0",
    authDomain: "netflix-clone-1a41a.firebaseapp.com",
    projectId: "netflix-clone-1a41a",
    storageBucket: "netflix-clone-1a41a.appspot.com",
    messagingSenderId: "548539404935",
    appId: "1:548539404935:web:7fe55e1703dd5cb5a45e22"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth };
export default db;