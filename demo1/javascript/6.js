/**
 * Created by admin on 18/5/8.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function(){
            oldonload ();
            func();
        }
    }
}

function prepareGallery(){
    if (!document.getElementsByTagName || !document.getElementById) return false;//如果找不到ByTagName和Id就离开
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i < links.length;i++){
        links[i].onclick = function(){
            if(showPic(this)){
                alert("a");
                return false;
            }else {
                alert("b");
                return true;
            }
        }
    }
}
function shoPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.href;
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName !="IMG") return false;
    placeholder.src = source;
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

window.onload = function (){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","../images/demo6.png");
    placeholder.setAttribute("alt","A cup of black coffee");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    document.getElementsByTagName("body")[0].appendChild(placeholder);
    document.getElementsByTagName("body")[0].appendChild(description);
    var gallery = document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);
}