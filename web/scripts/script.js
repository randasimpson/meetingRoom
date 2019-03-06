

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

