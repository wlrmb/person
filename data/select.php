<?php
header('Content-Type:text/html');
$user_name=$_REQUEST['username'];
$conn=mysqli_connect('127.0.0.1','root','zfw','ff',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM users WHERE name='$user_name'";
$result = mysqli_query($conn,$sql);
if(($row=mysqli_fetch_assoc($result))!==null){  //即已存在
	echo "erro";
}else {	//不存在
	echo "succ";
}
