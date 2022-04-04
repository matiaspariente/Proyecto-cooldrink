let cantidad = 0 
let pago = 0
let bebida = 0
const compraBebidas = new Carrito(cantidad,pago,bebida); // inicializo carrito
productos=[]

const options = {
    method: "GET"
  }; 

fetch('/api/productos/', options) // hago un fetch para atraves del metodo get obtener los productos cargados hasta el momento al iniciar la conexion con el cliente nuevo
    .then(response => response.text())
    .then(data => {
         productos=JSON.parse(data)
         productCards()
    });

function productCards(){

    const card = document.getElementById('cardsProductos');
    for (const productosCard of productos) {
        if (card) {
            const contentCard = document.createElement('div');
                contentCard.innerHTML = ` 
                    <div class="col">
                        <div class="card">
                            <img src="${productosCard.img}" class="imagen card-img-top" alt="${productosCard.id}">
                                <div class="card-body">
                                        <h5 class="card-title d-flex justify-content-center">${productosCard.title}</h5>
                                           <div class="input-group d-flex justify-content-center">
                                             <h5 class="input-group d-flex justify-content-center"> $${productosCard.price}</h5>
                                              <a id="${productosCard.id}" class="btn btn-primary d-flex justify-content-center">Agregar al Carrito</a>
                                        </div>
                                </div>
                        </div>
                    </div>
                    `;          
            card.append(contentCard);
            let btnCompra = document.getElementById(`${productosCard.id}`);
            btnCompra.onclick = () => {
                compraBebida(`${productosCard.id}`);
                Swal.fire({   
                title: 'Producto Agregado al Carrito',
                text: `${productosCard.title}: $${productosCard.price}`,
                imageUrl: `${productosCard.img}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                })
            };
        }
    }
}    
 

function compraBebida(bebida) {
    compraBebidas.carrito = JSON.parse(localStorage.getItem('Carrito')) || [] // Verifico si ya tenia carrito iniciado, para no perderlo al reiniciar la pagina. si no hay lo dejo vacio
    compraBebidas.bebida = bebida
    compraBebidas.cantidad = 1
    compraBebidas.agregarProducto() // llamo a la funcion agregar producto
}

function finalizarCompra(){
    compraBebidas.total = parseInt(JSON.parse(localStorage.getItem('Total'))) // tomo el total del localstorage
    compraBebidas.pago = parseInt(select.value) 
    let res = compraBebidas.cerrarCompra()// llamo a la funcion de cerrar compra con el pago correspondiente
    console.log(compraBebidas.total)
    compraBebidas.total ? 
    Swal.fire({ icon: 'success', title: 'Compra Finalizada', text: `${res}`}).then(()=> {window.location.href = "./index.html"}) : //si finalizo la compra vuelvo al index.
    Swal.fire({icon: 'error', text: 'Debe agregar productos para finalizar la compra'
  }) // si no habia total es por que no hay pedido, doy alerta de que no se agregaron productos
    compraBebidas.total = 0
}
