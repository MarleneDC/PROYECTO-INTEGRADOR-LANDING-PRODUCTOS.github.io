
let productosHTML = document.querySelector('#productos');
//console.log(productosHTML);

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
            <div class="producto card-body gap-2">
                <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}">
                <h4 class="text-start" >${producto.nombre}</h4>
                <h5 class="text-start" >${producto.subtitulo}</h5>
                <h3 class="text-start" >$${producto.precio}</h3>
            

                <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-primary d-block btnComprar'>Comprar</a>
            </div>
            </div>
        </div>
        `
     })

    
    let btnComprar = document.querySelectorAll('.btnComprar')
    //console.log(btnComprar);
    
    let productosDatos
    let datosProd
    let codProdUser

    btnComprar.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             //evitar evento a
             e.preventDefault()
             //Traer datos del localStorage 
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 productosDatos = [];
             }else{
                 productosDatos = JSON.parse(miListaDeProductos)
                 //console.log(productosDatos);
             }

             productosDatos.push(this.id)
            datosProd = JSON.parse(productosDatos[0])
            codProdUser = datosProd.sku
            localStorage.setItem('detallesProducto', JSON.stringify(productosDatos))
            //Query strings - Lo cual es la ruta a donde debo enviar al usuario con el código que fué seleccionado
            location.href = `producto.html?sku=${codProdUser}`
             
         })    
     } )
    

    
}) 
/*-------------------------------------*/

let prodHTML = document.querySelector('.novedades');
console.log(prodHTML);

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((novedades)=>{
   // console.log(novedades)
    for (let i = 0; i< novedades.length; i++) {
      //  console.log(novedades[i].novedad);
      if (novedades[i].novedad == "si") {
       console.log("IF")
       console.log(novedades[i])
      const sectionNovedades = document.querySelector('#novedades')
      sectionNovedades.innerHTML+= `
                <div class="col-6">
                    <div class="novedad producto gap-2">
                    <img class="w-100" src="${novedades[i].imagen}" alt="${novedades[i].nombre}">
                    <h3 class="text-start" >${novedades[i].nombre}</h3>
                    <h5 class="text-start" >${novedades[i].subtitulo}</h5>
                    </div>
                </div>
        `
      }
    }
})

/*-------------------------------------*/

let lanzamientosHTML = document.querySelector('.lanzamientos');
console.log(lanzamientosHTML);

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((lanzamientos)=>{
   // console.log(novedad)
    for (let i = 0; i< lanzamientos.length; i++) {
      //  console.log(lanzamientos[i].novedad);
      if (lanzamientos[i].novedad == "no") {
       console.log("IF")
       console.log(lanzamientos[i])
      const sectionLanzamientos = document.querySelector('#lanzamientos')
      sectionLanzamientos.innerHTML+= `
                <div>
                    <div class="lanzamientos producto gap-2">
                    <img class="w-100" src="${lanzamientos[i].imagen}" alt="${lanzamientos[i].nombre}">
                    <h3 class="text-start" >${lanzamientos[i].nombre}</h3>
                    <h5 class="text-start" >${lanzamientos[i].subtitulo}</h5>
                    </div>
                </div>
        `
      }
    }
    
})


