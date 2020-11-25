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

swup.on("animationOutDone", () => {
    wrapper.style.opacity = "0";
});

swup.on("animationInStart", () => {
    wrapper.style.opacity = "1";
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

function createEditor(frameName, width, height, dataSource) {
    var frame = window.frames[frameName];
    frame.style.width = width;
    frame.style.height = height;
    frame.frameBorder = "0";
    frame.contentWindow.postMessage(dataSource);
}

function onPageChange() {
    var pageName = wrapper.getElementsByTagName("h1")[0].id;

    if (pageName == "A Simple Coding Tutorial") {
        createEditor("editor", "75%", "500px", "home.js");
    }
}
