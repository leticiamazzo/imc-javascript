const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  const form = document.querySelector("#form-adiciona");

  const paciente = obterPaciente(form);
  
  const trPaciente = criarTr(paciente);

  if (!validarPaciente(paciente)) {
    paciente.peso.textContent = "Peso inválido";
    console.log("peso inválido");
    return;
  }

  const tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(trPaciente);

  form.reset();
});

function obterPaciente(form) {
  const dadosNovoPaciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value ,
    gordura: form.gordura.value ,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  
  return dadosNovoPaciente;
}

function criarTr(paciente) {
  const novoPaciente = document.createElement("tr");
  novoPaciente.classList.add("paciente");

  novoPaciente.appendChild(criarTd(paciente.nome, "info-nome"));
  novoPaciente.appendChild(criarTd(paciente.peso, "info-peso"));
  novoPaciente.appendChild(criarTd(paciente.altura, "info-altura"));
  novoPaciente.appendChild(criarTd(paciente.gordura, "info-gordura"));
  novoPaciente.appendChild(criarTd(paciente.imc, "info-imc"));

  return novoPaciente;
}

function criarTd(dado, classe) {
  const novoDado = document.createElement("td");
  novoDado.textContent = dado;
  novoDado.classList.add(classe)

  return novoDado;  
}

function validarPaciente(paciente) {
  if(validarPeso(paciente.peso)) {
    return true;
  } else {
    return false;
  }
}


//  ANTES DA REFATORAÇÃO
// botaoAdicionar.addEventListener("click", function(event) {
//   event.preventDefault();

//   const form = document.querySelector("form");

//   const nome = form.nome.value;
//   const peso = form.peso.value;
//   const altura = form.altura.value;
//   const gordura = form.gordura.value;
//   const imc = (peso / (altura * altura)).toFixed(2);

//   const novoPaciente = document.createElement("tr");

//   const novoNome = document.createElement("td");
//   const novoPeso = document.createElement("td");
//   const novaAltura = document.createElement("td");
//   const novaGordura = document.createElement("td");
//   const novoImc = document.createElement("td");

//   novoNome.textContent = nome;
//   novoPeso.textContent = peso;
//   novaAltura.textContent = altura;
//   novaGordura.textContent = gordura;
//   novoImc.textContent = imc;

//   novoPaciente.appendChild(novoNome);
//   novoPaciente.appendChild(novoPeso);
//   novoPaciente.appendChild(novaAltura);
//   novoPaciente.appendChild(novaGordura);
//   novoPaciente.appendChild(novoImc);
//   console.log(novoPaciente);

//   const tabela = document.querySelector("#tabela-pacientes");

//   tabela.appendChild(novoPaciente);
// });

