// var firebaseConfig = {
//     apiKey: "AIzaSyAdg1CWCCX2VuRDQuOxSwSUrQws-IIitGc",
//     authDomain: "hunters-homework-project.firebaseapp.com",
//     databaseURL: "https://hunters-homework-project.firebaseio.com",
//     projectId: "hunters-homework-project",
//     storageBucket: "",
//     messagingSenderId: "923461931032",
//     appId: "1:923461931032:web:db1ca4532f7e9e2a"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   let database = firebase.database();
//   let clickNumber = 0;


//   $("#test").on("click", function () {
//       clickNumber++;

//       database.ref().set({
//           clickCounter: clickNumber
//       });
//   });