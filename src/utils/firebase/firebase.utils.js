import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgr1SHjWxrJaYHptUfUNbpWzgQ9qosmd0",
  authDomain: "girls-grades.firebaseapp.com",
  projectId: "girls-grades",
  storageBucket: "girls-grades.appspot.com",
  messagingSenderId: "877992592731",
  appId: "1:877992592731:web:4041cf621e538adadf867e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db
