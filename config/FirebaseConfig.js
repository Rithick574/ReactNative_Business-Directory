import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPZObJQwXA9IjZyuRHeebm7814cKh4C5M",
  authDomain: "business-directory-fb369.firebaseapp.com",
  projectId: "business-directory-fb369",
  storageBucket: "business-directory-fb369.appspot.com",
  messagingSenderId: "497917450609",
  appId: "1:497917450609:web:cb53a244425343f2cc7ed0",
  measurementId: "G-GKH9EG53EN"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);