<?php
    require "app/models/ContactModel.php";
    
    class Contact {
        private $contactModel;
        
        function __construct() {
            $this->contactModel = new ContactModel();   
        }
        
        function createItem(){
            if(!empty($_POST['email']) && !empty($_POST['content'])){
                return $this->contactModel->insertItem($_POST);
            
        }
        else{
                return "All fields required";
            }
        
        }
    }