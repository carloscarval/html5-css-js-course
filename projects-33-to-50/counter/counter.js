const counter = document.getElementById('counter');

function increment() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}


function decrement() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}


function reset() {
    counter.innerHTML = 0;
}