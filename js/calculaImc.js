const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];
  
  const peso = paciente.querySelector(".info-peso").textContent;
  const altura = paciente.querySelector(".info-altura").textContent;
  const tdImc = paciente.querySelector(".info-imc");

  let pesoValido = validarPeso(peso);
  let alturaValida = validarAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
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