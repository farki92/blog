<?php
    require "app/models/ArticlesModel.php";
    
    class Articles {
        private $articlesModel;
        
        function __construct() {
            $this->articlesModel = new ArticlesModel();   
        }
        
        function getAll() {
            return $this->articlesModel->selectAll();
        }
        
        
        function getArticleByUserId(){
            return $this->articlesModel->selectByUserId($_SESSION['user_id']);
        }
        
        function createItem() {
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
            
            if (!empty($_POST['title']) && !empty($_POST['content'])) {
                $_POST['main_image_url'] = NULL;
                if(!empty($_FILES['main_image_url'])){
                    $file = $_FILES['main_image_url'];
                    move_uploaded_file($file["tmp_name"], "../../blog/uploads/" . $file["name"]);
                    $_POST['main_image_url'] = $file["name"];
                }
                
                return $this->articlesModel->insertItem($_POST);
            } else {
                return "All fields are required";
            }
        }
        
        function editItem() {
            
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
             if (!empty($_POST['title']) && !empty($_POST['content'])) {
                $_POST['main_image_url'] = null;
                if(!empty($_FILES['main_image_url'])){
                    $file = $_FILES['main_image_url'];
                    move_uploaded_file($file["tmp_name"], "../../blog/uploads/" . $file["name"]);
                    $_POST['main_image_url'] = $file["name"];
                
         }
         return $this->articlesModel->updateItem($_POST);
        }
        }   
        function deleteItem() {
            
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
            

            return $this->articlesModel->deleteItem($_POST);
        }
    }