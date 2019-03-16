
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

 
//filter content
// function filterPageContent(){
//     let inputValue = $('#filter-page-contents').val().toLowerCase();
//     clearPageContent();
//     let results = [];
//     for (let i = 0; i < contentBlob.sections.length; i++) {
//         if(contentBlob.sections[i].header) {
//             if(contentBlob.sections[i].header.htmlSection === true) {
//                 let htmlResults = filterHTML(contentBlob.sections[i].targets, inputValue);
//                 results = results.concat(htmlResults)
//             } else {
//                 let navCardResults = filterNameAndDescription(contentBlob.sections[i].targets, inputValue);
//                 results = results.concat(navCardResults);
//             }
//         }
//     }
//     if (results) {
//         for(var i = 0; i < results.length; i++) {
//             if(results[i].html) {
//                 showFilteredContent(results[i].name, 'htmlsec-');
//             } else {
//                 showFilteredContent(results[i].name, 'navcard-');
//             }
//         }
//     }
//     if (inputValue === '') {
//         showPageContent();
//     }
// }

//clear filter
// $('#reset-navcard-filter').click(function() {
//     showPageContent();
// });


// function filterNameAndDescription(content, filterInput) {
//     let results = content.filter(function(item) {
//         let stringExistsInHeadingName = filterExistingContent(item.name.toLowerCase(), filterInput);
//         let stringExistsInDescription = filterExistingContent(item.desc.toLowerCase(), filterInput);
//         return stringExistsInDescription || stringExistsInHeadingName;
//     });
//     return results;
// }


// function filterHTML(content, filterInput) {
//     let results = content.filter(function(item) {
//         return filterExistingContent(item.html.toLowerCase(), filterInput);
//     })
//     return results;
// }


// function filterExistingContent(PageContentItem, filterString) {
//     return PageContentItem.includes(filterString);
// }
 
//add IDs
// function buildElementID(elementName = 'missing_name') {
//     return elementName.replace(/ /g, '_').toLowerCase();
// }

// function showFilteredContent(elementName, idString) {
//     let elementID = buildElementID(elementName);
//     $('#'+idString+elementID).removeClass('hidden');
//     $('#'+idString+elementID).parents('.nav-section').removeClass('hidden');
// }

//clear data
// function clearPageContent() {
//     $('.nav-card').parent().addClass('hidden');
//     $('.html-section').addClass('hidden');
//     $('.nav-section').addClass('hidden');
// }

//pull back in data
// function showPageContent() {
//     $('.nav-card').parent().removeClass('hidden');
//     $('.html-section').removeClass('hidden');
//     $('.nav-section').removeClass('hidden');
// }