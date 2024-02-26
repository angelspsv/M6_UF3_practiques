//camps: nom, email, password, repassword, address
let form = document.getElementById('registroForm');
let nomInput = document.getElementById('nom');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

//funció per validar l'entrada de nom
function validarNom(){
  let nomValue = nomInput.value.trim();
  if (nomValue == ''){
    nomError(nomInput, 'El nom no pot estar buit');
  } else {
    nomCorrecte(nomInput);
  }
}

//funció per validar l'entrada de email
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
     return true;
  }else{
     return false;
  }
}

function validarMail(){
  let validacioMail = validateEmail(emailInput);
  if (validacioMail){
    mailCorrecte(emailInput);
  } else {
    mailError(emailInput, 'El correu és incorrecte');
  }
}

function validaContrasenya(){
  //per obtenir el valor del camp password i eliminar si hi ha camps en blanc
  let passwordValue = passwordInput.value.trim();
  let passwordLength = passwordValue.length;
  let passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[A-Za-z\d@$!%*?&]/.test(passwordValue);
  if ((passwordLength > 7 && passwordLength < 16) && (passwd)){
    passwdCorrecte(passwordInput);
  } else {
    passwdError(passwordInput, 'Contrasenya invàlida')
  }
}


    
function nomError(entrada, message) {
  entrada.nextElementSibling.innerText = message;
  entrada.classList.add('error');
}  

function mailError(entrada, message) {
  entrada.nextElementSibling.innerText = message;
  entrada.classList.add('error');
}

function passwdError(entrada, message) {
  entrada.nextElementSibling.innerText = message;
  entrada.classList.add('error');
}

function nomCorrecte(entrada) {
  entrada.nextElementSibling.innerText = '';
  entrada.classList.remove('error');
  entrada.classList.add('success');
}

function mailCorrecte(entrada) {
  entrada.nextElementSibling.innerText = '';
  entrada.classList.remove('error');
  entrada.classList.add('success');
}

function passwdCorrecte(entrada) {
  entrada.nextElementSibling.innerText = '';
  entrada.classList.remove('error');
  entrada.classList.add('success');
}

nomInput.addEventListener('focusout', validarNom);
emailInput.addEventListener('focusout', validarMail);
passwordInput.addEventListener('focusout', validaContrasenya);
    

form.addEventListener('submit', function(event) {
// Evita l'enviament del formulari per defecte
  event.preventDefault(); 
  // Validar tots els camps novament abans de l'enviar al servidor
  validarNom();
  validarMail();
  validaContrasenya();
        

  // Si tot es valid s'envia
  if (!nomInput.classList.contains('error') && !emailInput.classList.contains('error') && !passwordInput.classList.contains('error')) {
    console.log('Formulario válido. Enviar datos al servidor...');
  }
});