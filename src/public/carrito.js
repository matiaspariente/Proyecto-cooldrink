let select = document.getElementById('selectPago')

let carrito = JSON.parse(localStorage.getItem('Carrito')) // tomo los valores del localstorage

let tabla = "<thead><tr><th>Producto</th><th>Cantidad</th><th>Total</th></thead>" // genero tabla con el carrito
let total = 0
if(carrito){ // si hay carrito genero la tabla
    for(let i=0;i<carrito.length ; i++){
        tabla +=`<tr><td>${carrito[i][0]}</td><td>${carrito[i][1]}</td><td>$${carrito[i][2]}</td></tr>`
        total += carrito[i][2]
    }
}

if (carrito){ // si tengo carrito entonces modifico el html informando los totales parciales
    tabla +=`<tr><td></td><td>Total:</td>><td>$${total}</td></tr>`
    document.getElementById("carrito").innerHTML = tabla //la envio al HTML
    let pagoEfectivo = `(*) Pago en Efectivo 20% de descuento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Total Parcial=$${total*0.8}</b>`//modifico el HTML informando el total parcial con los distintos pagos
    document.getElementById("pagoEfectivo").innerHTML = pagoEfectivo
    let pagoMercado = `(*) Pago con MercadoPago 10% de descuento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Total Parcial=$${total*0.9}</b>`
    document.getElementById("pagoMercado").innerHTML = pagoMercado
    let pagoTarjeta = `(*) Pago con Tarjeta 3 cuotas sin interes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Total Parcial=$${total}</b>`
    document.getElementById("pagoTarjeta").innerHTML = pagoTarjeta
}

let botonFinalizar = document.getElementById("btnFinalizarCompra") // evento de hacer click en boton
botonFinalizar.addEventListener("click",finalizarCompra)