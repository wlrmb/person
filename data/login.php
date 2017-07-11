<?php
/***
验证客户端提交的登录信息，返回验证结果为JSON格式，形如：
登录成功{"msg":"succ", "user_id": 1}
登录失败{"msg":"err", "reason":"用户名或密码错误"}
***/
header('Content-Type: application/json');

$user_name = $_REQUEST['user_name'];
$user_pwd = $_REQUEST['password'];

$conn = mysqli_connect('127.0.0.1','root','zfw','ff',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM users WHERE name='$user_name' AND pwd='$user_pwd'";
$result = mysqli_query($conn,$sql);

$output = [];
$row = mysqli_fetch_assoc($result);
if($row===null){
  $output['msg'] = 'err';
  $output['reason'] = '用户名或密码错误';
}else {
  $output['msg'] = 'succ';
  //$output['user_id'] = $row['user_id'];
}
echo json_encode($output);