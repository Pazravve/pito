const contenedorProductos = document.getElementById('contenedor-productos')


stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
    <img src="${producto?.img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto?.nombre}</h5>
        <p class="card-text">${producto?.descripcion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById('Agregar${producto.id}')
})

