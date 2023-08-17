// document.getElementById("loginForm").addEventListener("submit", (event)=>{
//     event.preventDefault()
// }
//     )

//     import { getAuth, onAuthStateChanged } from "firebase/auth";

//     const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     // const uid = user.uid;
//     location.replace("welcome.html")
//   }
//     // ...
// //    else {
// //     // User is signed out
// //     // ...
// //   }
// });

// function login(){
//   const email = document.getElementById("email").value
//   const password = document.getElementById("password").value
//   const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// }
