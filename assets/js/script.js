// Imports

var transitionDiv = document.getElementById("transitiondiv");
var wrapper = document.getElementById("wrapper");

var nav = document.getElementById("nav");
var navopen = false;

var baseurl = "/Jam10Entry";

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
require.config({ paths: { vs: baseurl + "/assets/js/lib/vs" } });
require([baseurl + "/assets/js/lib/vs/editor/editor.main"], function () {});

// FUNCTIONS //
function createEditor(containerId, width, height, dataSource) {
    var editorString = localStorage.getItem(dataSource);
    if (editorString != null) {
        createEditorFromData(
            containerId,
            width,
            height,
            editorString,
            dataSource
        );
    } else {
        load(dataSource, (data) => {
            createEditorFromData(containerId, width, height, data, dataSource);
        });
    }
}

function createEditorFromData(containerId, width, height, data, dataSource) {
    var container = document.getElementById(containerId);
    container.style.width = width;
    container.style.height = height;

    var editorContainer = document.createElement("div");
    editorContainer.style.height = "100%";
    editorContainer.classList.add("editor");

    var runButton = document.createElement("button");
    runButton.textContent = "Run  ▷";
    runButton.onclick = () => {
        eval(editor.getValue());
    };

    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset 🗘";
    resetButton.onclick = () => {
        localStorage.removeItem(dataSource);
        container.innerHTML = "";
        createEditor(containerId, width, height, dataSource);
    };

    container.appendChild(runButton);
    container.appendChild(resetButton);
    container.appendChild(editorContainer);

    var editor = monaco.editor.create(editorContainer, {
        value: data,
        language: "javascript",

        theme: "vs-dark",
    });
    editor.onDidChangeModelContent((e) => {
        localStorage.setItem(dataSource, editor.getValue());
    });
    return editor;
}

function onPageChange() {
    var pageName = wrapper.getElementsByTagName("h1")[0].id;

    if (pageName == "A Simple Coding Tutorial") {
        createEditor(
            "editor",
            "90%",
            "500px",
            baseurl + "/assets/code-presets/home.js"
        );
    }
}
