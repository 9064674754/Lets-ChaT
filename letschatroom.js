// Your web app's Firebase configuration
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

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
           console.log("room_name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();
function redirectToroomname(name){
     console.log(name);
     localStorage.setItem("Roomname",name);
     window.location = "letschatpage.html";
}
function logout() {
     localStorage.removeItem("Username");
     localStorage.removeItem("Roomname");
     window.location = "index.html";
}