function calcularPromedio(lista) {

  let sumaLista = lista.reduce((valorAcumulado, nuevoValor) => 
    valorAcumulado + nuevoValor
  );
  
  const promedio = sumaLista / lista.length;
  return promedio
}