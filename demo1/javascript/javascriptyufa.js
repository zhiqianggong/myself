/**
 * Created by admin on 18/5/3.
 */

window.onload = prepareLinks;
function prepareLinks(){
    var links = document.getElementsByTagName("a");
    for (var i=0; i<links.length; i++){
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function (){
                popUp(this.getAttribute("http://www.example.com/"));
                return false;
            }
        }
    }
}
function popUp(winURL){
    window.open(winURL,"popup","width-320,height-400");
}