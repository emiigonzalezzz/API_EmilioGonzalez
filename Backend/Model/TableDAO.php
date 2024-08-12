<?php
require_once "../Connection/Connection.php";


class Producto{
    function ObtenerProductoModel()
    {
        $connection = connection();
        $sql = "SELECT * FROM Market";
        $respuesta = $connection->query($sql);
        $productos = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $productos;
    }
    
    function IngresarProductoModel($id, $producto, $titulo, $link, $foto, $precio) 
    {
         $sql = "INSERT INTO Market(id, producto, titulo, link, foto, precio) VALUES('$id', '$producto', '$titulo', '$link', '$foto', '$precio');";
         $connection = connection();
         $respuesta = $connection->query($sql);
         return $respuesta;

    }


}