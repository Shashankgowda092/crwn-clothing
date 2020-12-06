import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyAK4c-GCFlQX8PhN9ZnjyRFdm_aQoeIobA",
        authDomain: "crwn-db-cfc5e.firebaseapp.com",
        projectId: "crwn-db-cfc5e",
        storageBucket: "crwn-db-cfc5e.appspot.com",
        messagingSenderId: "813871002535",
        appId: "1:813871002535:web:755cb690ca43e3cce1fc82",
        measurementId: "G-05SE885ZSR"
      
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;