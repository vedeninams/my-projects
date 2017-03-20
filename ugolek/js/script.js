$(function () { // Same as document.addEventListener("DOMContentLoaded"...
      // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
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
      // Solution: force focus on the element that the click event fired on
      // In Firefox and Safari
      $("#navbarToggle").click(function (event) {
              $(event.target).focus();
            }
      );
  }
);



document.addEventListener("DOMContentLoaded",
  function (event) {


    // myGetRequest = function () {
    $ajaxUtils.sendGetRequest("snippets/home-snippet.html", 
          function (request) {
            document.querySelector("#content-snippet")
            .innerHTML = request.responseText;
          }); 
    // var myObj ={};
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
                        html += "about.html";
                      }
                    }


                  if (targetId == "#jsmenu" || 
                    targetId == "#jshome"|| 
                    targetId == "#jsabout" ) {
                        $ajaxUtils.sendGetRequest(html, 
                        function (request) {
                        document.querySelector(selector)
                        .innerHTML = request.responseText;});
                  }
    }
// 


}); // addEventListener("DOMContentLoaded",

//////////////////////////
// document.addEventListener("DOMContentLoaded",
//   function (event) {
//     // myGetRequest = function () {
//     // $ajaxUtils.sendGetRequest(html, 
//     //       function (request) {
//     //         document.querySelector(selector)
//     //         .innerHTML = request.responseText;
//     //       }); 
//     // };
//     // var myObj ={};
//     document.onclick = function(event) {
//                   event = event || window.event;
//                   if (!event.target) {
//                     event.target = event.srcElement;
//                   }
//                   // console.log("MY ID after event.target.id - "+event.target.id); 
//                   var targetId ="#";

//                   if (event.target.id == "") {
//                     // console.log("Parent ID - "+event.target.parentNode.id);
//                     targetId += event.target.parentNode.id;
//                   } else {
//                     targetId += event.target.id;
//                     }
                  
    
//                   // console.log("2.2. after myObj.targetId - "+ targetId); 

//                   var selector = "#content-snippet";
//                   var html = "snippets/home-snippet.html";

//                   if (targetId == "#jsmenu") { html = "snippets/menu.html";}

//                   if (targetId == "#jsmenu" || 
//                     targetId == "#jsindex"|| 
//                     targetId == "#jsmenu" ) {
//                         $ajaxUtils.sendGetRequest(html, 
//                         function (request) {
//                         document.querySelector(selector)
//                         .innerHTML = request.responseText;});
//                   }
//     }
// // 


// }); // addEventListener("DOMContentLoaded",

