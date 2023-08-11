const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
};
PlatziMath.esImpar = function (lista) {
    return lista.length % 2;
};

PlatziMath.calcularModa = function (lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];
    //console.log({ listaCount, listaArray, listaOrdenada, listaMaxNumber });
    //console.log("La moda es: " + listaMaxNumber[0]);
    return moda;
};

PlatziMath.calcularMediana = function (listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
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
};

PlatziMath.calcularPromedio = function (lista) {
    let sumaLista = lista.reduce(
        (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor
    );

    const promedio = sumaLista / lista.length;
    return promedio;
};

PlatziMath.ordenarLista = function (listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
};

PlatziMath.ordenarListaBidimensional = function (listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
};
