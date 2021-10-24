import dialog from './dialog.js'

let mbox = new dialog('Are you sure you want to continue?’'
  , 'yes', 'no')

mbox.notification('yes')


// Get the modal
let modal = document.getElementById("dialogbox");

// Get the button that opens the modal
let btn = document.getElementById("dialogButton");

let span = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
