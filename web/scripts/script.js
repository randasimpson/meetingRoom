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

// $(".flex-container").onscroll(function(){
//   var x = $("flex-container").offset();
//   if (x === 0) {
//     $(".flex-container").css($(".sticky-container"))
//   }
// })

const filter = document.querySelector("#searchbar");
const topOfFilter = filter.offsetTop;

function fixedFilter () {
  if (window.scrollY >= topOfFilter) {
    // document.style.paddingTop = filter.offsetHeight + 'px';
    document.querySelector("#searchbar").classList.add("sticky-container")
    document.querySelector("#searchbar").classList.remove("flex-container");
  } else {
    // document.style.paddingTop = 0;
    document.querySelector("#searchbar").classList.add("flex-container")
    document.querySelector("#searchbar").classList.remove("sticky-container");
  }
}

window.addEventListener ('scroll', fixedFilter);

