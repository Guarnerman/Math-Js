console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});
console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
const S = perimetroTriangulo / 2;
const areaTriangulo = Math.sqrt(S * (S - ladoTriangulo1) * (S - ladoTriangulo2) * (S - ladoTriangulo3));


function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  }
}

function calcularTriangulo(lado1, lado2, lado3) {
  return {
    perimetro: lado1 + lado2 + lado3,
    area: Math.sqrt(S * (S - lado1) * (S - lado2) * (S - lado3)), 
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTriangulo3,
  perimetroTriangulo,
  areaTriangulo,
});
console.groupEnd('Triangulo');

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * PI;
const AreaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  AreaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioCuadrado = Math.pow(radio, 2);

  return {
    circunferencia: diametro * Math.PI,
    area: radioCuadrado * Math.PI,
  }
}

console.groupEnd('Circle')
