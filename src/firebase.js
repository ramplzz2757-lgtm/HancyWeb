import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgtjn3_CA2xJ9txspoHVUrTy_GFdRtTxU",
  authDomain: "hancy-cfd13.firebaseapp.com",
  projectId: "hancy-cfd13",
  storageBucket: "hancy-cfd13.firebasestorage.app",
  messagingSenderId: "160346760774",
  appId: "1:160346760774:web:991bd83d4ce9c852a0cc47",
  measurementId: "G-19QX835CTS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };