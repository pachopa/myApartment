<?php

  include 'connectDB.php';
 
  // userful code to look at the data
  // $json = file_get_contents('php://input');

  if ($_SERVER['REQUEST_METHOD'] === "POST") {

    try {
      $board_category = $_POST['board_category'];
      $board_type = $_POST['board_type'];
      $title = $_POST['title'];
      $content = $_POST['content'];

      $pdoQuery = $pdo->prepare('INSERT INTO board (
        board_category,
        board_type,
        title,
        content
      ) VALUES (
        :board_category,
        :board_type,
        :title,
        :content
      )
      ');
      
      $pdoQuery->execute([
        'board_category' => $board_category,
        'board_type' => $board_type,
        'title' => $title,
        'content' => $content,
      ]);

      
      echo json_encode();
      
    } catch(PDOException $e) {
      //find a error reason
      echo $e->getMessage();
    }
   
  }  
?>

  