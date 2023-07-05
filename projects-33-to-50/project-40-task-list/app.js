var searchBar = document.getElementById("searchBar")
var list = document.getElementById("list")
var button = document.getElementById("button")

button.addEventListener("click", () => {
    var item = document.createElement("li")
    var text = item.appendChild(document.createTextNode(searchBar.value))

    var itemButton = document.createElement("button")
    itemButton.setAttribute("id", "button" + searchBar.value);
    itemButton.setAttribute("class", "removeButtons");
    itemButton.appendChild(document.createTextNode(""));
    itemButton.addEventListener("click", () => {
        item.parentNode.removeChild(item)
    })

    item.appendChild(itemButton)
    list.appendChild(item)
})




