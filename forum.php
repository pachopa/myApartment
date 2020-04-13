<?php

  include 'connectDB.php';
 
  // userful code to look at the data
  $json = file_get_contents('php://input');


  if ($_SERVER['REQUEST_METHOD'] === "POST") {

    try {
      $board_category = $_POST['board_category'];
      $board_type = $_POST['board_type'];
      $title = $_POST['title'];
      $content = $_POST['content'];
      $date = date_create()->format('Y-m-d H:i:s');

     
      $pdoQuery = $pdo->prepare('INSERT INTO board (
        board_category,
        board_type,
        title,
        content,
        date,
      ) VALUES (
        :board_category,
        :board_type,
        :title,
        :content,
        :date,
      )
      ');
      
      $pdoQuery->execute([
        'board_category' => $board_category,
        'board_type' => $board_type,
        'title' => $title,
        'content' => $content,
        'date' => $date,
      ]);

      echo 'Data Inserted';
       
    } catch(PDOException $e) {
      //find a error reason
      echo $e->getMessage();
    }
   
  }  
?>

  