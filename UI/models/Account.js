/* global $*/
/* global Account*/

function Account(){
	this.models = [];
}

// get all accounts
Account.prototype.getAll = function() {

	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/accounts",
		method: "GET",
		success: function(resp) {
			$.each(resp, function(i, accounts){
				var account = new Account();
				// console.log(resp);
				that.models.push(accounts);
				// console.log(articles);
			});
			
		},
		error: function(){
			console.log("Something went wrong while getting the Account");
		}
	};
	return $.ajax(config);
};



Account.prototype.getUserById = function(){
	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/getUserById",
		method: "GET",
		success: function(resp) {
			$.each(resp, function(i, user){
				var userById = new Account();
				that.models.push(user);
			});
			
		},
		error: function(){
			console.log("Something went wrong while getting the user");
		}
	};
	return $.ajax(config);
};

Account.prototype.updateUser = function(userData) {
	var formData = new FormData();
	formData.append("first_name", userData.first_name);
	formData.append("last_name", userData.last_name);
	formData.append("email", userData.email);
	formData.append("gender", userData.gender);
	formData.append("profile_picture", userData.profile_picture);
	formData.append("nick_name", userData.nick_name);
	formData.append("age", userData.age);
	formData.append("id", userData.user_id);

	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/account/update",
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

Account.prototype.createUser = function(userData) {
	var formData = new FormData();
	formData.append("email", userData.newEmail);
	formData.append("pass", userData.newPass);


	var that = this;
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/account/create",
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