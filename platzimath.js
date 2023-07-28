function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularMediana(lista) {
  
}

function calcularPromedio(lista) {

  let sumaLista = lista.reduce((valorAcumulado, nuevoValor) => 
    valorAcumulado + nuevoValor
  );
  
  const promedio = sumaLista / lista.length;
  return promedio
}