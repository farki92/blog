<?php
require_once "DB.php";

class ArticlesModel extends DB {
    function selectAll() {
        $sql = 'select * from articles order by creation_date desc';
        return $this->selectSql($sql);
    }
    
    function selectByUserId($id){
        $sql = "select * from articles where user_id = $id";
        return $this->selectSql($sql);
    }
    
    function insertItem($item) {
        $sql = 'insert into articles (title, content, category_id, user_id, main_image_url, published) values(?, ?, ?, ?, ?, ?)';

        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['title'], 
                            $item['content'], 
                            $item['category_id'], 
                            $item['user_id'],
                            $item['main_image_url'],
                            $item['published']));
        
        return $this->dbh->lastInsertId();
    }
    
    function updateItem($item) {
        if($item['main_image_url'] != null){
        $sql = 'update articles set title = ?, content = ?, category_id = ?, main_image_url = ?, last_modified = ?, published = ? where id = ?';
        $currentTime = date("Y-m-d H:i:s");
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['title'], 
                            $item['content'], 
                            $item['category_id'], 
                            $item['main_image_url'],
                            $currentTime,
                            $item['published'],
                            $item['id']));
        return $stmt->rowCount();
        }
        else{
        $sql2 = 'update articles set title = ?, content = ?, category_id = ?, last_modified = ?, published = ? where id = ?';
        $currentTime2 = date("Y-m-d H:i:s");
        $stmt2 = $this->dbh->prepare($sql2);
        $stmt2->execute(array($item['title'], 
                            $item['content'], 
                            $item['category_id'],
                            $currentTime2,
                            $item['published'],
                            $item['id']));
        return $stmt2->rowCount();
        }
    }
    
    function deleteItem($item) {
        $sql = "delete from articles where id = ?";
        
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($item['id']));
        return $stmt->rowCount(); 
    }
}