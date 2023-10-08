let codigo = location.search;
//console.log(codigo);
let codigoProducto = new URLSearchParams(codigo);
//console.log(codigoProducto);
let codUser = codigoProducto.get('sku');
//console.log(codUser);

let skuProd = document.getElementById('sku');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');

//Tomo los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let listaDetalle = JSON.parse(detalleProducto[0]);
//console.log(listaDetalle);

skuProd.innerHTML = `Código del Producto: ${codUser}`;
imagen.innerHTML = `<img class="img-fluid" src="${listaDetalle.imagen}" alt="${listaDetalle.nombre}"/>`
nombre.innerHTML = `${listaDetalle.nombre}`;
subtitulo.innerHTML = `${listaDetalle.subtitulo}`;
descripcion.innerHTML = `${listaDetalle.descripcion}`;
precio.innerHTML = `${listaDetalle.precio}`;

//Botón voler y borrar 
let btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', function(){
    localStorage.clear()
    location.href = 'index.html'
})

