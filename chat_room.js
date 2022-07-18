
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD3jF5xrRrpsSp4L2QHUvNEuQQRwx_3BE4",
  authDomain: "let-s-chat-web-appp.firebaseapp.com",
  projectId: "let-s-chat-web-appp",
  storageBucket: "let-s-chat-web-appp.appspot.com",
  messagingSenderId: "353756335473",
  appId: "1:353756335473:web:18348a90ec2f0518533ad0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome"+user_name1+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "chat_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
