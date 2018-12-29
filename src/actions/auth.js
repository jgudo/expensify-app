import {firebase, auth, ref, googleAuthProvider, facebookAuthProvider} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    };
};

export const startLoginWithFacebook = () => {
    console.log('Fired');
    
     firebase.auth().signInWithPopup(facebookAuthProvider)
    
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};