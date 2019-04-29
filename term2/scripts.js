
var ourbuttonclicked = document.getElementById("button");

ourbuttonclicked.onclick = ButtonClicked;



function ButtonClicked() {
document.getElementById("button").value = "click it again!!!";
alert("you are the most awesomest of most! ");
}
document.getElementById("button").onmouseover = function() {mouseOver()};
function mouseOver() {
  document.getElementById("button").style.top=Math.random()*100 + "%";
  document.getElementById("button").style.left=Math.random()*100 + "%";
  document.getElementById("button").style.position="Fixed";
  //document.getElementById("button").disabled = true;
}