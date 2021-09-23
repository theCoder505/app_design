function activateFunc(event) {
    var newActiveClass = "#" + (event.id) + "";
    document.querySelector("#bottomNav .activated").classList.remove("activated");
    document.querySelector(newActiveClass).classList.add("activated");
}