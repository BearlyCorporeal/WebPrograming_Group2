var ourcookieclicked = document.getElementById("cookie");
var ourmultiplierclicked = document.getElementById("multiplier");
var ourupgradeclickclicked = document.getElementById("upgrade");
var ourautoclickerclicked = document.getElementById("autoclicker");
var cookieamount = 0;
var multiplier = 1;
var cookienumspace = document.getElementById("cookienumber");
var upgradenumspace = document.getElementById("upgradenumber");
var autoclickernumspace = document.getElementById("autoclickernumber");
var multipliernumspace = document.getElementById("multipliernumber");
var upgradeclickbuttonspace = document.getElementsByClassName("upgrade");
var autoclickerbuttonspace = document.getElementsByClassName("autoclicker");
var cookieclickincrease = 1;
var ugradeclickreqammount = 20;
var autoclickerreqammount = 100;
var multiplierreqammount = 500000;
var count = 1;
var autoclickerinterval = 5000;
var upgradecount =1;
var autoclickeramount=0;
ourcookieclicked.onclick = cookieClicked;
ourupgradeclickclicked.onclick = upgradeClicked;
ourautoclickerclicked.onclick = autoclickerClicked;
ourmultiplierclicked.onclick = multiplierclicked;
function cookieClicked() {
    cookieclickincrease = upgradecount*multiplier;
    cookieamount = cookieamount + cookieclickincrease;
    console.log(cookieamount);
    updatebuttons();
}
function upgradeClicked() {
    cookieamount = cookieamount - ugradeclickreqammount;
    upgradecount = upgradecount + 1;
    ugradeclickreqammount = upgradecount * 20;
    upgradenumspace.innerHTML = "<p>each click is worth " + upgradecount + "<p>"
    updatebuttons();
}
function autoclickerClicked(){
    autoclickeramount = autoclickeramount+1;
    autoclickernumspace.innerHTML = "<p>you have " + autoclickeramount + " autoclickers<p>"
    cookieamount = cookieamount - count * 100;
    setInterval(function(){
        cookieClicked()    
    },  autoclickerinterval);
    count = count + 1;
    updatebuttons();
}
function multiplierclicked(){
    cookieamount = cookieamount - multiplierreqammount;
    multiplier = multiplier + 1;
    multipliernumspace.innerHTML = "<p>X" + multiplieramount + "<p>"
    updatebuttons()
}
function updatebuttons() {
    cookienumspace.innerHTML = "<p>" + cookieamount + "<p>"
    ugradeclickreqammount = upgradecount * 20
    if (ugradeclickreqammount > cookieamount) {
        document.getElementById("upgrade").disabled = true;
    } else {
        document.getElementById("upgrade").disabled = false;
    }
    document.getElementById("upgrade").value = "upgrade click "+ ugradeclickreqammount +""
    autoclickerreqammount = count * 100
    if (autoclickerreqammount > cookieamount) {
        document.getElementById("autoclicker").disabled = true;
    } else {
        document.getElementById("autoclicker").disabled = false;
    }
    document.getElementById("autoclicker").value = "buy autoclicker "+ autoclickerreqammount +""
    multiplierreqammount = multiplier*500000
    if (multiplierreqammount > cookieamount) {
        document.getElementById("multiplier").disabled = true;
    } else {
        document.getElementById("multiplier").disabled = false;
    }
    document.getElementById("multiplier").value = "buy multiplier "+ multiplierreqammount +""
}
updatebuttons();
