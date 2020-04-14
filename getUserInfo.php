<?php
  
  include 'connectDB.php';

  try {
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