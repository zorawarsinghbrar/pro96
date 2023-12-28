//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBygoMMHvYldDEQox1lQSSxBeCcvxf-WYM",
      authDomain: "kwitter-c8bae.firebaseapp.com",
      databaseURL: "https://kwitter-c8bae-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8bae",
      storageBucket: "kwitter-c8bae.appspot.com",
      messagingSenderId: "775922641944",
      appId: "1:775922641944:web:98684039a153b54dcce76d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }
