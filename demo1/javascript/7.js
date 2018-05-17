/**
 * Created by admin on 18/5/8.
 */
/*
function insertParagraph(text){
    var str = "<p>";
    str = str + text;
    str = str + "</p>";
    document.write(str);
}

window.onload =function (){
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = " <p>This is <em>my</em>content.</p>";
}*/
/*window.onload = function(){
    var para = document.createElement("p");
    var info = "nodeName: ";
    info = info + para.nodeName;
    info = info + " nodeType: ";
    info = info + para.nodeType;
    alert(info);
}*/
/*
window.onload = function(){
    var para = document.createElement("p"); // 创建一个p元素
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para); //把这个文本节点追加到p元素上
    var txt = document.createTextNode("Hello world"); //创建一个文本节点
    para.appendChild(txt);
}*/
/*
window.onload = function(){
    var para = document.createElement("p");
    var txt1 = document.createTextNode("Hollo world");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("content.");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode("!!!");
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}*/

//图片
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