<?php


    // 向数据库提取数据
    // 引入connect.php
    include 'connect.php';


    $sql = "select * from list";

    // 执行sql语句
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result -> close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();



?>