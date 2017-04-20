/* global $*/
/* global Comments*/

function Comments(){
	this.models = [];
}
Comments.prototype.getAll = function() {

	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/comments",
		method: "GET",
		success: function(resp) {
			$.each(resp, function(i, comments){
				var comment = new Comments();
				// console.log(resp);
				that.models.push(comments);
				// console.log(articles);
			});
			
		},
		error: function(){
			console.log("Something went wrong while getting the comments");
		}
	};
	return $.ajax(config);
};

Comments.prototype.addComment = function(userData) {
	var formData = new FormData();
	formData.append("article_id", userData.currentArticleId);
	formData.append("title", userData.title);
	formData.append("content", userData.content);
	formData.append("user_id", userData.user_id);


	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/comments/add",
		method: "POST",
		data: formData,
		processData:false,        
		contentType: false,
		success: function(resp) {
			if (resp) {
            that.isCreated = resp.isCreated || false;
            }
		},
		error:  function(xhr, status, error) {
            alert("error");
		},
		complete: function(){
            console.log("The request is complete");
        }
	};
	
	return $.ajax(config);
};