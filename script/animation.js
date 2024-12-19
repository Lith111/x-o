let title = document.querySelector(".title");
let turn = "x";
let endGame = 0;
let squre = document.querySelectorAll(".squre");
function end (nun1 , nun2 , nun3){
    title.innerHTML = `${squre[nun1].innerHTML} is winner `;
    squre[nun1].style.backgroundColor = "#000";
    squre[nun2].style.backgroundColor = "#000";
    squre[nun3].style.backgroundColor = "#000";
    setInterval(function(){
        title.innerHTML += `.`;
    },500);
    setTimeout(function(){location.reload()},2000);

}
function winner() {
    if (squre[0].innerHTML === squre[1].innerHTML && squre[1].innerHTML == squre[2].innerHTML && squre[0].innerHTML != "" ) {
        console.log("done");
        end(0 , 1 , 2);
    }
   else  if (squre[3].innerHTML === squre[4].innerHTML && squre[3].innerHTML == squre[5].innerHTML && squre[3].innerHTML != "" ) {
        console.log("done");
        end(3 , 4 , 5);
    }
    else  if (squre[6].innerHTML === squre[7].innerHTML && squre[7].innerHTML == squre[8].innerHTML && squre[6].innerHTML != "" ) {
        console.log("done");
        end(6 , 7 , 8);
    }
    else  if (squre[0].innerHTML === squre[3].innerHTML && squre[3].innerHTML == squre[6].innerHTML && squre[6].innerHTML != "" ) {
        console.log("done");
        end(0 , 3 , 6);
    }
    else  if (squre[1].innerHTML === squre[4].innerHTML && squre[4].innerHTML == squre[7].innerHTML && squre[1].innerHTML != "" ) {
        console.log("done");
        end( 1, 4 , 7);
    }
    else  if (squre[2].innerHTML === squre[5].innerHTML && squre[5].innerHTML == squre[8].innerHTML && squre[2].innerHTML !=  "" ) {
        console.log("done");
        end(2 , 5 , 8);
    }
    else  if (squre[2].innerHTML === squre[4].innerHTML && squre[4].innerHTML == squre[6].innerHTML && squre[2].innerHTML != "" ) {
        console.log("done");
        end(2 , 4 , 6);
    }
    else  if (squre[0].innerHTML === squre[4].innerHTML && squre[4].innerHTML == squre[8].innerHTML && squre[4].innerHTML != "" ) {
        console.log("done");
        end(0 , 4 , 8);
    }
    if (endGame === 9) {
        console.log("end game");
        title.innerHTML = `no one won`;
        setInterval(function(){title.innerHTML +="."},500);
        setTimeout(function(){location.reload()},2000);
    }
}
function game(id) {
    let item = document.getElementById(id);
    if ( turn === "x" && item.innerHTML === "") {
        item.innerHTML = "x";
        turn ="o";
        title.innerHTML = "o";
        endGame++;
    }
   else if (turn === "o" && item.innerHTML === "") {
    item.innerHTML = "o";
    turn ="x";
    title.innerHTML = "x";
    endGame++;
   }
   winner();
}