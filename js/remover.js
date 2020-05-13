const pacientes = document.querySelectorAll(".paciente");

const tabela = document.querySelector("table");

pacientes.forEach(paciente => {
  tabela.addEventListener("dblclick", function() {
    const td = event.target;
    const tr = td.parentNode;
    tr.remove();
  });
});

