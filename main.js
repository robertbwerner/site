// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzYFtxKf8oLELt4v0u0T2jaT9jzS95Xho",
    authDomain: "contactform-647b2.firebaseapp.com",
    databaseURL: "https://contactform-647b2.firebaseio.com",
    projectId: "contactform-647b2",
    storageBucket: "contactform-647b2.appspot.com",
    messagingSenderId: "748354213618",
    appId: "1:748354213618:web:bdd54c3fef7b5b6206a26b",
    measurementId: "G-FK410RLXRJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
	e.preventDefault();

//get values
var name = getInputVal('name');
var email = getInputVal('email');
var message = getInputVal('message');

//save message
saveMessage(name,email,message);
//show alert
document.querySelector('.alert').style.display = 'block';
//hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);

//clear form
document.getElementById('contactform').reset();
}
//function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

//save messages to firebase
function saveMessage(name,email,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name:name,
		email:email,
		message:message
	});
}