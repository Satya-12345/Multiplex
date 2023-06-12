import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEyOtwIaSg1RHitS3GKmv6HyAkHWvGPb8",
  authDomain: "software-bf897.firebaseapp.com",
  projectId: "software-bf897",
  storageBucket: "software-bf897.appspot.com",
  messagingSenderId: "778068301661",
  appId: "1:778068301661:web:37be5a563deb4eed637ab4",
  measurementId: "G-0PHKRS9EBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// initialize variables
const auth = firebase.auth()
const database = firebase.database() 

// set up your register function
class BoxButtonSignup {
  signup() {
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm password').value;

    // move on with auth
auth.createUserWithEmailAndPassword(email, password)
.then(function() {
  const user = auth.currentUser;
  // add this to firebase
  const database_ref = database.ref();
  // create user data
  const user_data = {
    email: email,
    contact: contact,
    username: username,
    password: password,
    last_login: Data.now()
  };
  database_ref.child('user/' + user.uid).set(user_data);
  alert('User created!!');
})
.catch(function(error) {
  // handle error here
});

}
}

// Create an instance of BoxButtonSignup
const boxButtonSignup = new BoxButtonSignup();

// Call the signup function when the button is clicked
document.querySelector(".boxButtonSignup").addEventListener("click", function () {
boxButtonSignup.signup();
});

function login(){
  email=document.getElementById('email').value
  password=document.getElementById('password').value

  auth.signInWithEmailAndPassword()
  .then(function(){

    var user = auth.currentUser

    var database_ref=database.ref()
    var user_data={
      last_login:Data.now()
    }

    database_ref.child('users/'+user.uid).update(user_data)

    alert('User logged in !!')
  })
  .catch(function(error){
    var error_code=error.error_code
    var error_message=error.message
    alert(error_code)
  })
}