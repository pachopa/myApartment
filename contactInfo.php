<?php
// echo 'chris';
include 'config.php';
$pdo = new PDO("mysql:host=$dbServername;dbname=$dbName", $dbUsername, $dbPassword);
header("Content-Type: application/json");

// $json = file_get_contents('php://input');
// $_POST = json_decode($json, true);
// $errors = array();

// echo 'chris ', $json, $_POST, ' chris ', $json['email'];

if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    echo $_POST['email'], ' chris ';
    $email = $_POST['email'];
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }
}
?>

  <?php if (!empty($errors)) : ?> 

            {
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>