<?php

  include 'connectDB.php';
 
  
  // userful code to look at the data
  $json = file_get_contents('php://input');
  // $_POST = json_decode($json, true);
  // $errors = array();

  if ($_SERVER['REQUEST_METHOD'] === "POST") {

    try {
      $lName = $_POST['lName'];
      $fName = $_POST['fName'];
      $phone = $_POST['phone'];
      $email = $_POST['email'];
      $address = $_POST['address'];
      $suiteNum = $_POST['suiteNum'];
      $date = date_create()->format('Y-m-d H:i:s');
      $author_type = '1';
      $apart_id = '1';
      $apart_building = '1';

      $pdoQuery = $pdo->prepare('INSERT INTO user (
        last_name,
        first_name,
        phone,
        email,
        address,
        suite_num,
        date,
        author_type,
        apart_id,
        apart_building
      ) VALUES (
        :lName,
        :fName,
        :phone,
        :email,
        :address,
        :suiteNum,
        :date,
        :author_type,
        :apart_id,
        :apart_building
      )
      ');
     
      $pdoQuery->execute([
        'lName' => $lName,
        'fName' => $fName,
        'phone' => $phone,
        'email' => $email,
        'address' => $address,
        'suiteNum' => $suiteNum,
        'date' => $date,
        'author_type' => $author_type,
        'apart_id' => $apart_id,
        'apart_building' => $apart_building
      ]);
      var_dump($pdoQuery);
      echo 'Data Inserted';
       
    } catch(PDOException $e) {
      //find a error reason
      echo $e->getMessage();
    }
   
  }  
?>

  