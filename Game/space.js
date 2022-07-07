
canvas=document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let lives = 3;
let score = 00000;
let OKLeft = false;
let OKRight = false;
let speed = 5
let k = 0.001

let Enemy1 = new Image()
Enemy1.src = "EnemyCar1.png"
Enemy1.X = 200
Enemy1.Y = -200

let Enemy2 = new Image()
Enemy2.src = "EnemyCar2.png"
Enemy2.X = 400
Enemy2.Y = -400

let Enemy3 = new Image()
Enemy3.src = "EnemyCar3.png"
Enemy3.X = 600
Enemy3.Y = -300

let Enemy4 = new Image()
Enemy4.src = "EnemyCar4.png"
Enemy4.X = 800
Enemy4.Y =-120


let grace = new Image()
grace.src = "grase-left.png"
grace.X = 0
grace.Y = -250

let grace1 = new Image()
grace1.src = "grase-left.png"
grace1.X = 0
grace1.Y = 180

let grace2 = new Image()
grace2.src = "grase-left.png"
grace2.X = 0
grace2.Y = 750

let grace20 = new Image()
grace20.src = "grase right.png"
grace20.X = 875
grace20.Y = -250

let grace21 = new Image()
grace21.src = "grase right.png"
grace21.X = 875
grace21.Y = 180

let grace22 = new Image()
grace22.src = "grase right.png"
grace22.X = 875
grace22.Y = 750


let line1 = new Image()
line1.src="Line.png"
line1.X = 650
line1.Y = 0

let line2 = new Image()
line2.src="Line.png"
line2.X = 650
line2.Y = 190

let line3 = new Image()
line3.src="Line.png"
line3.X = 650
line3.Y = 380

let line4 = new Image()
line4.src="Line.png"
line4.X = 650
line4.Y = 570

let line11 = new Image()
line11.src="Line.png"
line11.X = 350
line11.Y = 0

let line21 = new Image()
line21.src="Line.png"
line21.X = 350
line21.Y = 190

let line31 = new Image()
line31.src="Line.png"
line31.X = 350
line31.Y = 380

let line41 = new Image()
line41.src="Line.png"
line41.X = 350
line41.Y =570

const heart = new Image()
heart.src= "h1.png"
heart.X = 40
heart.Y = 20

const PlayerCar = new Image()
PlayerCar.src="Player Car.png"
PlayerCar.X = 480
PlayerCar.Y = 480


let life1 = new Image()
life1.src="life.gif"
life1.X = Math.floor(Math.random()*650)+180
life1.Y = -((Math.random()*1000)+3000)

button  = document.querySelector(".restart")
button1= document.querySelector(".start")
button2= document.querySelector(".settings")
button3= document.querySelector(".autors")
menu = document.querySelector(".main-menu")
button4= document.querySelector(".mini-menu")


button4.addEventListener("click",function(){
    cancelAnimationFrame(MyRec)
    stop = true
    menu.classList.remove("close")
    button4.classList.remove("open1")
    button.classList.remove("open")
})

function drawRect(){
    c.fillStyle="black"
    c.fillRect(0,0,canvas.width,canvas.height)
}

function graceRect(){
    c.drawImage(grace, grace.X, grace.Y)
    grace.Y +=speed
    if(grace.Y > 576){
        grace.Y = -576
    }
    c.drawImage(grace1, grace1.X, grace1.Y)
    grace1.Y +=speed
    if(grace1.Y > 576){
        grace1.Y = -576
    }
    c.drawImage(grace2, grace2.X, grace2.Y)
    grace2.Y +=speed
    if(grace2.Y > 576){
        grace2.Y = -576
    }  
}

function life(){
    c.drawImage(life1, life1.X, life1.Y)
    life1.Y +=speed
    if(life1.Y > 576){
        life1.Y =  -((Math.random()*10000)+10000)
        life1.X = Math.floor(Math.random()*650)+180
    }
    if(life1.Y+50>=PlayerCar.Y && life1.X+40>= PlayerCar.X && PlayerCar.X+50>life1.X){
        lives+=1;
        life1.Y = -((Math.random()*10000)+8000)
        life1.X = Math.floor(Math.random()*650)+180
    }
}


function graceRect1(){
    c.drawImage(grace20, grace20.X, grace20.Y)
    grace20.Y +=speed
    if(grace20.Y > 576){
        grace20.Y = -576
    }
    c.drawImage(grace21, grace21.X, grace21.Y)
    grace21.Y +=speed
    if(grace21.Y > 576){
        grace21.Y = -576
    }
    c.drawImage(grace22, grace22.X, grace22.Y)
    grace22.Y +=speed
    if(grace22.Y > 576){
        grace22.Y = -576
    }

    
}


function drawScore(){
    c.font = "40px VT323"
    c.fillStyle = "Black"
    c.fillText("Score:" , 900, 48)
    c.fillText("" + Math.round(score), 900, 88)
}

function drawLives(){
    c.font = "40px VT323"
    c.fillStyle = "White"
    if(lives<2){
        c.fillStyle = "Red"
    }
    c.fillText(" " + lives, 75, 48)

}

function drawLive1(){
    c.drawImage(heart, heart.X, heart.Y)
}


function drawLine1(){
    c.drawImage(line1, line1.X, line1.Y)
    c.drawImage(line11, line11.X, line11.Y)
    line1.Y +=speed;
    if(line1.Y > 576){
        line1.Y = -60
    }
    line11.Y +=speed;
    if(line11.Y > 576){
        line11.Y = -60
    }
}

function drawLine2(){
    c.drawImage(line21, line21.X, line21.Y)
    line21.Y +=speed;
    if(line21.Y > 576){
        line21.Y = -60
    }
    c.drawImage(line2, line2.X, line2.Y)
    line2.Y +=speed;
    if(line2.Y > 576){
        line2.Y = -60
    }
}

function drawLine3(){
    c.drawImage(line3, line3.X, line3.Y)
    line3.Y +=speed;
    if(line3.Y > 576){
        line3.Y = -60
    }
    c.drawImage(line31, line31.X, line31.Y)
    line31.Y +=speed;
    if(line31.Y > 576){
        line31.Y = -60
    }
}

function drawLine4(){
    c.drawImage(line4, line4.X, line4.Y)
    line4.Y +=speed;
    if(line4.Y > 576){
        line4.Y = -60
    }
    c.drawImage(line41, line41.X, line41.Y)
    line41.Y +=speed;
    if(line41.Y > 576){
        line41.Y = -60
    }
}

function drawCar(){
    if (OKLeft===true && PlayerCar.X>160){
        PlayerCar.X -=5;
    }
    if (OKRight===true && PlayerCar.X<820){
        PlayerCar.X +=5;
    }
    c.drawImage(PlayerCar,PlayerCar.X,PlayerCar.Y)
}

addEventListener("keydown",function(event){
    let newDirect = event.keyCode
    if (newDirect === 65){
        OKLeft = true
    }
    if (newDirect === 68){
        OKRight = true
    }
})

addEventListener("keyup",function(event){
    let newDirect = event.keyCode
    if (newDirect === 65){
        OKLeft = false
    }
    if (newDirect === 68){
        OKRight = false
    }
})



function EnemyCar1(){
    if(Enemy1.X + 50 > PlayerCar.X && Enemy1.Y + 70 > PlayerCar.Y && Enemy1.X < PlayerCar.X+50 && !(Enemy1.Y >PlayerCar.Y+60)){
        let crash = true
        Enemy1.Y = Enemy2.Y -576;
        Enemy1.X=Math.floor(Math.random()*650)+180
        lives--;
        speed=5
        if(lives<1){
            stop1();
        } else {
            crash=false}
    }
    else{
    c.drawImage(Enemy1,Enemy1.X,Enemy1.Y)
    Enemy1.Y +=(speed-1);
    score+=0.01*(speed/10);
    speed+=k;
    if( Enemy1.Y>576){
        Enemy1.Y=-(Math.floor(Math.random()*100)+100);
        Enemy1.X=Math.floor(Math.random()*650)+180 

    }}
}


function EnemyCar3(){
    if(Enemy3.X + 50 > PlayerCar.X && Enemy3.Y + 70 > PlayerCar.Y && Enemy3.X < PlayerCar.X+50 && !(Enemy3.Y >PlayerCar.Y+60)){
        crash = true
        Enemy3.Y = Enemy2.Y -576;
        Enemy3.X=Math.floor(Math.random()*650)+180
        lives--;
        speed=5
        if(lives<1){
            stop1();
        } else {
            crash=false}
    }
    else{
    c.drawImage(Enemy3,Enemy3.X,Enemy3.Y)
    Enemy3.Y +=(speed-2);
    score+=0.01*(speed/10);
    speed+=k;

    if( Enemy3.Y>576){
        Enemy3.Y=-(Math.floor(Math.random()*100)+100);
        Enemy3.X=Enemy1.X-120 
        if(Enemy3.X<200){
            Enemy3.X+=225 
        }
        if((Enemy3.X+10==Enemy2.X||Enemy3.X+10==Enemy1.X)&&(Enemy3.X==Enemy2.X+10||Enemy3.X==Enemy1.X+10)){
            Enemy3.Y-=2 
        }
    }}
}


function EnemyCar2(){
    if(Enemy2.X + 50 > PlayerCar.X && Enemy2.Y + 70 > PlayerCar.Y && Enemy2.X < PlayerCar.X+50 && !(Enemy2.Y >PlayerCar.Y+60)){
        let crash = true
        Enemy2.Y = Enemy1.Y-576;
        Enemy2.X=Math.floor(Math.random()*650)+180
        lives--;
        speed=5
        if(lives<1){
            stop1();
        } else {
            crash=false}

    }
    else{
    c.drawImage(Enemy2,Enemy2.X,Enemy2.Y)
    Enemy2.Y +=(speed-3);
    score+=0.01*(speed/10);
    speed+=k;
        if( Enemy2.Y>576){
        Enemy2.Y=-(Math.floor(Math.random()*100)+100);
        Enemy2.X=Enemy1.X+180 
        if(Enemy2.X>800){
            Enemy2.X-=250 
        }
        if((Enemy2.X+10==Enemy1.X||Enemy2.X+10==Enemy3.X)&&(Enemy3.X==Enemy2.X+10||Enemy1.X==Enemy2.X+10)){
            Enemy3.Y-=2 
        }
    }}

    return score;
}

function stop1() {
    cancelAnimationFrame(MyRec)
    c.font="150px VT323"
    c.fillStyle="red"
    c.fillText("Game over!", 200, 300)
    stop = true
    button.classList.add("open")
    button4.classList.add("open1")
}


function render(){
    if (stop === true){return}
    drawRect()
    graceRect()
    graceRect1()
    drawLives()
    drawLive1()
    drawLine1()
    drawLine2()
    drawLine3()
    drawLine4()
    drawCar()
    if(lives<2){life()}
    EnemyCar1()
    EnemyCar2()
    EnemyCar3()
    drawScore()
    MyRec=requestAnimationFrame(render)
    cancelAnimationFrame(stop1)
}


button.addEventListener("click",function(){
    stop = false
    render()
    lives=3
    score=0
    button.classList.remove("open")
    button4.classList.remove("open1")
    crash = false

line1.X = 650
line1.Y = 0
line2.X = 650
line2.Y = 144
line3.X = 650
line3.Y = 288
line4.X = 650
line4.Y = 432
line11.X = 350
line11.Y = 0
line21.X = 350
line21.Y = 144
line31.X = 350
line31.Y = 288
line41.X = 350
line41.Y = 432
speed=5
grace.X = 0
grace.Y = -250
grace1.X = 0
grace1.Y = 180
grace2.X = 0
grace2.Y = 750
grace20.X = 875
grace20.Y = -250
grace21.X = 875
grace21.Y = 180
grace22.X = 875
grace22.Y = 750
})

button1.addEventListener("click",function(){
    stop= false
    menu.classList.add("close")
    crash=false
    render()
    lives=3
    score=0
    button.classList.remove("open")
    button4.classList.remove("open1")
    crash = false

line1.X = 650
line1.Y = 0
line2.X = 650
line2.Y = 144
line3.X = 650
line3.Y = 288
line4.X = 650
line4.Y = 432
line11.X = 350
line11.Y = 0
line21.X = 350
line21.Y = 144
line31.X = 350
line31.Y = 288
line41.X = 350
line41.Y = 432
speed=5
grace.X = 0
grace.Y = -250
grace1.X = 0
grace1.Y = 180
grace2.X = 0
grace2.Y = 750
grace20.X = 875
grace20.Y = -250
grace21.X = 875
grace21.Y = 180
grace22.X = 875
grace22.Y = 750
})

