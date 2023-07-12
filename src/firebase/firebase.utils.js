import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCBwUuqEh0nU0S6aWnFFuVmLh7l6SYf-bU",
    authDomain: "website-db-5fb29.firebaseapp.com",
    projectId: "website-db-5fb29",
    storageBucket: "website-db-5fb29.appspot.com",
    messagingSenderId: "999894083337",
    appId: "1:999894083337:web:b8456093ea975c018a95d8",
    measurementId: "G-929TYLGEVL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }
        catch(error){
            console.log("There is an error",error);            
        }
    }

    return userRef;

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;