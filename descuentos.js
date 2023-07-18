const inputPrice = document.querySelector('#price');
const inputCupon = document.querySelector('#cupon');
const btn = document.querySelector('#calcular');
const result = document.querySelector('#result');

const cuponario = {
  'SUMMERTIME': 35,
  'BLACKFR1DAY': 40,
  'BUENFIN': 30,
  'NewYear': 15,
}

btn.addEventListener('click', calcularPrecioDescuento);

function calcularPrecioDescuento() {
  const price = Number(inputPrice.value);
  const cupon = inputCupon.value;
  let discount = 50
  
  const total = (price * (1 - (discount / 100)));

  if (!price || !discount) {
    result.innerText = 'Dejaste una casilla en blanco';
  }

  for (const cup in cuponario) {
    if (cup === cupon) {
      result.innerText = 'Descuento aplicado, el precio es $' + total;
      return
    } else {
      result.innerText = 'Cupón no válido';
    }
    
  }
  
  /* if (discount >= 100 || discount < 0) {
    result.innerText = 'El descuento debe estar en el rango %';
    return
  } */
  
}