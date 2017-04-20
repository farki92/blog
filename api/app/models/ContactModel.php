<?php
require_once "DB.php";

class ContactModel extends DB {
    
    
    function insertItem($item){
        $sql='insert into contact (email, content) values (?, ?)';
        
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['email'],
                            $item['content']));
                            
        return $this->dbh->lastInsertId();
    }
    
    
    
    
}