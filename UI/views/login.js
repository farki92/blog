/* global $ */
/* global Login */
/* global Account */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var loginBtn = $("#login_btn");
    var loginModel;
    loginBtn.on("click", function() {
        
        var emailValue = $("[name='email']").val();
        var passValue = $("[name='pass']").val();
        
        loginModel = new Login({
            email: emailValue,
            pass: passValue
        });
        var loginReq = loginModel.signIn();
        loginReq.done(redirectUserToArticlesPage);
        // console.log(loginModel.isLogged)
    });
    function redirectUserToArticlesPage() {
        if (loginModel.isLogged) {
     
            window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/articles.html";
            
        }   
        else{
            $("#login_failed").removeClass("hideLogin");
        }
    }
    
}
