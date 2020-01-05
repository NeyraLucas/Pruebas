const name = document.querySelector('#name');


name.addEventListener('click', ()=>{
    

    presentAlert();
})

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Verito';
    alert.subHeader = 'Te quiero';
    alert.message = 'Muchooooo!';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }