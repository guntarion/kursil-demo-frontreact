import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = require('./firebase.json');
const auth0Config = require('./auth0.json');
const jwtConfig = require('./jwt.json');

// Firebase 
export const firebase_app = firebase.initializeApp({
  
    apiKey: firebaseConfig.firebase.apiKey,
    authDomain:firebaseConfig.firebase.authDomain,
    databaseURL: firebaseConfig.firebase.databaseURL,
    projectId: firebaseConfig.firebase.projectId,
    storageBucket: firebaseConfig.firebase.storageBucket,
    messagingSenderId: firebaseConfig.firebase.messagingSenderId,
    appId:firebaseConfig.firebase.appId

});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new  firebase.auth.TwitterAuthProvider();
export const githubProvider = new  firebase.auth.GithubAuthProvider();
export const db =  firebase.firestore();


// Auth0
export const auth0 = ({
    domain : auth0Config.auth0.domain,
    clientId : auth0Config.auth0.clientID,
    redirectUri : auth0Config.auth0.redirectUri
});

// Jwt
export const Jwt_token = jwtConfig.jwt_token;

    
