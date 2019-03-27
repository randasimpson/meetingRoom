
// filter bar scroll adjustment
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



// debounce
// var debouncedFilter = debounce(function() {
//   filterPageContent();
// }, 200);

//  $('#filter-page-contents').on('input', function() {
//     debouncedFilter();
// });

//clear filter
// function clearFilter(){
//   $(#"clearField").click(function(){
    
//   })
// }

 
//filter via roomNumber
// function filterPageContent(){
//   let roomValue = roomNumber.val()
//     if (roomValue >= ) {
//       document.querySelector("#roomNumber").classList.add("hidden")
//    } else {
//       document.querySelector("#roomNumber").classList.remove("hidden")
//    }
// }

//filter via floorNumber
// function filterPageContent(){
//   let floorValue = floorNumber.val()
//     if (floorValue >= ){
//       document.querySelector("#floorNumber").classList.add("hidden")
//   } else {
//      document.querySelector("#floorNumber").classList.remove("hidden")
//   }
// }

//filter via seatNumber
// function filterPageContent(){
//   let seatValue = seatNumber.val()
//     if (seatValue >= ){
//       document.querySelector("#searchbar").classList.add("hidden")
//   } else {
//      document.querySelector("#seatNumber").classList.remove("hidden")
//   }
// }


//     if (inputValue === '') {
//         showPageContent();
//     }
// }







