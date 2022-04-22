<?php
            include "db_connection.php";

            $json = file_get_contents('php://input');
            $obj = json_decode($json, true);
            
           
           
              $prand_id=$obj['prand_id'];
$arr = array();

$query = mysqli_query($con , "SELECT * FROM `products` WHERE `Prand_id` = '$prand_id';");

if (mysqli_num_rows($query) > 0){
    while($order = mysqli_fetch_object($query)){
        $arr[] = $order;
    }

    echo json_encode($arr);
}
else{
    echo json_encode("no find data");
}


?>