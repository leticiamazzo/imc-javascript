const buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function() {
  const xhr = new XMLHttpRequest;

  // ABRO, PEGO de um LINK
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  // CARREGO
  xhr.addEventListener("load", function() {
    const resposta = xhr.responseText;
    const pacientes = JSON.parse(resposta);

    pacientes.forEach(paciente => {
      adicionarPaciente(paciente);
    });
  });

  // MANDO
  xhr.send();

})
