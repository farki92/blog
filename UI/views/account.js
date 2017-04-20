/*global $*/
/*global Account*/
/*global Login*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view

function onHtmlLoaded(){
        var first_name = $("#first_name");
        var last_name = $("#last_name");
        var email = $("#email");
        var gender = $("#gender");
        var age = $("#age");
        var nick_name = $("#nick_name");
        
        var userFirstName;
        var userLastName;
        var userEmail;
        var userGender;
        var userNickName;
        var userAge;
        
        
        var currentUser = new Account();
        currentUser.getUserById().done(function(){
            var userData = currentUser.models[0];
            // console.log(userData);
            var userInfoContainer = $("#user_info_container");
            var userPictureContainer = $("#profile_picture_container");
            // console.log(userData.id);
            if(userData.profile_picture != ""){
                var profilePicture = $("<img src='../../uploads/"+userData.profile_picture+"' class='artImage' alt='profilePicture'/>");
                userPictureContainer.append(profilePicture);
            }
            var userDataGender = "Female";
            if(userData.gender === "M"){
                userDataGender = "Male";
            }
          
            
            
            var titleContainer = $("#myAccountTitle");
            var firstName = $("<p id='first_name' class='title'>"+userData.first_name+"</p>");
            userFirstName = userData.first_name;
            var lastName = $("<p id='last_name' class='title'>"+userData.last_name+"</p>");
            userLastName = userData.last_name;
            var emailAdress = $("<p id='emailAdress' class='title'>"+userData.email+"</p>");
            userEmail = userData.email;
            var genDer = $("<p id='nem' class='title'>"+userDataGender+"</p>");
            userGender = userDataGender;
            var nickName = $("<p id='nickName' class='title'>"+userData.nick_name+"</p>");
            userNickName = userData.nick_name;
            var age = $("<p id='age' class='title'>"+userData.age+"</p>");
            userAge = userData.age;
            var myAccountTitle = $("<h3 class='title'>"+userData.email+"'s account settings</h3>");
            titleContainer.append(myAccountTitle); 
            userInfoContainer.append(firstName);
            userInfoContainer.append(lastName);
            userInfoContainer.append(emailAdress);
            userInfoContainer.append(genDer);
            userInfoContainer.append(nickName);
            userInfoContainer.append(age);
            
   });
   
    var updateBtn = $("#update");
    
    

    updateBtn.on("click", function(){
        var conf = confirm('Press "OK" to update your profile.');
        if(conf == true){
            var profile_picture = $("#profile_picture")[0].files[0];
            var user_id = sessionStorage.getItem("user_id");
            
            if(first_name.val() ===""){
                first_name.val(userFirstName);
            }
            if(last_name.val() ===""){
                last_name.val(userLastName);
            }
            if(email.val() ===""){
                email.val(userEmail);
            }
            if(nick_name.val() ===""){
                nick_name.val(userNickName);
            }
            if(age.val() ===""){
                age.val(userAge);
            }
        
        
        
            var updateUserModel = new Account();
            if(first_name.val()!="" || last_name.val()!="" || email.val()!="" || gender.val()!="" || nick_name.val()!="" || age.val()!="" ){
                var updateReq = updateUserModel.updateUser({
                  first_name: first_name.val(),
                  last_name: last_name.val(),
                  email: email.val(),
                  gender: gender.val(),
                  profile_picture: profile_picture,
                  nick_name: nick_name.val(),
                  age: age.val(),
                  user_id: user_id,
                });
                updateReq.done(function(){
                window.location.reload();
            });
            }
            else{
                alert("All fields are required to update user profile.");
            }
        } 
    });
    
    
    var createAccountBtn = $("#createAccount_btn");
    createAccountBtn.on("click", newUser);
    
    function newUser(){
        var newEmail = $("#newEmail").val();
        var newPass = $("#newPass").val();
        var rePass = $("#rePass").val();
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var invalid = $("#invalid");
        var passRegEx = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        var error;
        
       function validateEmail(email) {
        return emailRegEx.test(email);
    }
    function validatePass(pass){
        return passRegEx.test(newPass);
    }
    
    function redirect(){
        window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/articles.html";
    }
    
        if(validateEmail(newEmail)){
            invalid.html("");
            error = 0;
        }
        else{
            invalid.html("Please enter a valid e-mail adress.");
            error = 1;
        }
        if(validatePass(newPass) && validatePass(rePass)){
            invalid.html("");
            error = 0;
        }
        else{
            invalid.html("Your password should contain at least one number, one lower case character, one upper case character and should be at least 8 characters long.");
            error = 1;
        }
        if(newPass === rePass){
            invalid.html("");
            error = 0;
        }
        else{
            invalid.html("The 2 passwords you have entered don't match.");
            error = 1;
        }
        
      if(error === 0){
          var userModel = new Account();
          
          var createReq = userModel.createUser({
                  newEmail: newEmail,
                  newPass: newPass,
                });
                createReq.done(function(){
                window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/signin.html"
            });
          
      }
    
    }
    
}