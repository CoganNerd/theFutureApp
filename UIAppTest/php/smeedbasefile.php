<?php
	
	DEFINE('DB_USER', 'Boni');
	DEFINE('DB_PSWD', '12345');
	DEFINE('DB_HOST', 'localhost');
	DEFINE('DB_NAME', 'theFutureAppdb');

	
	$dbconnect = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME); //url path to connect to the database

	if(!$dbconnect) {
		# code...
		die("Failed to connect");
	}
	echo "Running";

?>

