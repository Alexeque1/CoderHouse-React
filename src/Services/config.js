import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeytGORUIwXJT6ULNVqYaVKBdUMnr06fE",
  authDomain: "coderhouse-alexanders.firebaseapp.com",
  projectId: "coderhouse-alexanders",
  storageBucket: "coderhouse-alexanders.appspot.com",
  messagingSenderId: "113650379604",
  appId: "1:113650379604:web:93279e38490252dc88b6c1",
  measurementId: "G-4H9ESBTB0R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)


  
