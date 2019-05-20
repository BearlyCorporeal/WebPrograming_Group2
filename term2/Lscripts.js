var ourbuttonclicked = document.getElementById("add_button");
var content = document.getElementById("list_space");
//var specificlist = document.getElementById("0");
ourbuttonclicked.onclick = ButtonClicked;
var contentToAdd = document.createElement("p");
var ourbutton2clicked = document.getElementById("clear_button");
//var ourremovebuttonclicked = document.getElementById("0");
var instancecount = 0;
var instancecountstring = "";
var nullstring = " ";
ourbutton2clicked.onclick = Button2Clicked;
//ourremovebuttonclicked.onclick = RemoveButton;

function ButtonClicked(){
    instancecountstring = instancecount.toString()
    var message = document.getElementById("input").value;
    content.innerHTML += "<div " + instancecountstring + " ID =><p ID = " + instancecountstring +"task"+ ">" + message + "<button onclick=\"RemoveButton(this)\" ID = \"" + instancecountstring +"remove_button\""+ ">REMOVE</button><button onclick=\"done(this)\" ID = " + instancecountstring +"done_button"+ ">DONE</button><button onclick=\"NOTDONE(this)\" ID = " + instancecountstring +"NOTDONE_button"+ ">NOTDONE</button></p><div>"
    //content.innerHTML += "<p>" + message + "</p>"
    instancecount = instancecount + 1;
    console.log(instancecount);
    //var specificPart = document.getElementById("0");
    //var ourremovebuttonclicked = document.getElementById("0");
    //ourremovebuttonclicked.onclick = RemoveButton;
}
function Button2Clicked(){
    content.innerHTML = "";
}
function RemoveButton(elem){
    elem.parentElement.innerHTML = "";
}
function done(elem){
    elem.parentElement.style.background = "green";
}
function NOTDONE(elem){
    elem.parentElement.style.background = "white";
}

