/* global $*/
/* global Article*/

function Articles(){
	this.models = [];
}

Articles.prototype.findArticleById = function(id) {
	var result;
	for (var i=0; i<this.models.length; i++) {
		if (this.models[i].id == id) {
			result = this.models[i];
		}
	}
	return result;
};
Articles.prototype.getAll = function() {

	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/articles",
		method: "GET",
		success: function(resp) {
			$.each(resp, function(i, articles){
				var article = new Articles();
				// console.log(resp);
				that.models.push(articles);
				// console.log(articles);
			});
			
		},
		error: function(){
			console.log("Something went wrong while getting the articles");
		}
	};
	return $.ajax(config);
};

Articles.prototype.removeArticle = function(articleId) {
	//here we will search for article model by id
	//and we remove it from models array and from 
	//server/localStorage
};

Articles.prototype.save = function(articleData) {
	//here we should save the new article to server
	var userId = sessionStorage.getItem("user_id");
	var formData = new FormData();
	formData.append("main_image_url",articleData.img);
	formData.append("title", articleData.title);
	formData.append("content", articleData.content);
	formData.append("user_id", userId);
	formData.append("category_id", articleData.category_id);
	formData.append("published", articleData.published);
	
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/articles/add",
		method: "POST",
		data: formData,
		processData:false,        // To send DOMDocument or non processed data file it is set to false
		contentType: false,
		success: function(resp) {
			console.log("all good");
		},
		error: function() {
			console.log("article was not added");
		}
	}
	
	return $.ajax(config);
}
Articles.prototype.update = function(articleData) {
	//here we should save the new article to server
	// var userId = sessionStorage.getItem("user_id");
	var formData = new FormData();
	formData.append("main_image_url",articleData.img);
	formData.append("title", articleData.title);
	formData.append("content", articleData.content);
	formData.append("category_id", articleData.category_id);
	formData.append("id", articleData.article_id);
	formData.append("published", articleData.published);
	
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/articles/edit",
		method: "POST",
		data: formData,
		processData:false,        // To send DOMDocument or non processed data file it is set to false
		contentType: false,
		success: function(resp) {
			console.log("all good");
		},
		error: function() {
			console.log("article was not updated");
		}
	}
	
	return $.ajax(config);
}