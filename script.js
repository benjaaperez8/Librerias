class Producto {
    constructor(id,nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock  = stock
    }
}

const producto1 = new Producto(1, "Cerveza en Lata", "Quilmes", 150, 500)
const producto2 = new Producto(2, "Bebida sin Alcohol", "Coca cola 2.25l", 330, 60)
const producto3 = new Producto(3, "Chocolate", "Block 110gr", 300, 30)
const producto4 = new Producto(4, "Alfajor", "Aguila clasico", 150, 10)

const productos = [producto1, producto2, producto3, producto4]

const divProductos = document.getElementById('divProductos')
const botonCarrito = document.getElementById('botonCarrito')

botonCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Carrito',
        text:'Contenido carrito'
      })
})

productos.forEach(producto => {
    divProductos.innerHTML += `
    <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem;margin: 4px;">
        <div class="card-header">Producto</div>
        <div class="card-body">
        <h4 class="card-title">${producto.nombre}</h4>
        <p class="card-text">${producto.nombre}</p>
        <p class="card-text">${producto.marca}</p>
        <p class="card-text">${producto.precio}</p>
        <p class="card-text">${producto.stock}</p>
        <button class="btn btn-secondary"><i class="fas fa-cart-plus"></i></button>
  </div>
</div>
    
    `
})

productos.forEach(producto => {
  document.getElementById(`producto${producto.id}`).lastElementChild.lastElementChild.addEventListener('click', () => {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to top left, #217D81, #D19977)",
        },
        onClick: function(){} 
      }).showToast();
   })
})