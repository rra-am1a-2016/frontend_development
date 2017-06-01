<?php
   $serverName = "localhost";
   $userName = "root";
   $password = "";
   $databaseName = "proefexamen";

   $conn = mysqli_connect($serverName, $userName, $password, $databaseName) or die("Database is niet werkzaam");

   $query = "SELECT * FROM `pictures`";

   $result = mysqli_query($conn, $query);

   $records = mysqli_fetch_all($result, MYSQLI_ASSOC);

   $jsonString = json_encode($records, 1);

   echo $jsonString;
?>