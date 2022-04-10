let select = document.getElementById('selectPago')

let carrito = JSON.parse(localStorage.getItem('Carrito')) // tomo los valores del localstorage

let tabla = "<thead><tr><th>Producto</th><th>Cantidad</th><th>Total</th><th></th></thead>" // genero tabla con el carrito
let total = 0

if(carrito){ // si hay carrito genero la tabla con los productos, cantidades, total y boton de eliminar producto
    for(let i=0;i<carrito.length ; i++){
        tabla +=`<tbody><td>${carrito[i][3]}</td><td>${carrito[i][1]}</td><td>$${carrito[i][2]}</td> 
        <td><button class="btn btn-danger" id="botonBorrar${i}">Eliminar Producto</button></td></tbody>`
        total += carrito[i][2]
    }
}

if (carrito){ // si tengo carrito entonces modifico el html informando los totales parciales
    tabla +=`<tbody><td></td><td>Total:</td>><td>$${total}</td><td></td></tbody>`
    document.getElementById("carrito").innerHTML = tabla //la envio al HTML
    let pagoEfectivo = `(*) Pago en Efectivo 20% de descuento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Total Parcial=$${total*0.8}</b>`//modifico el HTML informando el total parcial con los distintos pagos
    document.getElementById("pagoEfectivo").innerHTML = pagoEfectivo
    let pagoMercado = `(*) Pago con MercadoPago 10% de descuento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Total Parcial=$${total*0.9}</b>`
    document.getElementById("pagoMercado").innerHTML = pagoMercado
    let pagoTarjeta = `(*) Pago con Tarjeta 3 cuotas sin interes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Total Parcial=$${total}</b>`
    document.getElementById("pagoTarjeta").innerHTML = pagoTarjeta
}

if(carrito){ // si hay carrito verifico si se genera evento por algun boton de eliminar producto
    for(let i=0;i<carrito.length ; i++){
        let botonBorrarProducto = document.getElementById(`botonBorrar${i}`) // 
        botonBorrarProducto.addEventListener("click",()=> {
            borrarProducto(i) // si hay boton llamo a la funcion de borrar producto
        })

    }
}

const borrarProducto = (indiceABorrar)=>{
    total-=carrito[indiceABorrar][2] // le resto al total la eliminacion de este producto
    carrito.splice(indiceABorrar,1); // elimino esa posicion del carrito
    localStorage.setItem('Carrito',JSON.stringify(carrito)) // actualizo el storage con carrito y total
    localStorage.setItem('Total',JSON.stringify(total))
    if(!carrito.length){ // si al eliminar el carrito queda vacio se deja todo como al inicio
        this.carrito=[]
        localStorage.removeItem('Carrito') 
        localStorage.removeItem('Total') 
        document.getElementById("carrito").innerHTML = ""
        let pagoEfectivo = `(*) Pago en Efectivo 20% de descuento `//modifico el HTML informando el total parcial con los distintos pagos
        document.getElementById("pagoEfectivo").innerHTML = pagoEfectivo
        let pagoMercado = `(*) Pago con MercadoPago 10% de descuento`
        document.getElementById("pagoMercado").innerHTML = pagoMercado
        let pagoTarjeta = `(*) Pago con Tarjeta 3 cuotas sin interes`
        document.getElementById("pagoTarjeta").innerHTML = pagoTarjeta
    }
    location.reload() // se refresca la pagina
    
}

let botonFinalizar = document.getElementById("btnFinalizarCompra") // evento de hacer click en boton
botonFinalizar.addEventListener("click",finalizarCompra)