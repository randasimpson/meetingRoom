// When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// Get the navbar
// var searchbar = document.getElementByClass("searchbar");

// Get the offset position of the navbar
// var sticky = searchbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     searchbar.classList.add("sticky")
//   } else {
//     searchbar.classList.remove("sticky");
//   }
// }

$(".flex-container").onscroll(function(){
  var x = $("flex-container").offset();
  if (x === 0) {
    $(".flex-container").css($(".sticky-container"))
  }
})
