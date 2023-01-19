
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyC08-TP13yRF-KT-WUkxVFIf5vEf-auRCE",
    authDomain: "rn-clarita-app.firebaseapp.com",
    projectId: "rn-clarita-app",
    storageBucket: "rn-clarita-app.appspot.com",
    messagingSenderId: "192012543956",
    appId: "1:192012543956:web:95aeeb9f93d00ffd391841",
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase