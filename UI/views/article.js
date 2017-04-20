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
    var currentArticleId = getUrlParam("id");

    
    var articles = new Articles();
    // console.log(article);
    articles.getAll().done(function(){
		for(var i = 0; i<articles.models.length; i++) {
		    if(articles.models[i].id === currentArticleId){
		        // console.log(articles.models[i]);
		        
		      //  generate article
		      var articleCont = $("#article");
		      
		      if(articles.models[i].main_image_url){
		          //article with image
		          //console.log(articles.models[i].main_image_url)
		        var article = $("<div class='background2' id='article_"+articles.models[i].id+"'></div>");
		        var articleContainer =$("<div class='articleContainer' data-value='" + articles.models[i].id+"' id='"+articles.models[i].id + "'></div>");
		        var rowTitle =$("<div class='row' id='"+articles.models[i].title+"'></div>");
				articleContainer.append(rowTitle);
				var titleDiv = $("<div class='titleDiv' id='"+articles.models[i].title+"_"+articles.models[i].id+"'></div>");
				rowTitle.append(titleDiv);
				var title = $("<h3 class='title'>"+articles.models[i].title+"</h3>");
				titleDiv.append(title);
				// title.html(articles.models[i].title);
				var rowImageContent = $("<div class='row' id='"+articles.models[i].id+"_image_content"+"'></div>");
				var imageDiv = $("<div class='imageDiv'></div>");
					
				articleContainer.append(rowImageContent);
				var image = $("<img src='../../uploads/"+articles.models[i].main_image_url + "' class='artImage'></img>");
				imageDiv.append(image);
					
				rowImageContent.append(imageDiv);
				var verticalSeparator = $("<div class='verticalSeparator'></div>");
				rowImageContent.append(verticalSeparator);
				var contentDiv = $("<div class='contentDiv' id='content_"+articles.models[i].id+"'></div>");
				rowImageContent.append(contentDiv);
				var articleContent = $("<p class='content' id='content_"+articles.models[i].id+"_txt'>"+articles.models[i].content+"</p>");
				contentDiv.append(articleContent);
				article.append(articleContainer);
				articleCont.append(article);
		      }
		      else{
		          //article without image
		          var noImgArticle = $("<div class='background2' id='article_"+articles.models[i].id+"'><?div>");
				var noImgArticleContainer = $("<div class='articleContainer' data-value='" + articles.models[i].id+"' id='"+articles.models[i].id + "'></div>");
				noImgArticle.append(noImgArticleContainer);
				var noImgRowTitle = $("<div class='row' id='"+articles.models[i].title+"'></div>");
				noImgArticleContainer.append(noImgRowTitle);
				var noImgTitleDiv = $("<div class='titleDiv' id='"+articles.models[i].title+"_"+articles.models[i].id+"'></div>");
				noImgRowTitle.append(noImgTitleDiv);
				var noImgTitle = $("<h3 class='title'>"+articles.models[i].title+"</h3>");
				noImgTitleDiv.append(noImgTitle);
				var rowContent = $("<div class='row' id='"+articles.models[i].id+"_image_content"+"'></div>");
				noImgArticleContainer.append(rowContent);
				var noImgContentDiv = $("<div class='contentDiv1' id='content_"+articles.models[i].id+"'></div>");
				rowContent.append(noImgContentDiv);
				var noImgContent = $("<p class='content' id='content_"+articles.models[i].id+"_txt'>"+articles.models[i].content+"</p>");
				noImgContentDiv.append(noImgContent);
		          articleCont.append(noImgArticle);
		          
		      }
		      
		    }
		    
		};
    });
    
}