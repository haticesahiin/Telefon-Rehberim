<?php

$database = "database";

$host = "mysql:host=localhost;dbname=$database";
$user = "root";
$password = "";

try{

	$db = new PDO($host, $user, $password);
	
	
}catch(PDOException $e){
	
	echo 'Hata '.$e->getMessage();
}