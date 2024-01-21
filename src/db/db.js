import { initializeApp } from "firebase/app";
import { disableNetwork, disablePersistentCacheIndexAutoCreation, getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCXizcFBmxSbr9evcvtJ0JUH0sDMd51jss",
    authDomain: "e-commerce-reactjs-f52a9.firebaseapp.com",
    projectId: "e-commerce-reactjs-f52a9",
    storageBucket: "e-commerce-reactjs-f52a9.appspot.com",
    messagingSenderId: "718445265929",
    appId: "1:718445265929:web:b5527b06c2489d1979e4d8"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db