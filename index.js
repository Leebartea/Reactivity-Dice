document.querySelector("h1").setAttribute("class", "headings")

var player1 = 1 + Math.random() * 6
player1 = Math.floor(player1);

document.querySelectorAll("p")[0].innerHTML = player1
document.querySelectorAll("p")[0].setAttribute("class", "player1Color")


var player2 = 1 + Math.random() * 6
player2 = Math.floor(player2);

document.querySelectorAll("p")[1].innerHTML = player2;
document.querySelectorAll("p")[1].setAttribute("class", "player2Color");

// if (player1 > player2) {
//     document.querySelector("h1").innerHTML = "coral wins!"
//     document.querySelector("h1").style.color = "coral";
// }

// else if (player1 < player2) {
//     document.querySelector("h1").innerHTML = "purple wins!"
//     document.querySelector("h1").style.color = "purple";
// }

// else {
//     document.querySelector("h1").innerHTML = "Draws!"
//     document.querySelector("h1").style.color = "white";
// }


document.querySelector("h1").innerHTML = 
(player1 > player2) ? "Coral wins" : (player1 < player2) ? "Purple wins":"Draws";

document.querySelector("h1").style.color = 
(player1 > player2) ? "coral" : (player1 < player2) ? "purple" : white
