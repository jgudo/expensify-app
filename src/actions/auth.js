import {firebase, auth, ref, googleAuthProvider, facebookAuthProvider, githubAuthProvider} from '../firebase/firebase';

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
    firebase.auth().signInWithPopup(facebookAuthProvider).then(() => {
        console.log('Signin succesful');
    }).catch((err) => {
        alert(err);
    });
};

export const startLoginWithGithub = () => {
    firebase.auth().signInWithPopup(githubAuthProvider).then(() => {
        console.log('Signin succesful');
    }).catch((err) => {
        alert(err);
    });
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};