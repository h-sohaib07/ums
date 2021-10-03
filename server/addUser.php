<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
if (
    isset($data->firstName)
    && isset($data->lastName)
    && isset($data->birthday)
    && !empty(trim($data->firstName))
    && !empty(trim($data->lastName))
) {
    $firstName = mysqli_real_escape_string($con, trim($data->firstName));
    $lastName = mysqli_real_escape_string($con, trim($data->lastName));
    $birthday = mysqli_real_escape_string($con, trim($data->birthday));
    $insertUser = mysqli_query($con, "INSERT INTO `user`(`FirstName`,`LastName`,`Birthday`) VALUES('$firstName','$lastName','$birthday')");
    if ($insertUser) {
        $last_id = mysqli_insert_id($con);
        echo json_encode(["success" => 200, "msg" => "User Inserted.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
