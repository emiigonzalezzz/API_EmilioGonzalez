<?php
require_once "../Connection/Connection.php";


class Producto{
    function GuardarProductoModel($id, $titulo, $link, $foto, $precio) 
    {
         $sql = "INSERT INTO articulos(id, titulo, link, foto, precio) VALUES('$id', '$titulo', '$link', '$foto', '$precio');";
         $connection = connection();
         $respuesta = $connection->query($sql);
         return $respuesta;
         if ($respuesta == false){
            if ($connection->errno == 1060){
                $respuesta=$this->ActualizarProductoModel($id, $titulo, $link, $foto, $precio);
            }
        }
    }

    function ActualizarProductoModel($id, $titulo, $link, $foto, $precio){
        $sql = "UPDATE articulos SET titulo = '$titulo', link = '$link', foto = '$foto', precio = $precio WHERE id = $id;"; 
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

}