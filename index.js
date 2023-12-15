var timer = 60;
var score = 0;
var hit = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function newHit(){
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hit;
}

function bubbles()
{   var clutter = "";
    for(var i = 0; i <= 183; i++){
        clutter+=`<div id="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerStart = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerStart);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", (dets)=>{
    var num = Number(dets.target.textContent)
    if(hit == num) {
        increaseScore();
        bubbles();
        newHit();
    }
})


newHit()
runTimer();
bubbles();
