const pacients = document.querySelectorAll(".paciente");

for (let i = 0; i < pacients.length; i++) {
  const pacient = pacients[i];
  
  const peso = pacient.querySelector(".info-peso").textContent;
  const altura = pacient.querySelector(".info-altura").textContent;
  const tdImc = pacient.querySelector(".info-imc");

  let pesoValido = validarPeso(peso);
  let alturaValida = validarAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    pacient.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    pacient.classList.add("paciente-invalido");
  }
  
  if (pesoValido && alturaValida) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }

  function validarPeso(peso) {
    if(peso >= 40 && peso <= 250) {
      return true;
    } else {
      return false;
    }
  }

  function validarAltura(altura) {
    if (altura >= 1.00 && altura <= 3.00) {
      return true;       
    } else {
      return false;
    }
  }

}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
