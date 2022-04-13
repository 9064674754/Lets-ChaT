var firebaseConfig = {
    apiKey: "AIzaSyBgD03QD38gCrWznPPO7KTIZrKuyYbrwYI",
    authDomain: "c94whitehat.firebaseapp.com",
    databaseURL: "https://c94whitehat-default-rtdb.firebaseio.com",
    projectId: "c94whitehat",
    storageBucket: "c94whitehat.appspot.com",
    messagingSenderId: "1052748642159",
    appId: "1:1052748642159:web:387bfef8aa92910f145a9a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();