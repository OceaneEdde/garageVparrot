<?php
$servername = "localhost";
$username = "root";
$password = "Bandedenouille29+";
$dbname = "garageVparrot";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}
?>
