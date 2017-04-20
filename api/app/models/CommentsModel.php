<?php
require_once "DB.php";

class CommentsModel extends DB {
    function selectAll() {
        $sql = 'select * from comments ORDER by creation_date desc';
        return $this->selectSql($sql);
    }
    
    function insertItem($item) {
        $sql = 'insert into comments (title, content, user_id, article_id) values(?, ?, ?, ?)';

        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['title'], 
                            $item['content'], 
                            $item['user_id'], 
                            $item['article_id']));
    
        return $this->dbh->lastInsertId();
    }
    function updateItem($title, $content, $id) {
        $sql = 'update comments set title = ?, content = ?,  where id = ?';
        
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($title, $content, $id));
        return $stmt->rowCount();
    }
    
    
    function deleteItem($item) {
        $sql = "delete from comments where id = ?";
        
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['id']));
        return $stmt->rowCount(); 
    }
}