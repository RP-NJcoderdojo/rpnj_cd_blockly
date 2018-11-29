var SPEED;
var spawnwall_y;
var spawnwall_flipped;
var GRAVITY;
var jetSnd;
var spawnwalls_wallY;
var spawnwall_wall;
var JET;
var scoreSnd;
var gameStarted;
var OPENING;
var hurtSnd;
var gameOver;
var spawnwalls_botWall;
var SPAWN_RATE;
var background;
var score;
var wallTimer;
var timeOver;
var walls;
var spawnwalls_topWall;
var player;
var scoreText;

function update() {
}

function preload() {
  this.game.load.spritesheet('player','flappy-jet/assets/player.png',48,48,4);
  game.load.image('wall','flappy-jet/assets/wall.png');
  game.load.image('background','flappy-jet/assets/background-texture.png');
  game.load.audio('jet','flappy-jet/assets/jet.wav');
  game.load.audio('score','flappy-jet/assets/score.wav');
  game.load.audio('hurt','flappy-jet/assets/hurt.wav');
}

function jet() {
  if (!gameStarted) {
    start();
  }
  if (!gameOver) {
    player.body.velocity.y=JET * -1;
    jetSnd.play();} else if ((game.time.now) > timeOver + 400) {
    reset();
  }
}

function create() {
  jetSnd = (game.add.audio('jet'));
  scoreSnd = (game.add.audio('score'));
  hurtSnd = (game.add.audio('hurt'));
  background = (game.add.tileSprite(0,0,game.world.width,game.world.height,'background'));
  walls = (game.add.group());
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y=GRAVITY;
  player = (game.add.sprite(0,0,'player',3));
  player.animations.add('fly',[0, 1, 2]);
  game.physics.enable(player,Phaser.Physics.ARCADE);
  player.body.collideWorldBounds=true;
  scoreText = (game.add.text(game.world.centerX, (game.world.height) / 5, "", {font: "24px Arial", fill: "#ffffff", align: "center"}));
  scoreText.anchor.set(0.5);
  game.input.onDown.add(jet,this);
  reset();
}

function reset() {
  background.autoScroll(SPEED * -1 * 0.8,0);
  gameStarted = false;
  gameOver = false;
  score = 0;
  player.body.allowGravity=false;
  player.reset((game.world.width) / 4,game.world.centerY);
  player.animations.play('fly',10,true);
  scoreText.setText('Touch To Start Game');
  walls.removeAll();
}

function start() {
  player.body.allowGravity=true;
  scoreText.setText(String('Score: ') + String(score));
  gameStarted = true;
  wallTimer = (game.time.events.loop((Phaser.Timer.SECOND) * SPAWN_RATE,spawnWalls,this));
  wallTimer.timer.start();
}

function spawnWalls() {
  spawnwalls_wallY = (game.rnd.integerInRange((game.world.height) * 0.3,(game.world.height) * 0.7));
  spawnWall(spawnwalls_wallY, false);
  spawnwalls_botWall = spawnwall_wall;
  spawnWall(spawnwalls_wallY, true);
  spawnwalls_topWall = spawnwall_wall;
}

function spawnWall(spawnwall_y, spawnwall_flipped) {
  spawnwall_wall = (walls.create(game.width,(spawnwall_y + (spawnwall_flipped ? OPENING * -1 : OPENING)) / 2,'wall'));
  game.physics.enable(spawnwall_wall,Phaser.Physics.ARCADE);
  spawnwall_wall.body.allowGravity=false;
  spawnwall_wall.body.immovable=true;
  spawnwall_wall.body.velocity.x=SPEED * -1;
  if (spawnwall_flipped) {
    spawnwall_wall.scale.y=-1;
    spawnwall_wall.body.offset.y=(spawnwall_wall.body.height) * -1;
  }
}


var game = new Phaser.Game(320,568, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});

SPEED = 200;
GRAVITY = 900;
JET = 420;
OPENING = 200;
SPAWN_RATE = 1.25;
