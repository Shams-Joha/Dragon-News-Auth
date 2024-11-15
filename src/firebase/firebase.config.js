// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7X7ZRYJgfMrVBVgnpvlSizGZTLFrbmEg",
    authDomain: "dragon-news-5601c.firebaseapp.com",
    projectId: "dragon-news-5601c",
    storageBucket: "dragon-news-5601c.firebasestorage.app",
    messagingSenderId: "512389356124",
    appId: "1:512389356124:web:44fb8b73bb0355809b2499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;