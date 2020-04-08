<?php
  
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

?>