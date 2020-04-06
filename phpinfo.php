<?php
  header('Access-Control-Allow-Origin', '*');
  // header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
 
  include 'config.php';

  //$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

  // if ($conn -> connect_error) {
  //   echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  //   exit();
  // }


  try {
    $pdo = new PDO("mysql:host=$dbServername;dbname=$dbName", $dbUsername, $dbPassword);
    $sql = 'SELECT * FROM user';

    $q = $pdo->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
  
    $a = array();
    
    while ($row = $q->fetch(PDO::FETCH_NUM)) {
      // echo $row;
      $a = array(
        "id" => $row[0],
        "lastName" => $row[1],
        "firstName" => $row[2],
        "phone" => $row[3],
        "email" => $row[4],
        "address" => $row[5],
        "suite_num" => $row[6]
      );
    }


    echo json_encode($a);
  }
  catch (PDOException $e) {
    ("Error occured:" . $e->getMessage());
  }

  
  // if(isset($_get[last_name])) {
  //   echo "welcome";
  // } else {
  //   echo "fail";
  // }

  /*
    tried to post data with MySQL server.
  */

  // $content = $_POST['content'];

  // if($content) {
  //   var_dump($content);
  // } else {
  //   echo "Error!";
  // }
  
  // $sql = "SELECT * FROM user;";
  
  // $result = mysqli_query($conn, $sql);
  // var_dump($result);

  

  // $resultCheck = mysqli_num_rows($result);
  // var_dump($resultCheck);
  
  // if($resultCheck > 0) {
  //   echo "a";
  //   while ($row = mysqli_fetch_assoc($result)) {
  //     echo $row['last_name'];
  //     var_dump($row);
     
  //   }
  // }
  
?>