const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyBbbVxbYovm9y89nFZbbMPTL4TygadG4pA',
    authDomain: 'ainaa-a27c5.firebaseapp.com',
    projectId: 'ainaa-a27c5'
  });
  
  var db = firebase.firestore();

  

var init = function(){
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

export default db