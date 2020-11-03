import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAYae-lLAjCiyBRtWBDSBJbjo-CwqOnsAk",
    authDomain: "crwn-db-2391e.firebaseapp.com",
    databaseURL: "https://crwn-db-2391e.firebaseio.com",
    projectId: "crwn-db-2391e",
    storageBucket: "crwn-db-2391e.appspot.com",
    messagingSenderId: "205601994552",
    appId: "1:205601994552:web:64994ef3216cf6978c73cd",
    measurementId: "G-5PE2F4EYZH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
