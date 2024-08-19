<?php
$host = 'localhost';
$dbname = 'your_database_name';
$username = 'your_database_username';
$password = 'your_database_password';

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
