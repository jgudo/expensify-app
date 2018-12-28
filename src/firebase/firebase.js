import * as firebase from 'firebase';

const config = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export {firebase, facebookAuthProvider ,googleAuthProvider, database as default};
//child_remove event
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('item deleted: ',snapshot.key, snapshot.val());
// });

// //child_change event
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('item modified: ',snapshot.key, snapshot.val());
// });

// //child_added event 
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('item added: ',snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses =[]; 
//     snapshot.forEach( (childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (err) => {
//     console.log('Error', err);
// });

//array/list 
// database.ref('notes').push({
//     title: 'Gagu',
//     price: 244
// });

// database.ref('expenses').push({
//     description: 'Gagu ka ba',
//     amount: 2500,
//     note: 'some note',
//     createdAt: 35324
// });

// database.ref('expenses').push({
//     description: 'Tanga ka',
//     amount: 1500,
//     note: 'some note',
//     createdAt: 2135
// });

// database.ref('expenses').push({
//     description: 'Tarantado',
//     amount: 3000,
//     note: 'Just another note',
//     createdAt: 3522524
// });

// const valueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.age} and lives in ${val.location.province}`);
// });

//Listen for subscription/changes
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log(e);
// });

//database.ref().off(onValueChange) to cancel the subscription

// database.ref().once('value')
//     .then( (snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log(e);
//     });

// database.ref().set({
//     name: 'Julius Guevarra',
//     age: 22,
//     isSingle: true,
//     location: {
//         province: 'Pampanga',
//         municipality: 'San Luis'
//     }
// }).then(() => {
//     console.log('Data has been saved');
// }).catch((e) => {
//     console.log('Saving failed', e);
// });

// database.ref('isSingle').remove()
//     .then( () => {
//         console.log('Successfuly removed');
//     }).catch( (e) => {
//         console.log(e);
//     });

// database.ref().update({
//     name: 'Gagu',
//     attributes: null //removes attribute from database 
// });
// database.ref().update({
//     name: 'Tangna',
//     'location/province': 'Dito lang'
// });