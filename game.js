let x = 0;
let y = 0;
let enemyY = 120;
let enemyDirection = 'down';
let HP = 100;
let letterProgress = 0;
let goalProgress = 4;

function goRight (){
    let element = document.getElementById('player-one');
    x = x + 30;
    // console.log('x: ', x);
    if (x > 420) {
        x = 420;
        return;
    }
    checkBomb();
    checkLetterOne();
    checkLetterTwo();
    checkLetterThree();
    checkLetterFour();    
    element.style.left = x;
}
function goLeft (){
    let element = document.getElementById('player-one');
    x = x - 30;
    // console.log('x: ', x);
    if (x < 0) {
        x = 0;
        return;
    }
    element.style.left = x;
    checkBomb();
    checkLetterOne();
    checkLetterTwo();
    checkLetterThree();
    checkLetterFour();

}

function goUp (){
    let element = document.getElementById('player-one');
    y = y - 30;
    // console.log('y: ', y);
    if (y < 0) {
        y = 0;
        return;
    }
    element.style.top = y;
    checkBomb();
    checkLetterOne();
    checkLetterTwo();
    checkLetterThree();
    checkLetterFour();

}
function goDown (){
    let element = document.getElementById('player-one');
    y = y + 30;
    // console.log('y: ', y);
    if (y > 270) {
        y = 270;
        return;
    }
    element.style.top = y;
    checkBomb();
    checkLetterOne();
    checkLetterTwo();
    checkLetterThree();
    checkLetterFour();

}

function enemyGoDown (){
    let element = document.getElementById('enemy-one');
    enemyY = enemyY + 30;
    // console.log('enemyY: ', enemyY);
    if (enemyY > 270) {
        enemyY = 270;
        enemyDirection = 'up';
        return;
    }
    element.style.top = enemyY;
    checkBomb();
}
function enemyGoUp (){
    let element = document.getElementById('enemy-one');
    enemyY = enemyY - 30;
    // console.log('enemyY: ', enemyY);
    if (enemyY < 0) {
        enemyY = 0;
        enemyDirection = 'down';
        return;
    }
    element.style.top = enemyY;
    checkBomb();
}
function enemyGo () {
   // enemyGoDown();
   if (enemyDirection === 'down') {
       enemyGoDown();
   }
   if (enemyDirection === 'up') {
    enemyGoUp();
   }
   
}
function checkBomb() {
    if (y === enemyY && x === 210) {
        HP = HP - 25;
        death();
        // console.log("HP:", HP);
        document.getElementById('id-hp').innerHTML = HP;
    }
}
function death () {
    if (HP === 0) {
        x = 0;
        y = 0;
        let element = document.getElementById('player-one');
        element.style.top = y;
        element.style.left = x;
        alert("будь лохом");
        HP = 100;
    }
}
setInterval(enemyGo, 300);

function onKey (eventOlolo) {

    if (eventOlolo.code === 'ArrowUp') {
        goUp();
    }
    if (eventOlolo.code === 'ArrowDown') {
        goDown();
    }
    if (eventOlolo.code === 'ArrowLeft') {
        goLeft();
    }
    if (eventOlolo.code === 'ArrowRight') {
        goRight();
    }
}
function checkLetterOne() {
    if (y === 30 && x === 90 && letterProgress === 0) {
        letterProgress = 1;
        console.log('ж', letterProgress);
    }
}
function checkLetterTwo() {
    if (y === 180 && x === 90 && letterProgress === 1) {
        letterProgress = 2;
        console.log('о', letterProgress);
    }
}
 function checkLetterThree() {
     if (y === 30 && x === 240 && letterProgress === 2) {
         letterProgress = 3;
         console.log('п', letterProgress);
     }
}
function checkLetterFour() {
    if (y === 120 && x === 210 && letterProgress === 3) {
        letterProgress = 4;
        console.log('а', letterProgress);
    }
}
document.body.addEventListener('keydown', onKey);