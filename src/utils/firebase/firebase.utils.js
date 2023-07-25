import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

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
export default db;

const girlsGradesRef = collection(db, "Grades");
export const getGirlDoc = async ({ name, seatNum }) => {
  try {
    const gradesRef = doc(girlsGradesRef, `Girl ${seatNum}`);
    const gradesSnapShot = await getDoc(gradesRef);
    if (!gradesSnapShot.exists())
      return { errorText: "لا يوجد مثل رقم الجلوس هذا " };
    return gradesSnapShot.data();
  } catch (err) {
    if (err.message === "Failed to get document because the client is offline.")
      return { errorText: "رجاءا الاتصال بالانترنت والعوده مره اخري" };
    console.error(err);
  }
};
