var facebookButton = document.getElementById("facebook-button")
var twitterButton = document.getElementById("twitter-button")
var facebookShareButton = document.getElementById("facebook-share-button")
var twitterShareButton = document.getElementById("twitter-share-button")

facebookButton.addEventListener("click", goToFacebook)
twitterButton.addEventListener("click", goToTwitter)
facebookShareButton.addEventListener("click", shareOnFacebook)
twitterShareButton.addEventListener("click", shareOnTwitter)

function goToFacebook() {
    let url = "https://www.facebook.com/carloscarvalhoa/"

    window.open(url, '_blank')
}

function goToTwitter() {
    let url = "https://www.twitter.com/carloscarvalc/"

    window.open(url, '_blank')
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank')
}

function shareOnTwitter() {
    const text = encodeURIComponent('Check out this website:');
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(shareUrl, '_blank')
}