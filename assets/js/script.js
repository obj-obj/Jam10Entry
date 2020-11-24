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

// Monaco editor
require.config({ paths: { vs: "assets/js/lib/vs" } });
require(["assets/js/lib/vs/editor/editor.main"], function () {});

// FUNCTIONS //
function createEditor(containerId, width, height, options) {
    var container = document.getElementById(containerId);
    container.style.width = width;
    container.style.height = height;
    return monaco.editor.create(container, options);
}

function onPageChange() {
    var pageName = wrapper.getElementsByTagName("h1")[0].id;

    if (pageName == "A Simple Coding Tutorial") {
        load("assets/code-presets/home.js", (data) => {
            var editor = createEditor("editor", "90%", "500px", {
                value: data,
                language: "javascript",
                readOnly: true,

                theme: "vs-dark",
            });
        });
    }
}
