import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey:  'AIzaSyB7N5z5RzHFsjoXxck8pxKy8VaIgV2g6Iw',
  authDomain: "react-firebase-auth-demo87.firebaseapp.com",
  databaseURL: 'https://react-firebase-auth-demo87.firebaseio.com/',
  projectId: 'react-firebase-auth-demo87',
  storageBucket: "react-firebase-auth-demo87.appspot.com",
  messagingSenderId: "1022443316340",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

 // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;