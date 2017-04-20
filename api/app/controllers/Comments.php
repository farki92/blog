<?php
    require "app/models/CommentsModel.php";
    
    class Comments {
        private $commentsModel;
        
        function __construct(){
            $this->commentsModel = new CommentsModel();
        }
        
        
        function getAll() {
            return $this->commentsModel->selectAll();
        }
        
        function createItem() {
            
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
            
            if(!empty($_POST['title']) || !empty($_POST['content']) || !empty($_POST['user_id']) || !empty($_POST['article_id'])){
          
            return $this->commentsModel->insertItem($_POST);
            }
            else{
                echo "All fields are required.";
            }
        }
        
        function editItem(){
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
            if(!empty($_POST['title']) || !empty($_POST['content']) || !empty($_POST['id'])){
          
            return $this->commentsModel->updateItem($_POST['title'], $_POST['content'], $_POST['id']);
            }
        }
        
        function deleteItem(){
            
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
            
            // global $REQUEST;
            return $this->commentsModel->deleteItem($_POST);
        }
    }