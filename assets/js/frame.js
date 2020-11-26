var baseurl = "/Jam10Entry";

// Monaco editor
require.config({ paths: { vs: baseurl + "/assets/js/lib/vs" } });
require([baseurl + "/assets/js/lib/vs/editor/editor.main"], function () {});

// FUNCTIONS //
function clearAll() {
    for (var i = window.parent.setTimeout(function () {}, 0); i > 0; i--) {
        window.parent.clearInterval(i);
        window.parent.clearTimeout(i);
        if (window.parent.cancelAnimationFrame) {
            window.parent.cancelAnimationFrame(i);
        }
    }

    window.parent.document.onkeypress = undefined;
}

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

    var editorContainer = document.createElement("div");
    editorContainer.style.marginTop = "10px";
    editorContainer.style.height = "100%";
    editorContainer.style.bottom = "0";
    editorContainer.style.flex = "1";

    var runButton = document.createElement("button");
    runButton.textContent = "Run ▶";
    runButton.onclick = () => {
        clearAll();
        window.parent.eval(editor.getValue());
    };

    var resetButton = document.createElement("button");
    resetButton.textContent = "Reset 🗘";
    resetButton.onclick = () => {
        clearAll();
        localStorage.removeItem(dataSource);
        container.innerHTML = "";
        createEditor(containerId, dataSource);
    };

    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear Console 🗑";
    clearButton.onclick = () => {
        console.clear();
    };

    container.appendChild(runButton);
    container.appendChild(resetButton);
    container.appendChild(clearButton);
    container.appendChild(editorContainer);

    var editor = monaco.editor.create(editorContainer, {
        value: data,
        language: "javascript",

        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: true,
        smoothScrolling: true,
        fontSize: "20px",
        theme: "vs-dark",
    });
    editor.onDidChangeModelContent((e) => {
        localStorage.setItem(dataSource, editor.getValue());
    });
    return editor;
}

window.onload = () => {
    createEditor(
        "container",
        baseurl + "/assets/code-presets/" + window.parent.dataSource
    );
};
