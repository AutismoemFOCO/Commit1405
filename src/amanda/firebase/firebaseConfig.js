import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Importar o getAnalytics se você precisar usar o Google Analytics
// import { getAnalytics } from "firebase/analytics"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDrX6of1-zwrkKhVn_BgvpuI60B-on1NXU",
  authDomain: "tcc-tristeza.firebaseapp.com",
  projectId: "tcc-tristeza",
  storageBucket: "tcc-tristeza.appspot.com",
  messagingSenderId: "759063625741",
  appId: "1:759063625741:web:72023f05d5f84155791544",
  measurementId: "G-75H494NQP2" // Opcional, se você usar o Google Analytics
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém instâncias dos serviços do Firebase
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app); // Use se precisar de Google Analytics
const storage = getStorage();
// Exporta as instâncias dos serviços para uso em outros arquivos
export { auth, db }; // export { auth, db, analytics }; se usar o analytics
