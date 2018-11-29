var SPEED;
var in_wall;
var spawnWallY;
var flipped;
var ea_wall;
var wallY;
var GRAVITY;
var wall;
var background;
var gameOver;
var topWall;
var JET;
var score;
var walls;
var gameStarted;
var botWall;
var OPENING;
var timeOver;
var SPAWN_RATE;
var wallTimer;
var player;
var scoreText;

function spawnWalls() {
  wallY = (game.rnd.integerInRange((game.height) * 0.3,(game.height) * 0.7));
  topWall = spawnWall(wallY, false);
  botWall = spawnWall(wallY, true);
}

function preload() {
  this.game.load.spritesheet('player','/blockly/coderdojo/code/flappy-jet/assets/player.png',48,48,3);
  game.load.image('background','/blockly/coderdojo/code/flappy-jet/assets/background-texture.png');
  game.load.image('wall','/blockly/coderdojo/code/flappy-jet/assets/wall.png');
}

function addScore(in_wall) {
  in_wall.scored = true;
  score = (typeof score == 'number' ? score : 0) + 0.5;
  scoreText.setText(['Score: ',(String.fromCharCode(10)),score].join(''));
}

function spawnWall(spawnWallY, flipped) {
  wall = (walls.create(game.width,(spawnWallY + (flipped ? -OPENING : OPENING)) / 2,'wall'));
  game.physics.enable(wall,Phaser.Physics.ARCADE);
  wall.body.allowGravity=false;
  wall.scored = false;
  wall.body.immovable=true;
  wall.body.velocity.x=-SPEED;
  if (flipped) {
    wall.scale.y=-1;
    wall.body.offset.y=-(wall.body.height);
  }
  return wall;
}

function create() {
  background = (game.add.tileSprite(0,0,game.world.width,game.world.height,'background'));
  walls = (game.add.group());
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y=GRAVITY;
  player = (game.add.sprite(0,0,'player'));
  player.animations.add('fly',[0,1,2]);
  game.physics.enable(player,Phaser.Physics.ARCADE);
  player.body.collideWorldBounds=true;
  scoreText = (game.add.text(game.world.centerX, (game.world.centerY) / 5, "", {font: "32px Arial", fill: "#ffffff", align: "center"}));
  scoreText.anchor.x=0.5;
  scoreText.anchor.x=0.5;
  this.input.onDown.add(jet,this);
  reset();
}

function start() {
  player.body.allowGravity=true;
  scoreText.setText(['Score: ',(String.fromCharCode(10)),score].join(''));
  gameStarted = true;
  wallTimer = (game.time.events.loop((Phaser.Timer.SECOND) * SPAWN_RATE,spawnWalls,this));
  wallTimer.timer.start();
}

function update() {
  if (gameStarted) {
    if ((player.body.velocity.y) > -20) {
      player.frame=3;
    } else {
      player.animations.play('fly',10,true);
    }
    walls.forEachAlive(function(wall){moveWalls(wall);});
    if ((player.body.bottom) >= (game.world.bounds.bottom)) {
      setGameOver();
    }
    game.physics.arcade.collide(player,walls,setGameOver,null,this);
  } else {
    player.y=(game.world.centerY) + 8 * Math.cos((game.time.now) / 200 / 180 * Math.PI);
  }
}

function jet() {
  if (!gameStarted) {
    start();
  }
  if (!gameOver) {
    player.body.velocity.y=-JET;
  } else if ((game.time.now) > timeOver + 400) {
    reset();
  }
}

function moveWalls(ea_wall) {
  if ((ea_wall.x) + (ea_wall.width) < (game.world.bounds.left)) {
    ea_wall.kill();
  } else {
    if (!(ea_wall.scored) && (ea_wall.x) <= (player.x)) {
      addScore(ea_wall);
    }
  }
}

function reset() {
  background.autoScroll(-SPEED * 0.8,0);
  gameStarted = false;
  gameOver = false;
  score = 0;
  player.body.allowGravity=false;
  player.reset((game.world.width) / 4,game.world.centerY);
  player.animations.play('fly',10,true);
  scoreText.setText('Touch to Start');
  walls.removeAll();
}

function setGameOver() {
  gameOver = true;
  scoreText.setText(['Final Score: ',score,(String.fromCharCode(10)),'Touch to Restart'].join(''));
  timeOver = (game.time.now);
  walls.forEachAlive(function(wall){stopWalls(wall);});
  wallTimer.timer.stop();
  background.autoScroll(0,0);
  player.body.velocity.x=0;
}

function stopWalls(ea_wall) {
  ea_wall.body.velocity.x=0;
  ea_wall.body.velocity.y=0;
}


var game = new Phaser.Game(320,568, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});

SPEED = 200;
GRAVITY = 900;
JET = 420;
OPENING = 200;
SPAWN_RATE = 1.25;
timeOver = 0;
wallY = 0;
topWall = 0;
botWall = 0;
