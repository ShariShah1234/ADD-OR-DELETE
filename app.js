
var mainlist = document.getElementById("mainlist");
var inp = document.getElementById("abc")
function addElem(){
    var a = document.createElement("LI");
    var b = document.createTextNode(inp.value);
    a.appendChild(b);
    mainlist.appendChild(a);

    console.log(a);

    var ab = document.createElement("BUTTON");
    var ad = document.createTextNode("Delete");
    ab.setAttribute("Class" ,"box") ;
    ab.setAttribute("onclick" ,"del(this)") ;
  
    ab.appendChild(ad);
    a.appendChild(ab);
    var ab = document.createElement("BUTTON");
    var ad = document.createTextNode("Edit");
    ab.setAttribute("Class" ,"box1") ;
    ab.setAttribute("onclick" ,"edit(this)") ;
    ab.appendChild(ad)
    a.appendChild(ab);
}

function del(element){
    console.log(element.parentNode);
    element.parentNode.remove();

}
function edit(element){
    console.log(element.parentNode);
    element.parentNode.firstChild.nodeValue = prompt();

}
function deleteAll(){
    mainlist.innerHTML = "";
}