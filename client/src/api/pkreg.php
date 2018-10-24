<?php
    // 引入connect.php
    include 'pkconnect.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * phone
            * password
     */
    
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null; 
    $nickname = isset($_POST['nickname']) ? $_POST['nickname'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null;


    mysqli_set_charset($conn,'utf-8');
    // 添加到数据库
    $sql = "insert into users(phone,nickname,password) values('$phone','$nickname','$password')";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result){
        echo "success";
    }else{
        echo "fail";
    }

?>