/* global $*/

function Article(options){
  this.models =[];
}

Article.prototype.getAll = function(){
    var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/articles",
		method: "GET",
		success: function(resp) {
			$.each(resp, function(i, article){
				var articleById = new Article();
				that.models.push(article);
			});
		},
		error: function(){
			console.log("Something went wrong while getting the article");
		}
	};
	return $.ajax(config);
}
