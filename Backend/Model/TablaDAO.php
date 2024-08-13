<?php
require_once "../Connection/Connection.php";


class Producto{
    function GuardarProductoModel($id, $producto, $titulo, $link, $foto, $precio) 
    {
         $sql = "INSERT INTO Market(id, producto, titulo, link, foto, precio) VALUES('$id', '$producto', '$titulo', '$link', '$foto', '$precio');";
         $connection = connection();
         $respuesta = $connection->query($sql);
         return $respuesta;

    }

}