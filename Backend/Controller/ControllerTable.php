<?php
require_once '../Model/TableDAO.php';

$function = $_GET['function'];

switch ($function) {
    case "Obtener":
        ObtenerProducto();
        break;
    case "Ingresar":
        IngresarProducto();
        break;
}

function ObtenerProducto()
{
    $resultado = (new Producto())->ObtenerProductoModel();
    echo json_encode($resultado);
}
function IngresarProducto()
{
    $id = $_POST['id'];
    $producto = $_POST['producto'];
    $titulo = $_POST['titulo'];
    $link = $_POST['link'];
    $foto = $_POST['foto'];
    $precio = $_POST['precio'];
    $resultado = (new Producto())->IngresarProductoModel($id, $producto, $titulo, $link, $foto, $precio, );
    echo json_encode($resultado);
}
?>