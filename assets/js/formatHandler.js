function imgAddClass(className) {
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++) {
        images[i].className = className;
    }
}

function addClassToTag(tagName, className) {
    var element = document.getElementsByTagName(tagName);
    for(let i=0; i < element.length; i++) {
        element[i].className = className;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    //imgAddClass("img-fluid");
    addClassToTag("img","img-fluid");
    addClassToTag("blockquote", "blockquote text-center");
})