function imgAddClass(className) {
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++) {
        images[i].className = className;
    }
}