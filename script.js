// Function to show the relevant category when a button is clicked
function showCategory(category) {
    // Hide all categories
    const categories = document.querySelectorAll(".category")
    categories.forEach(function (section) {
        section.style.display = "none"
    })
  
    // Show the selected category
    const selectedCategory = document.getElementById(category)
    if (selectedCategory) {
        selectedCategory.style.display = "block"
    }
}

// Sorting function for papers
function sortPapers() {
    const paperList = document.getElementById("paper-list")
    const sortOrder = document.getElementById("paper-sort").value
    sortList(paperList, sortOrder)
}

// Sorting function for journals
function sortJournals() {
    const journalList = document.getElementById("journal-list")
    const sortOrder = document.getElementById("journal-sort").value
    sortList(journalList, sortOrder)
}

// Sorting function for patents
function sortPatents() {
    const patentList = document.getElementById("patent-list")
    const sortOrder = document.getElementById("patent-sort").value
    sortList(patentList, sortOrder)
}

// Sorting function for copyrights
function sortCopyrights() {
    const copyrightList = document.getElementById("copyright-list")
    const sortOrder = document.getElementById("copyright-sort").value
    sortList(copyrightList, sortOrder)
}

// Sorting function for papers
function sortBook() {
    const bookList = document.getElementById("book-list")
    const sortOrder = document.getElementById("book-sort").value
    sortList(bookList, sortOrder)
}

// Generic sorting function
function sortList(list, order) {
    const items = Array.from(list.children)
    items.sort(function (a, b) {
        const yearA = parseInt(a.getAttribute("data-year"))
        const yearB = parseInt(b.getAttribute("data-year"))
    
        if (order === "asc") {
            return yearA - yearB
        } else {
            return yearB - yearA
        }
    })

    // Append the sorted items back to the list
    items.forEach(function (item) {
        list.appendChild(item)
    })
}




document.addEventListener("DOMContentLoaded", function () {
    // Ensure all links open in a new tab
    const links = document.querySelectorAll("a");
    links.forEach(function (link) {
        link.setAttribute("target", "_blank");
    });

    // document.querySelectorAll('.download-button').forEach(button => {
    //     button.addEventListener('click', function() {
    //         const url = this.getAttribute('data-url');
    //         window.open(url, '_blank');
    //     });
    // });
    

    // Initially show the default category (e.g., 'about')
    showCategory("about");

    // Sort all document lists in ascending order
    const sortOrders = {
        "paper-sort": "desc",
        "journal-sort": "desc",
        "patent-sort": "desc",
        "copyright-sort": "desc",
        "book-sort": "desc"
    };

    Object.entries(sortOrders).forEach(([sortId, order]) => {
        const listId = sortId.replace("-sort", "-list");
        const list = document.getElementById(listId);
        if (list) {
            sortList(list, order);
        }
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     // Initially, show the default category (e.g., 'about')
//     showCategory("about");

//     // Sort all document lists in ascending order
//     const sortOrders = {
//         "paper-sort": "desc",
//         "journal-sort": "desc",
//         "patent-sort": "desc",
//         "copyright-sort": "desc",
//         "book-sort": "desc"
//     };

//     Object.entries(sortOrders).forEach(([sortId, order]) => {
//         const listId = sortId.replace("-sort", "-list");
//         const list = document.getElementById(listId);
//         if (list) {
//             sortList(list, order);
//         }
//     });
// });

// // Initially, no category is displayed
// document.addEventListener("DOMContentLoaded", function () {
//     showCategory("about")
// })

