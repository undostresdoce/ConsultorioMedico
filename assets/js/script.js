function Consultorio(nombre, pacientes) {
  this._nombre = nombre;
  this._pacientes = pacientes;
}

Consultorio.prototype.getNombre = function () {
  return this._nombre;
};

Consultorio.prototype.setNombre = function (nombre) {
  this._nombre = nombre;
};

Consultorio.prototype.getPacientes = function () {
  this._pacientes.forEach(function (paciente) {
    // Crear una nueva fila en la tabla para cada paciente
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${paciente.getNombre()}</td>
      <td>${paciente.getEdad()}</td>
      <td>${paciente.getRut()}</td>
      <td>${paciente.getDiagnostico()}</td>
    `;
    document.getElementById("cuerpoTabla").appendChild(fila);

    // Imprimir información del paciente en la consola
    console.log("_________________");
    console.log(`Nombre: ${paciente.getNombre()}`);
    console.log(`Edad: ${paciente.getEdad()}`);
    console.log(`Rut: ${paciente.getRut()}`);
    console.log(`Diagnóstico: ${paciente.getDiagnostico()}`);
    console.log("________________");
  });
};

Consultorio.prototype.getPacientePorNombre = function (busquedaNombre) {
  const busquedaMinuscula = busquedaNombre.toLowerCase();
  const pacientesEncontrados = this._pacientes.filter(function (paciente) {
    const nombreMinuscula = paciente.getNombre().toLowerCase();
    return nombreMinuscula === busquedaMinuscula;
  });

  pacientesEncontrados.forEach(function (paciente) {
    // Crear una nueva fila en la tabla para cada paciente encontrado
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${paciente.getNombre()}</td>
      <td>${paciente.getEdad()}</td>
      <td>${paciente.getRut()}</td>
      <td>${paciente.getDiagnostico()}</td>
    `;
    document.getElementById("cuerpoTabla").appendChild(fila);

    // Imprimir información del paciente en la consola
    console.log("_______________");
    console.log(`Nombre: ${paciente.getNombre()}`);
    console.log(`Edad: ${paciente.getEdad()}`);
    console.log(`Rut: ${paciente.getRut()}`);
    console.log(`Diagnóstico: ${paciente.getDiagnostico()}`);
    console.log("_______________");
  });
};

function Paciente(nombre, edad, rut, diagnostico) {
  this._nombre = nombre;
  this._edad = edad;
  this._rut = rut;
  this._diagnostico = diagnostico;
}

Paciente.prototype.getNombre = function () {
  return this._nombre;
};

Paciente.prototype.getEdad = function () {
  return this._edad;
};

Paciente.prototype.getRut = function () {
  return this._rut;
};

Paciente.prototype.getDiagnostico = function () {
  return this._diagnostico;
};

Paciente.prototype.setNombre = function (nuevo_nombre) {
  this._nombre = nuevo_nombre;
};

Paciente.prototype.setEdad = function (nueva_edad) {
  this._edad = nueva_edad;
};

Paciente.prototype.setRut = function (nuevo_rut) {
  this._rut = nuevo_rut;
};

Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
  this._diagnostico = nuevo_diagnostico;
};

let paciente1 = new Paciente(
  "Sebastián Pérez",
  32,
  "18.654.901-4",
  "Depresión"
);
let paciente2 = new Paciente(
  "Juan Pablo Chacana",
  33,
  "17.356.998-1",
  "Diabetes Mellitus"
);
let paciente3 = new Paciente("Emilia Spagna", 26, "17.495.217-2", "Artritis");
let paciente4 = new Paciente(
  "Cinthya Llancafil",
  45,
  "12.345.678-9",
  "Alopecia"
);
let paciente5 = new Paciente("Carlos Mella", 55, "22.222.222-2", "Epilepsia");
let paciente6 = new Paciente(
  "Nicolás Valenzuela",
  19,
  "12.345.678-9",
  "Hipotiroidismo"
);

// Creamos una instancia de Consultorio con los pacientes iniciales
let consultaEloisa = new Consultorio("Consultorio Médico Eloísa Díaz", [
  paciente1,
  paciente2,
  paciente3,
]);

// Agregamos los nuevos pacientes al array de pacientes del consultorio
consultaEloisa._pacientes.push(paciente4, paciente5, paciente6);

// Modificamos los diagnósticos de los nuevos pacientes
paciente4.setDiagnostico("Alopecia");
paciente5.setDiagnostico("Epilepsia");
paciente6.setDiagnostico("Hipotiroidismo");

// Llamamos a los métodos para mostrar la información en la tabla y en la consola
consultaEloisa.getPacientes();
consultaEloisa.getPacientePorNombre("Sebastián");
consultaEloisa.getPacientePorNombre("Juan Pablo");
consultaEloisa.getPacientePorNombre("Emilia");
consultaEloisa.getPacientePorNombre("María");
consultaEloisa.getPacientePorNombre("Pedro");
consultaEloisa.getPacientePorNombre("Lucía");
