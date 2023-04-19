<?php
// PDO Options
$options = [
    \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES   => false,
];
// Connection parameters
$host = 'localhost';
$post = '5432'; 
$db = 'CSDL';
$user = 'postgres';
$password = 'postgres';

// Attempt to connect to the database
$dsn = "pgsql:host=$host; port=$post; dbname=$db";
try {
    // Create pdo connection
    $myPdo = new PDO($dsn, $user, $password);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Query the database
$result = $myPdo->query("SELECT gid, name_1, geom from gadm41_vnm_1 ;");
while ($row = $result->fetch()) {
    echo $row['gid'] . "\n";
    echo $row['name_1'] . "\n";
    echo $row['geom'] . "\n";
}

// Close the database connection
$myPdo = null;
?>
