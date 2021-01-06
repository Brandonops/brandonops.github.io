let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/backgroundsky.jpg') {
      myImage.setAttribute('src','images/secondpic.jpg');
    } else {
      myImage.setAttribute('src','images/backgroundsky.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Nature is amazing, ${myName}`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nature is amazing, ' + storedName;
  }

  myButton.onclick = function() {
  setUserName();
}