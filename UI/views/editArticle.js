/*global $*/
/*global Article*/
/*global Articles*/
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
    
    function reload(){
      window.location.replace("https://web9-farki92.c9users.io/blog/UI/pages/myArticles.html");
    }
    var currentArticleId = getUrlParam("id");
	var articleCont = $("#article");

    var articleTitle = $("#updateArticleTitle");
    var articleContent = $("#updateArticleContent");
    // add src to this
    var articleImage = $("#articleImage");
    var saveBtn = $("#save");
    var articleWithImage = $("#articleWithImage");
    var picture;
    var article_id;
    var articleUserId;
    // var articleWithoutImage = $("#articleWithoutImage");
    // var noImgupdateArticleTitle = $("#noImgarticleTitle");
    // var noImgcategory = $("#noImgcategory");
    // var noImgupdateArticleContent = $("#noImgarticleContent");
    // var noImgupdateArticleImage = $("#noImgupdateArticleImage");
    // var noImgPublished = $("#noImgpublished");
    // var noImgSave = $("#noImgsave");
    
    
    var articles = new Articles();
    // console.log(article);
    articles.getAll().done(function(){
		for(var i = 0; i<articles.models.length; i++) {
		  
		    if(articles.models[i].id === currentArticleId){
		        

		//         // console.log(articles.models[i]);
		        article_id = articles.models[i].id;
		        articleUserId = articles.models[i].user_id;
		//       //  generate article
		      if(articles.models[i].main_image_url == null){
		    	
		      	// megkeresni az eldugnivalot s eldugni
		      	var hide = $("#hide");
		      	var hide2 =$("#hide2");
		      	var hide3 = $("#hide3");
		      	var toggle = $("#toggle");
		      	
		      	hide.toggleClass("hide");
		      	hide2.toggleClass("hide");
		      	hide3.toggleClass("hide");
		      	toggle.removeClass("contentDiv");
		      	toggle.addClass("contentDiv1");
		      	
		      	
		      }
		    	articleTitle.val(articles.models[i].title);
		      	if(articles.models[i].main_image_url){
		      	  articleImage.attr('src', "../../uploads/"+articles.models[i].main_image_url);
		      	  picture = articles.models[i].main_image_url;
		      	}
		      	articleContent.val(articles.models[i].content);
		      	
		      
		    }
		    
		    
		};
    });
    saveBtn.on("click", saveArticle);
    var userId = sessionStorage.getItem("user_id");
    var isLogged = sessionStorage.getItem("isLogged");
    function saveArticle(){
        var updateArticleTitle = $("#updateArticleTitle").val();
        var updateArticleContent = $("#updateArticleContent").val()
        var updateArticleImage = $("#updateArticleImage");
        var published = $("#published").val();
        var category = $("#category").val()

    
    
    	if(isLogged === "true" && userId === articleUserId){
        // console.log("ide jon a picture");
        var updateArticle = new Articles();
        
    	  var updateReq = updateArticle.update({
    		// tbd
    		img: updateArticleImage[0].files[0],
    		title: updateArticleTitle,
    		content: updateArticleContent,
    		category_id: category,
    		article_id: article_id,
    		published: published,
    	})
    	updateReq.done(reload);
    	}
    	else{
    	  alert("You are not allowed to edit this article");
    	  window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/articles.html"
    	}
      
    }
    	
    
	
}