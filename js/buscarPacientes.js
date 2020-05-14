const buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function() {
  const xhr = new XMLHttpRequest();

  // ABRO, PEGO de um LINK
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  // CARREGO
  xhr.addEventListener("load", function() {
    const erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      const resposta = xhr.responseText;
      const pacientes = JSON.parse(resposta);

      pacientes.forEach(paciente => {
        adicionarPaciente(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
})



// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

// xhr.addEventListener("load", function() {
//     var erroAjax = document.querySelector("#erro-ajax");
//     if (xhr.status == 200) {
//         erroAjax.classList.add("invisivel");
//         var resposta = xhr.responseText;
//         var pacientes = JSON.parse(resposta);

//         pacientes.forEach(function(paciente) {
//             adicionaPacienteNaTabela(paciente);
//         });
//     } else {
//         erroAjax.classList.remove("invisivel");
//     }
// });

// xhr.send();
// });
