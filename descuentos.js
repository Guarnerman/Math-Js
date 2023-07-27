const inputPrice = document.querySelector("#price");
const inputCupon = document.querySelector("#cupon");
const btn = document.querySelector("#calcular");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioDescuento);

const cuponLista = [];
cuponLista.push({
  nombre: "D1adelPadre",
  descuento: 30,
});
cuponLista.push({
  nombre: "NewYear",
  descuento: 15,
});

function calcularPrecioDescuento() {
  const price = Number(inputPrice.value);
  const cupon = inputCupon.value;
  let discount;

  if (!price || !discount) {
    result.innerText = "Dejaste una casilla en blanco";
  }

  const cuponValido = cuponLista.find((cup) => {
    return cup.nombre == cupon; // .find() retorna el primer objeto en forma {}
  });

  if (cuponValido) {
    console.log(cuponValido);
    discount = cuponValido.descuento;
    const total = price * (1 - discount / 100);
    result.innerText = "Descuento aplicado, el precio es $" + total;
  } else {
    result.innerText = "Cupón no válido";
  }
}
