var ourbuttonclicked = document.getElementById("add_button");
var content = document.getElementById("list_space");
ourbuttonclicked.onclick = ButtonClicked;
var contentToAdd = document.createElement("p");
var ourbutton2clicked = document.getElementById("clear_button");
ourbutton2clicked.onclick = Button2Clicked;

function ButtonClicked(){
    var message = document.getElementById("input").value
    //content.innerHTML.document.write("\n");
    content.innerHTML += "<p>" + message + "</p>";
    //contentToAdd.appendChild(document.createTextNode("AAAAAAHHHHHHHHH"));
    
    //content.appendChild(contentToAdd);
    //contentToAdd.addEventListener("click", () => ourButtonClick());
}
function Button2Clicked(){
    content.innerHTML = "";
}