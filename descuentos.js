const inputPrice = document.querySelector("#price");
const inputCupon = document.querySelector("#cupon");
const btn = document.querySelector("#calcular");
const result = document.querySelector("#result");

const cuponario = {
  SUMMERTIME: 35,
  BLACKFR1DAY: 40,
  BUENFIN: 30,
  NewYear: 15,
};

btn.addEventListener("click", calcularPrecioDescuento);

function calcularPrecioDescuento() {
  const price = Number(inputPrice.value);
  const cupon = inputCupon.value;
  let discount;

  if (!price || !discount) {
    result.innerText = "Dejaste una casilla en blanco";
  }

  if (cuponario[cupon]) {
    discount = cuponario[cupon];
    const total = price * (1 - discount / 100);
    console.log(cuponario[cupon]);
    result.innerText = "Descuento aplicado, el precio es $" + total;
    return;
  } else {
    result.innerText = "Cupón no válido";
  }
}
