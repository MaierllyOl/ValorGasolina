const btn = document.getElementById("btn");

btn.addEventListener('click', function() {

    const valorDaGasolina = document.getElementById('valor-da-gasolina').value;
    const quantDeLitros = document.getElementById('quant-de-litros').value;

    if(valorDaGasolina > 0 && quantDeLitros > 0) {

        const valorTotal = parseFloat(valorDaGasolina) * parseFloat(quantDeLitros);

        document.querySelector('span').textContent = valorTotal.toFixed(2);
    }
    
});
