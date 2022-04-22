<?php
       include "db_connection.php";
       
      $json = file_get_contents('php://input');
      $obj = json_decode($json, true);
       


      $user_name= $obj['user_name'];
      $user_email= $obj['user_email'];
      $user_password = $obj ['user_password'];
      $user_phone=  $obj['user_phone'];
   


        if( $user_name && $user_email && $user_phone && $user_password ){

            $user_query = mysqli_query($con ,"SELECT * FROM `user` WHERE `user_email` ='$user_email';");
            

            if (mysqli_num_rows($user_query) == 0){

                $insert_user = mysqli_query($con ,"INSERT INTO `user`( `user_name`, `user_email`, `user_password`, `user_phone`,`user_login`, `user_date_login`) VALUES ('$user_name','$user_email','$user_password','$user_phone','1',DATE_ADD(now(),interval 2 hour));");
      
        if (mysqli_affected_rows($con) > 0 ){
           
            $user_id = mysqli_insert_id($con);
           
            echo json_encode($user_id);
        //  echo json_encode("sucess");
        }else{
        
            echo json_encode("error insert data");
        }
         
    }else{
            echo json_encode("eamil found");
       
        }
        
    }else{
            echo json_encode("error");
       
        }
       



        ?>

