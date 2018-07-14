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

$(document).ready(function() {
  var database = firebase.database();
  var Main_Switch_Status;

  databse.ref().on("value", function(snap) {
    Main_Switch_Status = snap.val().Main_Switch_Status;
    if(Main_Switch_Status == 1) {
      $(".Main_Switch_Status").text("ON");
    } else {
      $(".Main_Switch_Status").text("OFF");
    }
  })
});
