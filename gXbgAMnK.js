function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/healthbar.png');
    game.load.image('ball', 'sprites/pangball.png');

}
var image;
var circle
var sprite
var radius = 150
var cX
var cY
var angle = 0
var speed=5

var leftKey, rightKey

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ball = game.add.sprite(400, 200, 'ball');
    sprite = game.add.sprite(0, 0, 'phaser');
    sprite.anchor.set(0.5)
    game.physics.enable([sprite,ball], Phaser.Physics.ARCADE)
    sprite.body.immovable = true;
    ball.body.velocity.setTo(500, 500);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(1, 1);
    
    game.forceSingleUpdate=true
    
    cX = game.world.centerX
    cY = game.world.centerY

    circle = game.add.graphics()    
    circle.lineStyle(2,0xFF0000)
    circle.drawCircle(cX,cY,radius*2)
    
    
    // give it an initial position
   moveSpriteOnCircle(angle)
   
   leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
   rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

   
}


function moveSpriteOnCircle(deg) {
    
    var theta = Phaser.Math.degToRad(deg)
    
    var newX = Math.sin(theta) * radius;
    var newY = Math.cos(theta) * radius;
    
    sprite.x=cX - newX;
    sprite.y=cY - newY;
    
}
function update() {

    var moved=false
    game.physics.arcade.collide(sprite, ball);

    if(leftKey.isDown) {
        angle+=speed
        moved=true
        sprite.angle-=5
    }
    
    if(rightKey.isDown) {
        angle-=speed
        moved=true
        sprite.angle+=5
    }
    
    if(angle>=360) 
    {
        angle=360-angle
    }
    
    if(moved) {
        moveSpriteOnCircle(angle)
    }
}
function render() {

}
