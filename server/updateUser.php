<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->firstName)
    && isset($data->lastName)
    && isset($data->birthday)
    && isset($data->id)
    && !empty(trim($data->firstName))
    && !empty(trim($data->lastName))
) {
    $firstName = mysqli_real_escape_string($con, trim($data->firstName));
    $lastName = mysqli_real_escape_string($con, trim($data->lastName));
    $birthday = mysqli_real_escape_string($con, trim($data->birthday));

    $updateUser = mysqli_query($con, "UPDATE `user` SET `firstName`='$firstName', `LastName`='$lastName', `Birthday`='$birthday' WHERE `id`='$data->id'");
    if ($updateUser) {
        echo json_encode(["success" => 200, "msg" => "User Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
