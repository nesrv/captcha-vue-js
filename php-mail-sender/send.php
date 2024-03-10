<meta charset="UTF-8" />
<?php
$name = $_POST['name'];
$email = $_POST['email'];


$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';

mail($email, $name , $name , implode("\r\n", $headers));


 ?>