<?php

  include 'connectDB.php';
 
  // userful code to look at the data
  // $json = file_get_contents('php://input');

  // Handle a POST method
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

      echo ' Data Inserted ';
      
    } catch(PDOException $e) {
      //find a error reason
      echo $e->getMessage();
    }
   
  } else {
    try {
      $sql = 'SELECT * FROM board';
      $q = $pdo->query($sql);
      $q->setFetchMode(PDO::FETCH_ASSOC);

      // $arrayCount = 0;
      $allBoardInfo = array();
      while ($row = $q->fetch(PDO::FETCH_NUM)) {
        // echo $row;
        $boardInfo = (object)array(
          "id" => $row[0],
          "board_category" => $row[1],
          "board_type" => $row[2],
          "title" => $row[3],
          "content" => $row[4],
          "date" => $row[5]
        );

        array_push($allBoardInfo, $boardInfo);
        // $allBoardInfo[$arrayCount] = $boardInfo;
        // $arrayCount++;

      }
      // var_dump($allBoardInfo);
      echo json_encode($allBoardInfo);      
    } catch(PDOException $e) {
      
      echo $e->getMessage();
    }
  }
?>

  