/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/gXbgAMnK
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/phaser-dude.png');

}

var circle
var sprite
var radius = 150
var cX
var cY
var angle = 0
var speed=5

var leftKey, rightKey

function create() {

    game.forceSingleUpdate=true
    
    cX = game.world.centerX
    cY = game.world.centerY

    circle = game.add.graphics()    
    circle.lineStyle(2,0xFF0000)
    circle.drawCircle(cX,cY,radius*2)
    
    sprite = game.add.sprite(0, 0, 'phaser');
    sprite.anchor.set(0.5)
    
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

    if(leftKey.isDown) {
        angle+=speed
        moved=true
    }
    
    if(rightKey.isDown) {
        angle-=speed
        moved=true
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
