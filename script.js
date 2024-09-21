firebase.initializeApp({
  apiKey: 'AIzaSyBIrOPXXekMWli0y-0NvQ5KmWQ2kssJrNw',
  authDomain: 'data-b738a.firebaseapp.com',
  databaseURL: 'https://data-b738a-default-rtdb.firebaseio.com',
  projectId: 'data-b738a',
  storageBucket: 'data-b738a.appspot.com',
  messagingSenderId: '390422282553',
});

var database = firebase.database();

var form = document.getElementById('contactForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var studIdInput = document.getElementById('studId');
var msgContentInput = document.getElementById('MsgContent');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = nameInput.value;
  var email = emailInput.value;
  var studId = studIdInput.value;
  var msgContent = msgContentInput.value;

  var timestamp = new Date().toLocaleString();
  
  var newData = {
    name: name,
    email: email,
    studId: studId,
    msgContent: msgContent,
    timestamp: timestamp,
  };

  database.ref('messages').push(newData);

  document.querySelector('.alert').innerHTML = 'Your message has been sent!';
  document.querySelector('.alert').style.display = 'block';
  form.reset()
});

document.getElementById('open-btn').addEventListener('click', function() {
  document.getElementById('contact-container').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('contact-container').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

var images = [
            'sam.jpg', // Replace with your first image path
            'download.jfif',
            'Robin.jpg',
            'stellfly.png',
            'animation.gif'
        ];

        // Current image index
        var currentIndex = 0;

        // Function to change background image every 20 seconds
        function changeBackground() {
            currentIndex = (currentIndex + 1) % images.length; // Cycle through the images array
            document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        }

        // Call changeBackground function every 20 seconds (20000 milliseconds)
        setInterval(changeBackground, 10000);
