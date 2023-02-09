import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyBwDhh5GsN_0-USMFML0g5jg_njhWHatpM",
    authDomain: "react-firebase-55e8f.firebaseapp.com",
    projectId: "react-firebase-55e8f",
    storageBucket: "react-firebase-55e8f.appspot.com",
    messagingSenderId: "619248711772",
    appId: "1:619248711772:web:06ac4c5d7223cda2e70e99",
    measurementId: "G-LTG8RQZCE4"
  };

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)