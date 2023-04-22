import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAYhuvGk4jyyQUfCpsos8XmqTHqyldhvSI",
  authDomain: "protofood-51600.firebaseapp.com",
  projectId: "protofood-51600",
  storageBucket: "protofood-51600.appspot.com",
  messagingSenderId: "1092457020865",
  appId: "1:1092457020865:web:402c564bcb9a29489fc340"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
