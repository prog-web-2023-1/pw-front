function init() {
  if(!document.body.classList.contains('cesta-page')) {
      return;
  }

  let lessBtn = document.getElementById('product__qtd__btn-less');
  let plusBtn = document.getElementById('product__qtd__btn-plus');
  let qntInput = document.getElementById('product__qtd__values');

  plusBtn.addEventListener('click', function() {
    let value = qntInput.value;
    if(isNaN(value)) {
      value = 1;
      qntInput.value = value;
    } else {
      value = parseInt(value);
      value = value + 1;
      qntInput.value = value;
      recalculatePlus(value);
    }

  });

  lessBtn.addEventListener('click', function() {
    let value = qntInput.value;
    if(isNaN(value)) {
      value = 1;
      qntInput.value = value;
    } else {
        if(parseInt(value) > 1) {
          value = parseInt(value);
          value = value - 1;
          qntInput.value = value;
          recalculateLess(value);
        }
    }

  });
}


function recalculatePlus(fator) {
  let productTotal = document.getElementById('product__total');
  let productPix = document.getElementById('product__pix');
  let productSub = document.getElementById('product__subtotal');
  let productParcela = document.getElementById('product__parcela');


  productTotal.innerHTML = (59.90 * fator).toFixed(2);
  productPix.innerHTML = (49.99 * fator).toFixed(2);
  productSub.innerHTML = (59.90 * fator).toFixed(2);
  productParcela.innerHTML = (26.10 * fator).toFixed(2);
}

function recalculateLess(fator) {
  let productTotal = document.getElementById('product__total');
  let productPix = document.getElementById('product__pix');
  let productSub = document.getElementById('product__subtotal');
  let productParcela = document.getElementById('product__parcela');

  let valueTotal = parseFloat(productTotal.innerHTML);
  let valuePix = parseFloat(productPix.innerHTML);
  let valueSub = parseFloat(productSub.innerHTML);
  let valueParcela = parseFloat(productParcela.innerHTML);

  productTotal.innerHTML = (valueTotal - 59.90).toFixed(2);
  productPix.innerHTML = (valuePix - 49.99).toFixed(2);
  productSub.innerHTML = (valueSub - 59.90).toFixed(2);
  productParcela.innerHTML = (valueParcela - 26.10).toFixed(2);
}

export default {
  init,
}