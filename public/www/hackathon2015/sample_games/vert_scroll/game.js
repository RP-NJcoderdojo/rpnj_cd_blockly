var cursors;
var y;
var x;
var timer;
var scoreLabel;
var i;
var gamestarted;
var tile;
var player;
var spacing;
var bottom;
var score;
var tilesNeeded;
var platforms;
var top2;
var hole;
var tileWidth;
var tileHeight;
var j;

function preload() {
  this.game.load.spritesheet('player','/blockly/coderdojo/code/assets/moonman_green_suit.png',32,32,12);
  game.load.image('tile','/blockly/coderdojo/code/assets/brickGrey.png');
}

function createScore() {
  scoreLabel = (game.add.text(game.world.centerX, 100, "Push Cursor Up to start", {font: "40px Arial", fill: "#ffffff", align: "center"}));
  scoreLabel.anchor.set(0.5);
}

function createPlayer() {
  player = (game.add.sprite(game.world.centerX,(game.world.height) - spacing * 2 + 3 * tileHeight,'player',1));
  player.anchor.x=0.5;
  player.anchor.y=1;
  game.physics.enable(player,Phaser.Physics.ARCADE);
  player.body.collideWorldBounds=true;
  player.body.bounce.set(0.1);
}

function create() {
  game.stage.backgroundColor='#993300';
  spacing = 300;
  score = 0;
  tileWidth = (game.cache.getImage('tile').width);
  tileHeight = (game.cache.getImage('tile').height);
  game.physics.startSystem(Phaser.Physics.ARCADE);
  platforms = (game.add.group());
  game.physics.enable(platforms,Phaser.Physics.ARCADE);
  platforms.createMultiple(250,'tile');
  initPlatforms();
  createPlayer();
  createScore();
  timer = (game.time.events.loop(2000,addPlatform,this));
  cursors = (game.input.keyboard.createCursorKeys());
}

function initPlatforms() {
  i = 0;
  bottom = (game.height) - tileHeight;
  top2 = tileHeight;
  i = bottom;
  while (i > top2 - tileHeight) {
    addPlatform(i);
    i = i - spacing;
  }
}

function update() {
  if (cursors.up.isDown) {
    startgame();
  }
  if (gamestarted) {
    game.physics.arcade.collide(player,platforms);
    if (cursors.up.isDown) {
      player.body.velocity.y=-400;
    }
    if (cursors.left.isDown) {
      player.body.velocity.x=(player.body.velocity.x) + -10;
    }
    if (cursors.right.isDown) {
      player.body.velocity.x=(player.body.velocity.x) + 10;
    }
    if ((player.body.position.y) >= (game.world.height) - (player.body.height)) {
      gameOver();
    }
  }
}

function incrementScore() {
  if (gamestarted) {
    score = (typeof score == 'number' ? score : 0) + 1;
    scoreLabel.setText(score);
  }
}

function gameOver() {
  scoreLabel.setText('Game Over');
  player.kill();
  timer.timer.stop();
}

function startgame() {
  gamestarted = true;
  player.body.gravity.y=2000;
}

function addPlatform(y) {
  if (y == null) {
    y = -tileHeight;
    incrementScore();
  }
  tilesNeeded = Math.ceil((game.world.width) / tileWidth);
  hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
  j = 0;
  while (j < tilesNeeded) {
    if (j != hole && j != hole + 1) {
      addTile(j * tileWidth, y);
    }
    j = (typeof j == 'number' ? j : 0) + 1;
  }
}

function addTile(x, y) {
  tile = (platforms.getFirstDead());
  game.physics.enable(tile,Phaser.Physics.ARCADE);
  tile.reset(x,y);
  tile.body.velocity.y=150;
  tile.body.immovable=true;
  tile.outOfBoundsKill=true;
  tile.checkWorldBounds=true;
}


var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});

cursors = 0;
timer = 0;
player = 0;
platforms = 0;
scoreLabel = '0';
gamestarted = false;
