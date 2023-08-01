function chooseImage(image) {
    image.classList.add("selected");
    document.querySelector(".overlay").style.display = "block";
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("group1")) {
        const clickedImage = event.target;
        const enlargedImage = document.createElement("img");
        enlargedImage.classList.add("enlarged");
        enlargedImage.src = clickedImage.src;
        document.querySelector("container").appendChild(enlargedImage);
        document.querySelector(".overlay").style.display = "block";
        setTimeout(function() {
            enlargedImage.style.opacity = 1;
        }, 80);
    } else if (!event.target.classList.contains("enlarged")) {
        const enlargedImage = document.querySelector(".enlarged");
        if (enlargedImage) {
            enlargedImage.remove();
            document.querySelector(".overlay").style.display = "none";
        }
    }
});