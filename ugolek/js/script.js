$(function () { 
      $("#navbarToggle").blur(function (event) {
              var screenWidth = window.innerWidth;
              if (screenWidth < 768) {
                        $("#collapsable-nav").collapse('hide');
                      }
            }
      );
      // In Firefox and Safari, the click event doesn't retain the focus
      // on the clicked button. Therefore, the blur event will not fire on
      // user clicking somewhere else in the page and the blur event handler
      // which is set up above will not be called.
      // So force focus on the element that the click event fired on
      // In Firefox and Safari
      $("#navbarToggle").click(function (event) {
              $(event.target).focus();
            }
      );
  }
);



document.addEventListener("DOMContentLoaded",
  function (event) {

    var insertHtml = function (selector, snip) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = snip;
    };

    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
    var snip = "<div class='text-center'>";
    snip += "<img src='images/ajax-loader-2.gif'></div>";
    insertHtml(selector, snip);
    };

    showLoading("#content-snippet");

    $ajaxUtils.sendGetRequest("snippets/home-snippet.html", 
          function (request) {
            document.querySelector("#content-snippet")
            .innerHTML = request.responseText;
          }); 

    document.onclick = function(event) {
                  event = event || window.event;
                  if (!event.target) {
                    event.target = event.srcElement;
                  }

                  var selector = "#content-snippet";
                  var targetId ="#";
                  var html = "snippets/";

                  if (event.target.id == "") {
                    targetId += event.target.parentNode.id;
                  } else {
                    targetId += event.target.id;
                    }

                  if (targetId == "#jsmenu") { 
                    html += "menu.html";} else {
                      if (targetId == "#jshome") {
                        html += "home-snippet.html";
                      } else { 
                          if (targetId == "#jsexample") {
                            html += "home-snippet.html"
                          } else {
                            html += "about.html";}
                          }
                      }
                 
                  if (targetId == "#jsmenu" || 
                    targetId == "#jshome"|| 
                    targetId == "#jsabout" ||
                    targetId == "#jsexample") {
                        $ajaxUtils.sendGetRequest(html, 
                        function (request) {
                        document.querySelector(selector)
                        .innerHTML = request.responseText;});
                  }}
});