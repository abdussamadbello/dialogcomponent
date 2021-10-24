import dialog from './dialog.js'

//initialize Box
let newbox = new dialog('Are you sure you want to continue?’', 'yes', 'no')



// Get the modal
let dialogBox = document.getElementById("dialogbox");

// Get the button that opens the modal
let dialogButton = document.getElementById("dialogButton");

let span = document.getElementById("close");

//set Box with varibles
function setDialogBox(dialogBox) {

  document.getElementById("dialogMessage").innerHTML = dialogBox.message;

  document.getElementById("confirmBtn").innerText = dialogBox.confirm;

  document.getElementById("cancelBtn").innerText = dialogBox.cancel;

}



//Clear Box with varibles
function clearDialogBox() {

  document.getElementById("dialogMessage").innerHTML = ""

  document.getElementById("confirmBtn").innerText = ""

  document.getElementById("cancelBtn").innerText = "";

  dialogBox.style.display = "none";

}



//Initialize box with dialog Class
setDialogBox(newbox)


// When the user clicks the button, open the modal 
dialogButton.onclick = function () {
  document.getElementById("notficationContent")
    .innerHTML =''
  dialogBox.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  dialogBox.style.display = "none";
}

//set button variables
let confirmBtn = document.getElementById("confirmBtn")

let cancelBtn = document.getElementById("cancelBtn")

// set Onclick listeners
confirmBtn.onclick = function () { notify(newbox, confirmBtn.innerText) };

cancelBtn.onclick = function () { notify(newbox, cancelBtn.innerText) };


//append message

function notify(dialog, button) {

  document.getElementById("notficationContent")
    .innerHTML = `<p> ${dialog.notification(button)}</p>`

    dialogBox.style.display = "none";
}

