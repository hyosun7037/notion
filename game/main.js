var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// Draw a rectangle
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);

// 캐릭터 등장 시, 속성 Object 자료에 정리해두면 편리
var character = { 
    x : 10,
    y : 200,
    width: 50,
    height: 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

character.draw();


// 장애물 (근데 장애물들은 width, height 이런게 각각 다를 수도 있기 때문에 Class를 활용해서 만들어야 함)
class Obstacle {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var obstacle = new Obstacle();
obstacle.draw();

var timer = 0;
var obstacles = [];
var jumpTimer = 0;

// 1초에 60번 실행
function frameByFrame(){
    requestAnimationFrame(frameByFrame);
    timer++;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1초에 1번씩 장애물 생성
    if(timer % 60 === 0){
        var obstacle = new Obstacle();
        obstacles.push(obstacle);
    }
    
    
    // 장애물 움직이기
    for(var i = 0; i < obstacles.length; i++){
        // x좌표가 0미만이면 제거 
        if(obstacles[i].x < 0){
            obstacles.splice(i, 1)};
        obstacles[i].x -= 5;
        obstacles[i].draw();
    }
    // character y축으로 점프
    if(jump){
        character.y--;
        jumpTimer++;
    }  
    // 점프가 끝나면 다시 원래대로
    else{
        character.y++;
        jumpTimer = 0;
        // 200 이하로 내려가면 멈춤
        if(character.y > 200){
            character.y = 200;
        }
    }
    if(jumpTimer > 100){
        jump = false;
        
    }
    character.draw();
}

frameByFrame();



var jump = false;
// spacebar 누르면 실행
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jump = true;
    }
});