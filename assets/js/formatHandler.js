function checkIfClass(item) {
        return item.classList.length <= 0;
}

function setClassToItem(item, className) {
        item.className = className;
}

function responsiveEmbed(item, className) {
    var videoWrapper = document.createElement("div");
    videoWrapper.id = "videoWrapper";
    videoWrapper.className = className;
    item.after(videoWrapper);
    videoWrapper.appendChild(item);
    item.className = "embed-responsive-item";
}

document.addEventListener("DOMContentLoaded", function () {
    document.cookie = "SameSite=Strict";
    var imgs = document.getElementsByTagName("img");
    var blockquotes = document.getElementsByTagName("blockquote");
    var iframes = document.getElementsByTagName("iframe");
    for(let i=0; i < imgs.length; i++) {
        if(checkIfClass(imgs[i])) {
            setClassToItem(imgs[i], "img-fluid");
        }
    }
    for(let i=0; i < iframes.length; i++) {
        responsiveEmbed(iframes[0],"embed-responsive embed-responsive-16by9");
    }
    for(let i=0; i < blockquotes.length; i++) {
        setClassToItem(blockquotes[i], "font-italic blockquote text-center");
    }
})