
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNO4UlMSSuaqEsKMN1omRn_tASpuQJ62U",
    authDomain: "goapart-37e40.firebaseapp.com",
    databaseURL: "https://goapart-37e40.firebaseio.com",
    projectId: "goapart-37e40",
    storageBucket: "goapart-37e40.appspot.com",
    messagingSenderId: "515194413828",
    appId: "1:515194413828:web:19552017991ba1e620e651"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));

    alert("Signed Up");
    location = "home.html"
  }

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));

      alert("Signed In");
      location = "home.html"
  }

