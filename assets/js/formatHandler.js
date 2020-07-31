function checkIfClass(items) {
    for(let i=0; i < items.length; i++) {
        if(items[i].classList.length > 0) {
            return false;
        }
    }
    return true;
}

function setClassToItems(items, className) {
    for(let i=0; i < items.length; i++) {
        items[i].className = className;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var imgs = document.getElementsByTagName("img");
    if(checkIfClass(imgs)) {
        setClassToItems(imgs, "img-fluid");
    }
    var blockquotes = document.getElementsByTagName("blockquote");
    setClassToItems(blockquotes, "font-italic blockquote text-center");
})