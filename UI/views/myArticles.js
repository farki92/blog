/*global $*/
/*global Articles*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view



function onHtmlLoaded() {
	
	
	

	var articles = new Articles();
	articles.getAll().done(function(){
	var container = $("#articles");
	var userId = sessionStorage.getItem("user_id");
	var published;
		
		for(var i = 0; i<articles.models.length; i++) {
			// var noImgCommentsBtn;
		
			
			if(articles.models[i].user_id === userId){
			if(articles.models[i].published === "1"){
				published = "Published"
			}
			else{
				published = "Private";
			}
			if (articles.models[i].main_image_url) {
				
				var article = $("<div class='background2' id='article_"+articles.models[i].id+"'></div>");
				var articleContainer = $("<div class='articleContainer' data-value='" + articles.models[i].id+"' id='"+articles.models[i].id + "'></div>");
				var rowTitle =$("<div class='row' id='"+articles.models[i].title+"'></div>");
				articleContainer.append(rowTitle);
				var titleDiv = $("<div class='titleDiv' id='"+articles.models[i].title+"_"+articles.models[i].id+"'></div>");
				rowTitle.append(titleDiv);
				var title = $("<h3 class='title'>"+articles.models[i].title+"</h3><a class='paddingleft'>"+published+"</a>");
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
				var commentsRow = $("<div class='row' id='"+articles.models[i].id+"_commentsButtonRow'></div>");
				articleContainer.append(commentsRow);
				var horizontalSeparator = $("<div class='horizontalSeparator2' id='comments_separator_"+articles.models[i].id+"'><input type='button' class='box2' data-value='"+articles.models[i].id+"' onclick='deleteArticle("+articles.models[i].id+")' value='Delete'/></div>");
				commentsRow.append(horizontalSeparator);
				var comments = $("<div class='viewArt2' id='"+articles.models[i].id+"_comments'></div>");
				commentsRow.append(comments);
				var commentsBtn = $("<input type='button' class='box2' data-value='"+articles.models[i].id+"' onclick='goToArticlePage("+articles.models[i].id+")' name='button' value='Edit' id='view_"+articles.models[i].id+"'?/>");
				comments.append(commentsBtn);
				article.append(articleContainer);
				container.append(article);
				
			}

			else{
				var noImgArticle = $("<div class='background2' id='article_"+articles.models[i].id+"'><?div>");
				var noImgArticleContainer = $("<div class='articleContainer' data-value='" + articles.models[i].id+"' id='"+articles.models[i].id + "'></div>");
				noImgArticle.append(noImgArticleContainer);
				var noImgRowTitle = $("<div class='row' id='"+articles.models[i].title+"'></div>");
				noImgArticleContainer.append(noImgRowTitle);
				var noImgTitleDiv = $("<div class='titleDiv' id='"+articles.models[i].title+"_"+articles.models[i].id+"'></div>");
				noImgRowTitle.append(noImgTitleDiv);
				var noImgTitle = $("<h3 class='title'>"+articles.models[i].title+"</h3><a class='paddingleft'>"+published+"</a>");
				noImgTitleDiv.append(noImgTitle);
				var rowContent = $("<div class='row' id='"+articles.models[i].id+"_image_content"+"'></div>");
				noImgArticleContainer.append(rowContent);
				var noImgContentDiv = $("<div class='contentDiv1' id='content_"+articles.models[i].id+"'></div>");
				rowContent.append(noImgContentDiv);
				var noImgContent = $("<p class='content' id='content_"+articles.models[i].id+"_txt'>"+articles.models[i].content+"</p>");
				noImgContentDiv.append(noImgContent);
				var noImgCommentsRow = $("<div class='row' id='"+articles.models[i].id+"_commentsButtonRow'></div>");
				noImgArticleContainer.append(noImgCommentsRow);
				var noImgHorizontalSeparator = $("<div class='horizontalSeparator2' id='comments_separator_"+articles.models[i].id+"'><input type='button' class='box2' data-value='"+articles.models[i].id+"' onclick='deleteArticle("+articles.models[i].id+")' value='Delete'/></div>");
				noImgCommentsRow.append(noImgHorizontalSeparator);
				var noImgComments = $("<div class='viewArt2' id='"+articles.models[i].id+"_comments'></div>");
				noImgCommentsRow.append(noImgComments);
				var noImgCommentsBtn = $("<input type='button' data-value='"+articles.models[i].id+"' onclick='goToArticlePage("+articles.models[i].id+")' class='box2' name='button' value='Edit' id='view_"+articles.models[i].id+"'?/>");
				noImgComments.append(noImgCommentsBtn);
				
				container.append(noImgArticle);

			}
}
			// commentsBtn.on("click", goToArticlePage);
			// noImgCommentsBtn.on("click", goToArticlePage);
			
		}	
	});
}

function goToArticlePage(currentArticleId) {
	// var currentArticleId = $(this).attr("data-value");
	// ezt ki kell cserelni
	window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/editArticle.html?id="+currentArticleId;
}

function deleteArticle(id){
	var removeItem = new Articles();
	var deleteReq = removeItem.removeArticle(id);
	deleteReq.done(function(){
		window.location.reload(true);
	})
}
