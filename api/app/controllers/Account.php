<?php
    require "app/models/UsersModel.php";
    
    class Account {
        private $usersModel;
        
        function __construct() {
            $this->usersModel = new UsersModel();   
        }
        
        function getAll(){
            return $this->usersModel->selectAll();
        }
        
        function getUserById(){
            return $this->usersModel->selectUserById($_SESSION['user_id']);
        }
        
        function createItem() {

            if (!empty($_POST['email']) && !empty($_POST['pass'])) {
                
                $salt = PASS_SALT;
                
                $pass = crypt($_POST['pass'], $salt);
   
                return $this->usersModel->insertItem($_POST, $pass);
            } else {
                return "All fields are required";
            }
        }
        
        function editItem() {
            
            if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
                http_response_code(401);
                return array("error"=>"Unauthorized. You have to be logged.");
            }
                // global $REQUEST;
            if(!empty($_POST['id'])){
                
               
                $_POST['profile_picture'] = NULL;
                if(!empty($_FILES['profile_picture'])){
                    $file = $_FILES['profile_picture'];
                    move_uploaded_file($file["tmp_name"], "../../blog/uploads/" . $file["name"]);
                    $_POST['profile_picture'] = $file["name"];
                }
                return $this->usersModel->updateItem($_POST);
            }
        }
        function login() {
            if (!empty($_POST["email"]) && !empty($_POST["pass"])) {
                $pass = crypt($_POST["pass"], PASS_SALT);
                $usersModel =  new UsersModel();
                $user = $usersModel->checkUser($_POST["email"], $pass);
                $userId = $usersModel->checkUser($_POST["email"], $pass)['id'];
                $last_login = $usersModel->updateLoginTime($_POST["email"], $pass);
                
                if (is_array($user)) {
                    
                    $_SESSION["user_id"] = $userId;
                    $_SESSION["isLogged"] = TRUE;
                    // $_SESSION["name"] = $user["first_name"] . " " . $user["last_name"];
                    
                    return array("isLogged" => $_SESSION["isLogged"], "user_id"=>$_SESSION["user_id"]);
                
                    
                } else {
                    return array("error" => "Invalid credentials.");
                }
                
            } else{
                return array("error" => "Empty credentials.");    
            }
        }
        
        function logout() {
            unset($_SESSION["isLogged"]);
            unset($_SESSION["user_id"]);
            session_destroy();
            
            return array("success"=>TRUE);
        }
    }