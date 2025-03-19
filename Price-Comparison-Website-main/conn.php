<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "logindb";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
// if(!$con = mysqli_connect('sql305.infinityfree.com	
// ','if0_35509643','2wLxjcKCTuB1','if0_35509643_logindb'))
{
	die("failed to connect!");
}
