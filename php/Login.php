<?php 
 include "db_connection.php";
 $json = file_get_contents('php://input');
 $obj = json_decode($json, true);
 


  $user_email=$obj['user_email'];
  $user_password=$obj['user_password'];

//  $user_email ='ahmed@gmail.com';
//  $user_password = 'ahmed010#';



 if ($user_email && $user_password){

$user_query = mysqli_query($con , "SELECT * FROM `user` WHERE `user_email` ='$user_email'AND `user_password` =  '$user_password'  ;");

if (mysqli_num_rows($user_query) > 0){

    $user_login  = mysqli_query($con , "UPDATE `user` SET `user_login` = '1' WHERE`user_email` ='$user_email'AND `user_password` =  '$user_password'  ");

    if (($user_login)){

        $login_query=$user_query = mysqli_query($con , "SELECT * FROM `user` WHERE `user_email` ='$user_email'AND `user_password` =  '$user_password'" );

        if (mysqli_num_rows($login_query)>0){

      $user = mysqli_fetch_object($login_query);
  
       echo json_encode($user);

        } else{echo json_encode('error');}

    }
    else{echo json_encode('error');}
}

else{
    echo json_encode('erro please try agin');
   
}
}

 else{
    echo json_encode('Please Write Email and Password');
}




?>