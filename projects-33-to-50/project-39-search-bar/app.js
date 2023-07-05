var searchBar = document.getElementById("searchBar")
var list = document.getElementById("list")

searchBar.addEventListener("input", () => {
    var items = list.getElementsByTagName('li')
    Array.from(items).forEach((item) => {
        var itemName = item.textContent.toLowerCase();
        if(searchBar.value == '' || itemName.includes(searchBar.value.toLowerCase())) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
})
