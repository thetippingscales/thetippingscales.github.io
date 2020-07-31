function checkIfClass(item) {
        return item.classList.length <= 0;
}

function setClassToItem(item, className) {
        item[i].className = className;
}

document.addEventListener("DOMContentLoaded", function () {
    var imgs = document.getElementsByTagName("img");
    var blockquotes = document.getElementsByTagName("blockquote");
    for(let i=0; i < imgs.length; i++) {
        if(checkIfClass(imgs[i])) {
            setClassToItem(imgs[i], "img-fluid");
        }
        setClassToItem(blockquotes[i], "font-italic blockquote text-center");
    }
})