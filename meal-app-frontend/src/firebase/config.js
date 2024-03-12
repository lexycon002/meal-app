import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuVJcfelb7qxbDCTDSlpCW5dRiYpZ7dNM",
  authDomain: "meal-app-db9d5.firebaseapp.com",
  projectId: "meal-app-db9d5",
  storageBucket: "meal-app-db9d5.appspot.com",
  messagingSenderId: "655898669453",
  appId: "1:655898669453:web:519417784f2f3c85474dc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;