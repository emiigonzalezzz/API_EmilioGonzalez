window.onload = async ()=>{
    let productos = await ObtenerProductos();
    console.log(productos);
    MostrarProductos(productos);
}

async function ObtenerProductos(){
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    let productos  = datos.results;
    return productos;
}
 function MostrarProductos(productos){
   let tbodyElement = document.querySelector("#tBodyProductos")
   productos.forEach(producto => {
    let tr = document.createElement("tr");
    tr.innerHTML+= `
   
        <td>${producto.title}</td>
        <td><a href = "${producto.permalink}">Entrar</td>
        <td><img src="${producto.thumbnail}"></td>
        <td>${producto.price}</td>
`;
    let button = document.createElement("button");
    button.onclick = ()=>{GuardarProducto(producto)};
    let td = document.createElement("td");
    td.appendChild(button);
    tr.appendChild(td);
    tbodyElement.appendChild(tr);
    button.textContent = "Guardar";
});

}
    async function GuardarProducto(producto){
    console.log(producto);
    let url = "http://localhost/API_EmilioGonzalez/Backend/Controller/ControllerTabla.php?function=Guardar";
    let formData = new FormData();

    formData.append("id", producto.id);
    formData.append("titulo", producto.title);
    formData.append("link", producto.permalink);
    formData.append("foto", producto.thumbnail);
    formData.append("precio", producto.price);

    let config = {
        method: 'POST',
        body: formData
    }

    let respuesta = await fetch(url, config);
    let rec = await respuesta.json();
    console.log(rec);
}



