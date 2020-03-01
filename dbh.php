<?php
 
  $dbServername = "localhost";
  $dbUsername = "root";
  $dbPassword = "96548756";
  $dbName = "myapartment";

  $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
  var_dump($conn);

  if ($conn -> connect_error) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

  $sql = "SELECT * FROM user;";
  
  $result = mysqli_query($conn, $sql);
  var_dump($result);
  $resultCheck = mysqli_num_rows($result);
  var_dump($resultCheck);
  if($resultCheck > 0) {
    echo "a";
    while ($row = mysqli_fetch_assoc($result)) {
      echo $row['last_name'];
      var_dump($row);
     
    }
  }
  
?>