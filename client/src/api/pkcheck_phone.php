<?php
    // 引入connect.php
    include 'pkconnect.php';

    /*
        接口功能：验证手机号是否存在
        所需参数：
            * phone
     */
    
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null; 


    // 查找数据库中是否存在同手机号用户
    $sql = "select * from users where phone='$phone'";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>