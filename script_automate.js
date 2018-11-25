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

window.onload = function(){
  var firebaseRef = firebase.database().ref().child("Main_Light_Status");
  
  if(Main_Light_Status == 1){
    firebaseRef.set(0);
    console.log("turned off");
    Main_Light_Status = 0;
  } else {
    firebaseRef.set(1);
    console.log("turned on");
    Main_Light_Status = 1;
  }
}

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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
