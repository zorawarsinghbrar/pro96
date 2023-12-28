

//ADD YOUR FIREBASE LINKS HERE
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
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"      
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "div class='room_name' id="+" onclick='redirectToRomName (this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
    }