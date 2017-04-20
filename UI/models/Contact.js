/* global $*/
/* global Contact*/

function Contact(){
	this.models = [];
}
Contact.prototype.createMessage = function(userData) {
	var formData = new FormData();
	formData.append("email", userData.email);
	formData.append("content", userData.content);


	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/contact",
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