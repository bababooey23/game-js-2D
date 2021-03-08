let x = 0;
let y = 0;
let enemyY = 120;
let enemyDirection = 'down';
let HP = 100;
function goRight (){
    let element = document.getElementById('player-one');
    x = x + 30;
    // console.log('x: ', x);
    if (x > 420) {
        x = 420;
        return;
    }
    checkBomb();
    
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
        alert("удалить майнкрафт");
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

document.body.addEventListener('keydown', onKey);