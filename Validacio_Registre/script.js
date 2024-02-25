
let form = document.getElementById('registroForm');
let nomInput = document.getElementById('nom');


function validarNom() {
  let nomValue = nomInput.value.trim();
  if (nomValue == '') {
    nomError(nomInput, 'El nom no pot estar buit');
  } else {
    nomCorrecte(nomInput);
  }
}

    
function nomError(entrada, message) {
  entrada.nextElementSibling.innerText = message;
  entrada.classList.add('error');
}
  

function nomCorrecte(entrada) {
  entrada.nextElementSibling.innerText = '';
  entrada.classList.remove('error');
  entrada.classList.add('success');
}

nomInput.addEventListener('focusout', validarNom);
    

form.addEventListener('submit', function(event) {
// Evita l'enviament del formulari per defecte
  event.preventDefault(); 
  // Validar tots els camps novament abans de l'enviar al servidor
  validarNom();
        

  // Si tot es valid s'envia
  if (!nomInput.classList.contains('error')) {
    console.log('Formulario válido. Enviar datos al servidor...');
  }
});