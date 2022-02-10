import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
	apiKey: "AIzaSyBrnMP_IxaR-gxoHMTgfD30vAzdbCVmCNI",
	authDomain: "ecommerce---automationcatr.firebaseapp.com",
	projectId: "ecommerce---automationcatr",
	storageBucket: "ecommerce---automationcatr.appspot.com",
	messagingSenderId: "473164827651",
	appId: "1:473164827651:web:9e45be5cbdeb522afb5236"
};


const app = initializeApp(config);

/**
 * 
 * AUTHENTICATION
 * 
 */


export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	console.log('signing in')
	signInWithPopup(auth, provider)
	.then((result) => {
		// console.log(result)
	}).catch(err => console.log(err))
}

/**
 * 
 * CREATE USER DOC
 * 
 */

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, displayName) => {
	// console.log(userAuth)
	if (!userAuth) return;

	const docRef = doc(db, "users", userAuth.uid)
	const docSnap = await getDoc(docRef)
	let userRef
	if (docSnap.exists()) { 
		userRef = docSnap.data()
		// console.log(docSnap.data())
	} else {
		// console.log(userAuth.uid)
		userRef = {
			name: displayName,
			email: userAuth.email,
			uid: userAuth.uid,
			ts: new Date().getTime()
		}
		await setDoc(doc(db, "users", userAuth.uid), userRef)
	}

	return userRef;
}
