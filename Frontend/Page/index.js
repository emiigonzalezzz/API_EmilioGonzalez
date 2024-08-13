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
        <td>${producto.permalink}</td>
        <td>${producto.thumbnail}</td>
        <td>${producto.price}</td>
`;

tbodyElement.appendChild(tr);
   });
}
    function GuardarProducto(){
    let FormElement = document.querySelector("#guardar")

    FormElement.onsubmit = async (e) =>{
        e.preventDefault()
        let DivData = new FormData(FormElement);
        let url = "http://localhost/API_EmilioGonzalez/Backend/Controller/ControllerTabla.php?function=Guardar"

        let config = {
                method: 'POST',
                body: DivData
        }

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
    
        if (datos !=true){
            console.log("Ya existen");
        }else{
            console.log("Guardado correctamente");
            alert("Guardado correctamente");
            document.getElementById("guardar").reset();
        }
    }
    }


