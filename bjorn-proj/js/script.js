$(function() {//Same as document.addEventListener("DOMContent"...
    //Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $(".navbar-toggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse("hide");
        }
    });
});

(function(global) {
    var bp = {}; //bp = Björn Proj

    var homeHtml = "snippets/home-snippet.html";

    //Convinience function for inserting innerHTML for 'select'
    var insterHtml = function(selector, html) {
        var targetElm = document.querySelector(selector);
        tergetElm.innerHTML = html;
    };


})(window);