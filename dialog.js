export default class DialogBox {

  constructor(message,confirm,cancel){
  this.message=message
  this.confirm=confirm
  this.cancel=cancel
  }

  notification(button){
   let clickedButton = (button==this.confirm)?this.confirm:this.cancel
    return `You just clicked ${clickedButton}`
  }

  
}