// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js'
import {
  getAuth,
  GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyBPDcwFiVnri580RRDablcc5PMJX5ScHXc',
  authDomain: 'firstprojet-115b9.firebaseapp.com',
  projectId: 'firstprojet-115b9',
  storageBucket: 'firstprojet-115b9.appspot.com',
  messagingSenderId: '811112698943',
  appId: '1:811112698943:web:22c709904e3c9ba543148a',
  measurementId: 'G-V1704B7747'
}

// Inicializa o Firebase
const app = initializeApp(firebaseConfig)

// Exporta serviços do Firebase
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
