function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = lista.length / 2 - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);
    calcularPromedio(listaMitades);
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  let sumaLista = lista.reduce(
    (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor
  );

  const promedio = sumaLista / lista.length;
  return promedio;
}
