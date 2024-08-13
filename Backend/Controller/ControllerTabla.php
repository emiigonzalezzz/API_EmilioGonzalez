<?php
require_once "../Model/TablaDAO.php";

$function = $_GET['function'];

switch ($function) {
    case "Guardar":
        GuardarProducto();
        break;
}
function GuardarProducto()
{
    $id = $_POST['id'];
    $producto = $_POST['producto'];
    $titulo = $_POST['titulo'];
    $link = $_POST['link'];
    $foto = $_POST['foto'];
    $precio = $_POST['precio'];
    $resultado = (new Producto())->GuardarProductoModel($id, $producto, $titulo, $link, $foto, $precio, );
    echo json_encode($resultado);
}
?>