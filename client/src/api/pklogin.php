<?php
    // 引入connect.php
    include 'pkconnect.php';

    /*
        接口功能：验证手机号是否存在
        所需参数：
            * phone
     */
    
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 



    // 查找数据库中是否存在同电子邮箱用户
    $sql = "select * from users where phone='$email' and password='$password'";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }

?>