function addClassToTag(tagName, className) {
    var element = document.getElementsByTagName(tagName);
    for(let i=0; i < element.length; i++) {
        element[i].className = className;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    addClassToTag("img","img-fluid");
    addClassToTag("blockquote", "font-italic blockquote text-center");
})