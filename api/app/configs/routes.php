<?php
    // ARTICLES
    // get all articles
    $routes['/articles'] = array("class"=>"Articles", "method"=>"getAll");
    
    // get an article by id
    $routes['/articleById'] = array("class"=>"Articles", "method"=>"getArticleById");
    
    // get article by user id
    $routes['/articleByUserId'] = array("class"=>"Articles", "method"=>"getArticleByUserId");
    
    // create an article
    $routes['/articles/add'] = array("class"=>"Articles", "method"=>"createItem");
    
    // edit an article
    $routes['/articles/edit'] = array("class"=>"Articles", "method"=>"editItem");
    
    // delete an article
    $routes['/articles/delete'] = array("class"=>"Articles", "method"=>"deleteItem");
    
    
    // COMMENTS
    // get all comments
    $routes['/comments'] = array("class"=>"Comments", "method"=>"getAll");
    
    // get comments by articleId
    $routes['/commentsByArticleId'] = array("class"=>"Comments", "method"=>"commentsByArticleId");
    
    // create a comment
    $routes['/comments/add'] = array("class"=>"Comments", "method"=>"createItem");
    
    // edit a comment
    $routes['/comments/edit'] = array("class"=>"Comments", "method"=>"editItem");
    
    // delete a comment
    $routes['/comments/delete'] = array("class"=>"Comments", "method"=>"deleteItem");


    // account
    // login
    $routes['/login'] = array("class"=>"Account", "method"=>"login");
    // logout
    $routes['/logout'] = array("class"=>"Account", "method"=>"logout");
    // create account
    $routes['/account/create'] = array("class"=>"Account", "method"=>"createItem");
    // update account
    $routes['/account/update'] = array("class"=>"Account", "method"=>"editItem");
    // get accounts
    $routes['/accounts'] = array("class"=>"Account", "method"=>"getAll");
    // get account byUserId
    $routes['/getUserById'] = array("class"=>"Account", "method"=>"getUserById");
    
    
    // contact
    $routes['/contact'] =array("class"=>"Contact", "method"=>"createItem");
    

