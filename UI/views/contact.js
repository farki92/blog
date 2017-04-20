/*global $*/
/*global Contact*/

$(document).ready(onHtmlLoaded);

function onHtmlLoaded(){
    
    var email = $("#email");
    var content = $("#content");
    var send = $("#send");
    
    send.on("click", sendMessage);
    
    function sendMessage(){
      
        if(email.val() != "" && content.val() != ""){
            var contactModel = new Contact();
            var messageReq = contactModel.createMessage({
               email: email.val(),
               content: content.val(),
            });
            messageReq.done(function(){
               alert("Your message has been sent.");
               window.location.replace("https://web9-farki92.c9users.io/blog/UI/pages/articles.html")
            });
            
        }
        else{
            alert("All fields required.")
        }
        
        
    }
    
}
