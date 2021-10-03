<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type:application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include('db.php');
$limit = 20;
$page = $_GET['page'];
$offset = ($page - 1) * $limit;
$users = mysqli_query(
	$con,
	"SELECT * FROM `user` ORDER BY Id ASC LIMIT {$offset}, {$limit}"
);
$totalRecords = mysqli_query(
	$con,
	"SELECT * FROM `user`"
);
if (mysqli_num_rows($users) > 0) {
	$total_records = mysqli_num_rows($totalRecords);
	$totalPage = ceil($total_records / $limit);
	$all_users = mysqli_fetch_all($users, MYSQLI_ASSOC);
	echo json_encode(["success" => 200, "users" => $all_users, "totalPages" => $totalPage]);
} else {
	echo json_encode(["success" => 0, "users" => 0]);
}
