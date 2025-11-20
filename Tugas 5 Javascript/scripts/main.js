var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gambar1.png') {
      myImage.setAttribute ('src','images/gambar2.png');
    } else {
      myImage.setAttribute ('src','images/gambar1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Chrome Or Thorium?, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Chrome Or Thorium?, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}