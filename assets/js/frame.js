var baseurl = "/Jam10Entry";

// Monaco editor
require.config({ paths: { vs: baseurl + "/assets/js/lib/vs" } });
require([baseurl + "/assets/js/lib/vs/editor/editor.main"], function () {});

// FUNCTIONS //
function createEditor(containerId, dataSource) {
    var editorString = localStorage.getItem(dataSource);
    if (editorString != null) {
        createEditorFromData(containerId, editorString, dataSource);
    } else {
        load(dataSource, (data) => {
            createEditorFromData(containerId, data, dataSource);
        });
    }
}

function createEditorFromData(containerId, data, dataSource) {
    var container = document.getElementById(containerId);
    container.style.width = "100%";
    container.style.height = "100%";

    var editorContainer = document.createElement("div");
    editorContainer.classList.add("editor");
    editorContainer.style.height = "100%";

    var runButton = document.createElement("button");
    runButton.textContent = "Run  ▷";
    runButton.onclick = () => {
        window.parent.eval(editor.getValue());
    };

    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset 🗘";
    resetButton.onclick = () => {
        localStorage.removeItem(dataSource);
        container.innerHTML = "";
        createEditor(containerId, dataSource);
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

window.onmessage = (message) => {
    createEditor("container", baseurl + "/assets/code-presets/" + message.data);
    window.onmessage = undefined;
};
