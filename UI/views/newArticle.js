/* global $*/
/* global Articles*/

$(document).ready(onHtmlLoaded);
function onHtmlLoaded() {
    $("#save_article").on("click", function(){
        var category = $("#category").val();
        // console.log(category.val());
        
        var articleTitle = $("input[name='title']").val();
        var articleContent = $("textarea[name='content']").val();
        var imgFile = $("#article_file")[0].files[0];
        
        var articles = new Articles();
        var saveOperation = articles.save({
            title: articleTitle,
            content: articleContent,
            img: imgFile,
            category_id: category,
        });
        saveOperation.done(redirectUserToArticlesPage);
    });
    
    function redirectUserToArticlesPage() {
        window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/articles.html";
    }
}