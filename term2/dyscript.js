var ourbuttonclicked = document.getElementById("button");

ourbuttonclicked.onclick = ButtonClicked;



function ButtonClicked() {
var dogyears = document.getElementById("humanyears").value *7;
alert("you are "+ dogyears +" years old");
}
