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

  function Logout(){
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  }

  function Send(){
    function Send(){
        msg = document.getElementById("msg").value = "";
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
  }
  }