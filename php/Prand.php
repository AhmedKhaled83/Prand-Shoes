<?php
            include "db_connection.php";
            $json = file_get_contents('php://input');
            $obj = json_decode($json, true);

$prand_query  =  mysqli_query($con , 'SELECT * FROM `prand` WHERE 1');
$arr = array();

if (mysqli_num_rows($prand_query) > 0){

    while($ALL_Prands = mysqli_fetch_object($prand_query)){


$arr[] = $ALL_Prands;



}
}


echo json_encode(($arr));



            ?>