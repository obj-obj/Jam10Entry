// Imports

var transitionDiv = document.getElementById("transitiondiv");
var wrapper = document.getElementById("wrapper");

var nav = document.getElementById("nav");
var navopen = false;

// SETUP //

// Swup
const options = {
    animateHistoryBrowsing: true,
};
const swup = new Swup(options);

// Event Listeners
swup.on("transitionStart", () => {
    closenav();
});

swup.on("animationInStart", () => {
    onPageChange();
});

window.onload = () => {
    transitiondiv.style.opacity = "0";
    onPageChange();
};

window.onbeforeunload = () => {
    document.getElementsByTagName("html")[0].classList.add("is-animating");
    transitiondiv.style.opacity = "1";
};

function createEditor(width, height, dataSource) {
    var frame = document.getElementById("editor");
    frame.style.width = width;
    frame.style.height = height;
    frame.frameBorder = "0";
    frame.src = "/Jam10Entry/Editor.html";
    window.dataSource = dataSource;
}

function onPageChange() {
    var pageName = wrapper.getElementsByTagName("h1")[0].id;
    console.clear();
    createEditor("90%", "750px", pageName.toLowerCase() + ".js");
}
