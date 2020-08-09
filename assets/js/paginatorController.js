function createDot3() {
    let dot3 = document.createElement("li");
    dot3.className = "page-item";
    let dot3Child = document.createElement("a");
    dot3Child.className = "page-link";
    dot3Child.text = "...";
    dot3.appendChild(dot3Child);
    return dot3;
}

document.addEventListener("DOMContentLoaded", function () {
    var pagi_nav = document.getElementById("pagination_nav");
    var pagi_ul = pagi_nav.firstElementChild;
    var pages = pagi_ul.children;
    if(pages.length > 4) {
        var dot3left = createDot3();
        var dot3right = createDot3();
        var page_first = pages[1];
        var page_current = document.getElementsByClassName("page-item active")[0];
        var page_last = pages[pages.length - 2];
        var remove_pages = [];

        for(let i=1; i < pages.length - 1; i++) {
            if(pages[i] !== page_current && pages[i] !== page_first && pages[i] !== page_last) {
                remove_pages.push(pages[i]);
            }
        }
        for(let i=0; i < remove_pages.length; i++) {
            pagi_ul.removeChild(remove_pages[i]);
        }

        if(page_current === page_first) {
            pagi_ul.insertBefore(dot3right, page_last);
        }
        else if(page_current === page_last) {
            pagi_ul.insertBefore(dot3left, page_current);
        }
        else {
            pagi_ul.insertBefore(dot3left, page_current);
            pagi_ul.insertBefore(dot3right, page_last);
        }
    }


})