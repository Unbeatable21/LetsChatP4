
var firebaseConfig = {
  apiKey: "AIzaSyCuIqYcVQpbGgD97qPUOv2zrBoquRKrhFU",
  authDomain: "letschat2-cf631.firebaseapp.com",
  databaseURL: "https://letschat2-cf631-default-rtdb.firebaseio.com",
  projectId: "letschat2-cf631",
  storageBucket: "letschat2-cf631.appspot.com",
  messagingSenderId: "129822640535",
  appId: "1:129822640535:web:7f8a1931e0c1f608c89cd2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "welcome " + user_name;
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name - " + Room_names); 
row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "page.html";
}

function Logout(){
  window.location = "index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}

