// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, onValue, ref} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8XcOFoEO316aLCDMdS_H4ZsvfD7DF4zM",
  authDomain: "pokemon-calculator-43ebf.firebaseapp.com",
  databaseURL: "https://pokemon-calculator-43ebf-default-rtdb.firebaseio.com",
  projectId: "pokemon-calculator-43ebf",
  storageBucket: "pokemon-calculator-43ebf.appspot.com",
  messagingSenderId: "616265565921",
  appId: "1:616265565921:web:cc13f79331daa0b79199a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()




export const signInWithGoogle = () => {
   signInWithPopup(auth, provider)
      .then((result) => {
         const name = result.user.displayName;
         const email = result.user.email;
         const profilePic = result.user.photoURL;
         const uid = result.user.uid
         console.log(result.user.proactiveRefresh.user.auth.app)
         
         localStorage.setItem("name", name)
         localStorage.setItem("email", email)
         localStorage.setItem("profilePic", profilePic)
         document.getElementById("login").style.display = "none";
         document.getElementById("loggedin").style.display = "flex";
         localStorage.setItem("uid", uid)
      }).then(() => {
         const db = getDatabase()
         const infoRef = ref(db, 'users/' + localStorage.getItem("uid") + '/teams');
         onValue(infoRef, (snapshot) => {
            const data = snapshot.val();
            if(!data.team1 ? localStorage.removeItem("team1") : localStorage.setItem("team1", JSON.stringify(data.team1)));
            if(!data.team2 ? localStorage.removeItem("team2") : localStorage.setItem("team2", JSON.stringify(data.team2)));
            if(!data.team3 ? localStorage.removeItem("team3") : localStorage.setItem("team3", JSON.stringify(data.team3)));
            if(!data.team4 ? localStorage.removeItem("team4") : localStorage.setItem("team4", JSON.stringify(data.team4)));
            if(!data.team5 ? localStorage.removeItem("team5") : localStorage.setItem("team5", JSON.stringify(data.team5)));
            if(!data.team6 ? localStorage.removeItem("team6") : localStorage.setItem("team6", JSON.stringify(data.team6)));           
       })
      })
      .catch((error) => {
         console.log(error)
      })
}

