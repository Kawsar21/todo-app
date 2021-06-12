import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAn-993PFHPFe2PWf3VhdlpIuKcILgFh2g",
        authDomain: "todo-app-e8075.firebaseapp.com",
        projectId: "todo-app-e8075",
        storageBucket: "todo-app-e8075.appspot.com",
        messagingSenderId: "600286407522",
        appId: "1:600286407522:web:cb008288bdcc4798535a3b"
});

const db = firebaseApp.firestore();

export default db;