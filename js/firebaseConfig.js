// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCimmToIygcPtrRH4OH7WLAiPO_wmlojNs",
  authDomain: "mercadito-2020.firebaseapp.com",
  databaseURL: "https://mercadito-2020.firebaseio.com",
  projectId: "mercadito-2020",
  storageBucket: "mercadito-2020.appspot.com",
  messagingSenderId: "504863942032",
  appId: "1:504863942032:web:37ee72c756d0429402ff15",
  measurementId: "G-NT2EFGHSL9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

firebase.analytics();

var app = document.getElementById('app');


//Observador
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
  }

});


//Funcion de registro
function registrar() {
  if (validarTodosCampos()) {

    var nombre = document.getElementById('inputNombre').value;
    var apellido = document.getElementById('inputApellido').value;
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;
    var telefono = document.getElementById('inputTelefono').value;
    //Validaciones propias de Firebase
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(function () {
        alert("Usuario registrado");

        db.collection("clientes").doc().set({
          nombre: nombre,
          apellido: apellido,
          email: email,
          telefono: telefono
        });
        // alert("Datos registrado");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (error.code == "auth/invalid-email") {
          alert("La dirección de correo electrónico no tiene el formato correcto.");
        }
        else if (error.code == "auth/weak-password") {
          alert("La contraseña debe tener 6 caracteres o mas.");
        }
        else if (error.code == "auth/email-already-in-use") {
          alert("La correo ya esta en uso.");
        }
        else {
          alert(errorCode);
        }
      });
  }
}

//Funcion cerrar sesion
function cerrarSesion() {
  firebase.auth().signOut()
    .then(function () {
      console.log('Salir');
      window.location="index.html";
     // mostrarCamposRegistro();
    })
    .catch(function (error) {
      //ocultarCamposRegistro();
      alert(error.message);
    })
}

//Funcion iniciar sesion
function iniciar(){
  var email = document.getElementById('inputEmailLogin').value;
  var pass = document.getElementById('inputPasswordLogin').value;
  if(validacionCorreoLogin()){
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(function () {
        // ocultarCamposRegistro();
        window.location="prueba.html";

      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // mostrarCamposRegistro();
        if (error.code == "auth/invalid-email") {
          console.log("La dirección de correo electrónico no tiene el formato correcto.");
        }
        else if (error.code == "auth/wrong-password") {
          console.log("Contraseña incorrecta.");
        }
        else {
          console.log(errorMessage);
        }
      });
  }
}

function mostrarCamposRegistro() {
  $("#campos-login").show();
  $("#login").hide();
}

function ocultarCamposRegistro() {
  $("#campos-login").hide();
  $("#login").show();
}