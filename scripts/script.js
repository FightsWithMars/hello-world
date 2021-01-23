let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/marsclick.jpg') {
      myImage.setAttribute('src','images/marsclick.jpg');
    } else {
      myImage.setAttribute('src','images/marsclick.jpg');
    }
}