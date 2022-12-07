import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCbUwFT6-otSsrqNtpmz_Oia4asHp_Z1fk",
  authDomain: "rides-7a2d8.firebaseapp.com",
  projectId: "rides-7a2d8",
  storageBucket: "rides-7a2d8.appspot.com",
  messagingSenderId: "483528280573",
  appId: "1:483528280573:web:f679b1acec310834ec7194"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);