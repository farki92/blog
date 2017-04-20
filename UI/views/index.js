/* global $ */;
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    console.log("HTML loaded.");

var farkasBlog = $(".img1");

farkasBlog.on("mouseover", onMouseOver);
farkasBlog.on("mouseout", onMouseOut);

function onMouseOver(){
        farkasBlog.animate({width: "45%"});

}
function onMouseOut(){
        farkasBlog.animate({width: "40%"});
}

farkasBlog.on("click", redirect);

function redirect(){
    window.location.href = "https://web9-farki92.c9users.io/blog/UI/pages/articles.html";
}

}