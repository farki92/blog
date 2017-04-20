/*global $*/
/*global Comments*/
/*global Account*/

$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view
 function onHtmlLoaded(){
        function getUrlParam(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
          return null;
        }
        else{
          return results[1] || 0;
        }
    }
    var currentArticleId = getUrlParam("id");
     // console.log(sessionStorage.getItem("user_id"))
    var commContainer = $("#commentsContainer");
     
     var submitBtn = $("#submit_comment");
     submitBtn.on('click', submitComment);
    
     function reloadPage(){
      window.location.reload();
     }
     
 
     
     
     function submitComment(){
      var commentTitle = $("#comment_title").val();
      var content = $("#write_comment").val();
      var user_id = sessionStorage.getItem("user_id");
      var error;
      
      if(commentTitle != "" && content != "" && user_id != null){
       error = 0;
      }
      else{
       error = 1;
       alert("To add a comment log in and complete all of the fields.")
      }
      if(error === 0){
        var commentModel = new Comments();
        
        var createReq = commentModel.addComment({
         currentArticleId: currentArticleId,
         title: commentTitle,
         content: content,
         user_id: user_id,
        })
        // window.location.reload();
      }
      
    createReq.done(reloadPage);
     }
     

     var comments = new Comments();
	comments.getAll().done(function(){
	    for(var i = 0; i<comments.models.length; i++) {
	           // generate comments here
	           // console.log(comments.models[i]);
	           
	           if(currentArticleId === comments.models[i].article_id){
	           var cont = $("<div class='background2' id='"+comments.models[i].title+comments.models[i].id+"'></div>");
	           commContainer.append(cont);
	           var paragraphContainer = $("<div class='row'><div class='deleteDiv' id='paraCont_"+comments.models[i].id+"'><p class='content2' id='title"+comments.models[i].id+"'>"+comments.models[i].title+"  -  "+comments.models[i].creation_date+"</p><p class='content background2 paddingleft' id=content_"+comments.models[i].id+">"+comments.models[i].content+"</p></div></div>");
	           cont.append(paragraphContainer);
	           var deleteDiv = $("<div class='row'><div class='deleteDiv right' id='delete_comment_"+comments.models[i].id+"'><input type='button' name='delete' id='deleteCommNr_"+comments.models[i].id+"' class='box2' value='Delete' /></div></div>");
	            cont.append(deleteDiv);


	           
	       }
	       
	       
	    }
	   
	})

     function deleteComment(id){
      var element = document.getElementById(id);
      console.log(element)
     }
 }