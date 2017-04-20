/* global $ */

function Login(options) {
    this.email = options.email,
    this.pass = options.pass

}


Login.prototype.signIn = function(userData){
  
    var that = this;
    var config = {
        url: "https://web9-farki92.c9users.io/blog/api/login",
        method: "POST",
        data: {
            email:this.email,
            pass:this.pass
            
        },
        dataType: "json",
        success: function(resp){
            if(resp){
            that.isLogged = resp.isLogged || false;
            // console.log(resp.user_id);
                sessionStorage.setItem("isLogged", resp.isLogged);
                sessionStorage.setItem("user_id", resp.user_id);
                
            }
        },
        error: function(xhr, status, error) {
            alert("Oops!Something is wrong " + error);
        },
        complete: function(resp){
            console.log("The request is complete");
            // sessionStorage.setItem("user_id", resp.user_id);
        //   console.log(resp)
        }
    };
    // singIn method will return the jqXHR object returned by
    // the ajax request

    // console.log($.ajax(config));
    return $.ajax(config);
};

Login.prototype.logout = function(){
	var config = {
		url: "https://web9-farki92.c9users.io/blog/api/logout",
		method: "GET",
		success: function() {
			console.log("Logged out.");
			
		},
		error: function(){
			console.log("Something went wrong while getting the user");
		}
	};
	return $.ajax(config);
};