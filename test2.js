let hiddenScript = "" +
"function removeEveryScript(element) {\n" +
"    if (element.hasChildNodes()) {\n" +
"        var children = element.childNodes;\n" + 
"        for (var i = children.length - 1; i >= 0; i--) {\n" + 
"            if (children[i].nodeType === Node.ELEMENT_NODE) {\n" +
"               if (children[i].tagName === 'SCRIPT') {\n" +
"                    element.removeChild(children[i]);\n" +
"                }\n" +
"            }\n" +
"        }\n" +
"    }\n" +
"}\n" +
"var testVariable = 'testValue';\n" +
"let head = document.getElementsByTagName('head')[0];\n" +
"removeEveryScript(head);\n";

let loadedScript = document.createElement("script");
loadedScript.text = hiddenScript;
let head2 = document.getElementsByTagName("head")[0];
head2.appendChild(loadedScript);