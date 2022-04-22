<?php
                include "db_connection.php";
                $json = file_get_contents('php://input');
                $obj = json_decode($json, true);
                
               
               
                  $user_id=$obj['user_id'];

    $user=  mysqli_query($con , "SELECT * FROM `user`");

    if (mysqli_num_rows($user) > 0){

    $user_login  = mysqli_query($con , "SELECT * FROM `user` WHERE `user_id` = '$user_id' AND `user_login` = '1'");
    if (mysqli_num_rows($user_login) > 0){

        $user_logout  = mysqli_query($con , "UPDATE `user` SET `user_login` = '0' WHERE`user_id` = '$user_id'");
    if (($user_logout)){
     
        echo json_encode ("Sucess");
     
    }else{
        echo json_encode("Error");
    }


}else{
    echo json_encode("no data");
}
    
}else{
    echo json_encode("Error");
}


?>
