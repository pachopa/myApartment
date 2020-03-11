<?php
  include 'config.php';

  $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

  if ($conn -> connect_error) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

  try {
    $pdo = new PDO("mysql:host=$dbServername;dbname=$dbName", $dbUsername, $dbPassword);
    $sql = 'CALL GetUsers()';

    $q = $pdo->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
    var_dump($q->fetch());

  }
  catch (PDOException $e) {
    ("Error occured:" . $e->getMessage());
  }
  
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