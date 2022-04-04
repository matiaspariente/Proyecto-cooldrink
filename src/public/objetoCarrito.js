class Carrito { 
    constructor(cantidad,pago,bebida){ // Genero el constructor con los parametros recibidos
        this.cantidad=cantidad
        this.pago=pago
        this.bebida=bebida
        this.carrito = []
        this.total = 0
    }
    agregarProducto(){
        let item = []; // item de producto agregado
        let objetoRepetido = false // flag de objeto ya cargado
        for(let i=0;i<this.carrito.length ; i++){
            let busqueda1 = this.carrito[i].find(()=>this.carrito[i][0] == this.bebida) //verifico si ya tengo esa bebida en el carrito
            if(busqueda1!=undefined){ // si la tengo es por que me devuelve un valor, en ese caso le sumo una mas a la cantidad
                this.carrito[i][2]+=this.carrito[i][2]/this.carrito[i][1]
                this.carrito[i][1]++
                i=this.carrito.length
                objetoRepetido=true // levanto flag de objeto
            }
        }
        const busqueda = productos.find(productos=>productos.id ==this.bebida)
        if(!objetoRepetido){ // como la bebida ya estaba en el carrito no hago un push.
            item.push(busqueda.id)
            item.push(this.cantidad)
            item.push(busqueda.price)
            this.carrito.push(item) // agrego item al carrito  
            }   
        this.total += busqueda.price
        localStorage.setItem('Carrito',JSON.stringify(this.carrito)) // uso el localstorage para ir guardando el carrito
        localStorage.setItem('Total',JSON.stringify(this.total)) // uso el localstorage para guardar el total
    }
    cerrarCompra(){
        let mensajepago = ""
        const cierre = descuentos.find(descuentos=>descuentos.id == this.pago)
        this.total = this.total * cierre.descuento
        mensajepago = cierre.mensaje + "   El total de la compra es $"+ this.total //genero el mensaje de salida que ira al alert
        //this.total=0 // reinicio los valores a 0 para nueva compra
        this.carrito=[]
        localStorage.removeItem('Carrito') // al finalizar la compra ya no es necesario guardar el carrito
        localStorage.removeItem('Total') // al finalizar la compra ya no es necesario guardar el carrito
        document.getElementById("carrito").innerHTML = ""
        let pagoEfectivo = `(*) Pago en Efectivo 20% de descuento `//modifico el HTML informando el total parcial con los distintos pagos
        document.getElementById("pagoEfectivo").innerHTML = pagoEfectivo
        let pagoMercado = `(*) Pago con MercadoPago 10% de descuento`
        document.getElementById("pagoMercado").innerHTML = pagoMercado
        let pagoTarjeta = `(*) Pago con Tarjeta 3 cuotas sin interes`
        document.getElementById("pagoTarjeta").innerHTML = pagoTarjeta
        return mensajepago
    }
}

