<?php

$userName = filter_input(INPUT_POST, 'userName');
$email = filter_input(INPUT_POST, 'email');
$password = filter_input(INPUT_POST, 'password');

if(!empty($userName) || !empty($email) || !empty($password)) {
    $con = new mysqli_connect("localhost", "root", "", "bobathoughts");
    if(mysqli_connect_error()) {
        die('Connect Error ('. mysqli_errno() .')'. mysqli_connect_error());
    }
    else {
        $sql = "INSERT INTO person (userName, email, password) VALUES($userName, $email, $password)";
        if($con->query($sql)) {
            echo "New record inserted sucessfully!";
        }
        else {
            echo "Error: ". $sql . "<br>". $con->error;
        }
    }
    $con->close();
}
else {
    echo "Field should not be empty!";
    die();
}

?>