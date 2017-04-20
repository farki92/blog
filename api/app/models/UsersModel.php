<?php
require_once "DB.php";

class UsersModel extends DB {
    
    function selectAll() {
        $sql = 'select * from users';
        return $this->selectSql($sql);
    }
    
    function selectUserById($id){
        $sql = "select * from users where id = $id";
        return $this->selectSql($sql);
    }

    function checkUser($email, $pass) {
        $sql = 'select first_name, last_name, email, id from users where email = ? and password = ?';

        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($email, 
                            $pass));
                            
        
        return $stmt->fetch(PDO::FETCH_ASSOC);    
    }
    function updateLoginTime($email, $pass){
        $sql = 'update users set last_login = ? where email = ? and password = ?';
        $currentTime = date("Y-m-d H:i:s");
        
        
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($currentTime, $email, $pass));
        
        return $stmt->rowCount();
    }
    
    function insertItem($item, $pass) {
        $sql = 'insert into users (email, password) values(?, ?)';
        // Check if the $item contains the "first_name" etc
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['email'], 
                            $pass));
        
        return $this->dbh->lastInsertId();
    }
    
    function updateItem($item){
        $sql = "update users set first_name = ?, last_name = ?, gender = ?, age = ?, nick_name = ?, profile_picture = ?, last_modified = ? where id = ?";
        $currentTime = date("Y-m-d H:i:s");
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['first_name'],
                            $item['last_name'],
                            $item['gender'],
                            $item['age'],
                            $item['nick_name'],
                            $item['profile_picture'],
                            $currentTime,
                            $item['id']));
        
        return $stmt->rowCount();    
    }
}