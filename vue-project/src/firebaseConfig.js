// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB05Vc2GoC5Cy8-y3b9Bb7nZ1ycR3x-Ots",
    authDomain: "digital-marketing-779e0.firebaseapp.com",
    projectId: "digital-marketing-779e0",
    storageBucket: "digital-marketing-779e0.appspot.com",
    messagingSenderId: "234079952279",
    appId: "1:234079952279:web:8dc06295fa8a82d48578d2",
    measurementId: "G-L0D90ZLN01"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase