// Initialize Firebase
var config = {
  apiKey: "AIzaSyA8XDbWdJVorGF9now8AaGRftV8M1RZcJE",
  authDomain: "louie-s-room.firebaseapp.com",
  databaseURL: "https://louie-s-room.firebaseio.com",
  projectId: "louie-s-room",
  storageBucket: "louie-s-room.appspot.com",
  messagingSenderId: "352664840636"
};
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var Main_Light_Status;

  database.ref().on("value", function(snap){
    Main_Light_Status = snap.val().Main_Light_Status;
    if(Main_Light_Status == 1){
      $(".Main_Light_Status").text("The light is on");
    } else {
      $(".Main_Light_Status").text("The light is off");
    }
  });

  $(".Main_Light_Btn").click(function(){
    var firebaseRef = firebase.database().ref().child("Main_Light_Status");

    if(Main_Light_Status == 1){
      firebaseRef.set(0);
      Main_Light_Status = 0;
    } else {
      firebaseRef.set(1);
      Main_Light_Status = 1;
    }
  });
});
