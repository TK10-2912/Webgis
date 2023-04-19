<?php

if (isset($_POST['gid'])) {
    $paPDO = initDB();
    $paSRID = '4326';
    $gid = $_POST['gid'];
    $aResult = null;
    $aResult = getTinh($paPDO, $gid);
    echo $aResult;
    closeDB($paPDO);
}

function initDB()
{
    $host = 'localhost';
    $db = 'CSDL';
    $user = 'postgres';
    $password = 'postgres';
    $post = '5432';
    // Kết nối CSDL
    try {
        $dsn = "pgsql:host=$host;port=$post;dbname=$db;";
        $paPDO = new PDO($dsn, $user, $password);
        return $paPDO;
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}

function query($paPDO, $paSQLStr)
{
    try {
        // Khai báo exception
        $paPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Sử đụng Prepare 
        $stmt = $paPDO->prepare($paSQLStr);
        // Thực thi câu truy vấn
        $stmt->execute();

        // Khai báo fetch kiểu mảng kết hợp
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        // Lấy danh sách kết quả
        $paResult = $stmt->fetchAll();
        return $paResult;
    } catch (PDOException $e) {
        echo "Thất bại, Lỗi: " . $e->getMessage();
        return null;
    }
}

function closeDB($paPDO)
{
    // Ngắt kết nối
    $paPDO = null;
}

// Lấy thông tin tỉnh trong db
function getTinh($paPDO, $gid)
{
    $mySQLStr = "SELECT name_1 FROM gadm41_vnm_1 WHERE gid = :gid";
    $stmt = $paPDO->prepare($mySQLStr);
    $stmt->bindParam(':gid', $gid);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($result != null) {
        // Kết quả
        return $result['name_1'];
    } else {
        return "null";
    }
}
