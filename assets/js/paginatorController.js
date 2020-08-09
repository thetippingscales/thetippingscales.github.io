function createEllipsis() {
    let dot3 = document.createElement("li");
    dot3.className = "page-item";
    let dot3Child = document.createElement("a");
    dot3Child.className = "page-link";
    dot3Child.text = "⋯";
    dot3.appendChild(dot3Child);
    return dot3;
}

document.addEventListener("DOMContentLoaded", function () {
    var pagi_ul = document.getElementById("pagination_nav").firstElementChild;
    var pages = pagi_ul.children;

    if(pages.length - 2 > 7) {
        var ellipsisLeft = createEllipsis();
        var ellipsisRight = createEllipsis();

        var last_num = pages.length - 2;
        var page_current = document.getElementsByClassName("page-item active")[0];
        var page_last = pages[last_num];
        var remove_pages = [];
        var current_index = 0;

        for(let i=1; i < pages.length - 1; i++) {
            if(i !== 1 && i !== last_num && pages[i] !== page_current && pages[i - 1] !== page_current && pages[i + 1] !== page_current) {
                remove_pages.push(pages[i]);
            }

        }
        for(let i=0; i < remove_pages.length; i++) {
            pagi_ul.removeChild(remove_pages[i]);
        }
        for(let i=0; i < pages.length; i++) {
            if(pages[i] === page_current) {
                current_index = i;
            }
        }

        switch (page_current.firstElementChild.textContent) {
            case "1":
            case "2":
            case "3":
                pagi_ul.insertBefore(ellipsisRight, page_last);
                break;
            case (last_num - 2).toString():
            case (last_num - 1).toString():
            case (last_num).toString():
                pagi_ul.insertBefore(ellipsisLeft, pages[current_index - 1]);
                break;
            default:
                pagi_ul.insertBefore(ellipsisLeft, pages[current_index - 1]);
                pagi_ul.insertBefore(ellipsisRight, page_last);
                break;
        }
    }


})