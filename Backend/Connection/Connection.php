<?php
function connection()
{
    try {
        $host = "localhost";
        $usr = "root";
        $pass = "";
        $bd = "market";
        $puerto = "3306";
        $mysqli = new mysqli($host, $usr, $pass, $bd, $puerto);
        return $mysqli;
    } catch (Exception $e) {

        echo $e->getMessage();
    }
}
