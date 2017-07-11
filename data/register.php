<?php
header('Content-Type:application/json');
$username=$_REQUEST['username'];
$pwd=$_REQUEST['pwd'];
$email=$_REQUEST['email'];
$conn=mysqli_connect('127.0.0.1','root','zfw','ff',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="INSERT INTO users VALUES(null,'$username','$pwd','$email')";
$result = mysqli_query($conn,$sql);
if($result){  //执行成功
	echo mysqli_insert_id($conn);
}else {	//执行失败
	echo "ERR: $sql";
}