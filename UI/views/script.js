/*global $*/
/*global Login*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view
function onHtmlLoaded(){
	var signIn = $("#signin_txt");
	var signout = $("#signout_txt");
	var logged = sessionStorage.getItem("isLogged");
	
	// show/hide sign in/sign out
	signIn.on("click", function() {
	   window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/signin.html";
	});

	var myAccount = $("#myAccount");
	var myArticles = $("#myArticles");
	var createArticle = $("#createArticle");
	
		if(logged === "true"){
			
			signIn.addClass("hide");
			signout.removeClass("hide");
			
			
			signout.on("click", function(){
					sessionStorage.removeItem("isLogged");
					sessionStorage.removeItem("user_id");
					window.location.href="https://web9-farki92.c9users.io/blog/UI/pages/articles.html";
			});
			
			// console.log(logged);
		}
		
		createArticle.on("click", function() {
			if(logged != "true"){
			createArticle.attr("href", "https://web9-farki92.c9users.io/blog/UI/pages/signin.html");
			    alert("You have to be logged in to create an article.");
			}
		});
		
		myAccount.on("click", function() {
		    if(logged != "true"){
			myAccount.attr("href", "https://web9-farki92.c9users.io/blog/UI/pages/signin.html");
			    alert("You have to be logged in to view your account.");
			}
		});
		
		myArticles.on("click", function() {
		     if(logged != "true"){
			myArticles.attr("href", "https://web9-farki92.c9users.io/blog/UI/pages/signin.html");
			    alert("You have to be logged in to view your account.");
			}
		});
		
	// icon.on("click", showMenu);
	
	// function showMenu(){
	// 	menu.slideToggle(100);
	// }
	var home = $("#home");
	var articles =$("#articlesHeader");
	// var myArticles = $("#myArticles");
	// var createArticle = $("#createArticle");
	var createAccount = $("#createAccount");
	// var myAccount = $("#myAccount");
	var contact = $("#contact");

	

	
}