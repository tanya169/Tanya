
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCAfJX3FLKSdveeaI1psl-lTrSoPowqYZg",
    authDomain: "project-94-e4230.firebaseapp.com",
    projectId: "project-94-e4230",
    storageBucket: "project-94-e4230.appspot.com",
    messagingSenderId: "619225745541",
    appId: "1:619225745541:web:57f2fb4dc51e4da23801ec",
    measurementId: "G-5GQC0SXR8B"
  };
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}