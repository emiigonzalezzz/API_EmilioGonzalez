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
    button.innerHTML="Guardar";
    tr.appendChild(button);
    button.onclick = ()=>{
    GuardarProductos(producto);
}
    tbodyElement.appendChild(tr);
});

}
    function GuardarProducto(){
    let FormElement = document.querySelector("#Guardar")

    FormElement.onsubmit = async (e) =>{
        e.preventDefault()
        let FormData = new FormData(FormElement);
        let url = "http://localhost/API_EmilioGonzalez/Backend/Controller/ControllerTabla.php?function=Guardar"

        FormData.append("id", producto.id);
        FormData.append("titulo", producto.titulo);
        FormData.append("link", producto.link);
        FormData.append("foto", producto.foto);
        FormData.append("precio", producto.precio);

        let config = {
                method: 'POST',
                body: FormData
        }

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
    
        if (datos !=true){
            console.log("Ya existen");
        }else{
            console.log("Guardado correctamente");
            alert("Guardado correctamente");
            document.getElementById("Guardar").reset();
        }
    }
    }


