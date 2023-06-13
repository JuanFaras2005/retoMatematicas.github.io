const form = document.querySelector('#form');
const btn = document.querySelector('#btn-calcular');


form.addEventListener("submit", function (e) {
  e.preventDefault();
  createTable();
  form.reset();
});

function capacidadDeAhorro() {
  const salario_ingresos = document.querySelector("#salarioingresos").value;
  const salario_gastos = document.querySelector("#salariogastos").value;
  const capacidadDeAhorro = ((salario_ingresos - salario_gastos) * 100) / salario_ingresos;
  const objSalarial = {
    ingresos: salario_ingresos,
    gastos: salario_gastos,
    capacidad: capacidadDeAhorro,
  };
  return objSalarial;
}

function createTable() {
    const datos = capacidadDeAhorro();
    const error = document.querySelector('.error');
    if (!datos.gastos && !datos.ingresos) {
      error.style.display = 'block';
    } else {
      error.style.display = 'none';
      const table = document.querySelector("#ahorro_table");
      const tableRow = table.insertRow(-1);
      const newSalarioIngresos = tableRow.insertCell(0);
      newSalarioIngresos.textContent = datos.ingresos;
      const newSalarioDeudas = tableRow.insertCell(1);
      newSalarioDeudas.textContent = datos.gastos;
      if (datos.capacidad < -1) {
        const newCapacidad = tableRow.insertCell(2);
        newCapacidad.textContent = '% ' + datos.capacidad;
        newCapacidad.classList.add('denied');
      } else {
        const newCapacidadE = tableRow.insertCell(2);
        newCapacidadE.textContent = '% ' + datos.capacidad;
        newCapacidadE.classList.add('approved');
      }
    }
  }