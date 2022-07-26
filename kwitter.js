var firebaseConfig = {
  apiKey: "AIzaSyADYCsLXRr7mzY6f0QhZDXOl3fR_r-K_ZA",
  authDomain: "kwitter-d35f9.firebaseapp.com",
  databaseURL: "https://kwitter-d35f9-default-rtdb.firebaseio.com",
  projectId: "kwitter-d35f9",
  storageBucket: "kwitter-d35f9.appspot.com",
  messagingSenderId: "935120246904",
  appId: "1:935120246904:web:9dd1bce885fb206f7fb58d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

