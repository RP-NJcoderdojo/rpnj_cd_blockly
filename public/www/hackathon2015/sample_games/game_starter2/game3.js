var p;
var sprite;
var tile;
var map;
var layer;
var p2;
var d;
var cursors;

function preload() {
  game.load.tilemap('level','game_starter2/assets/dragon2.json',null ,Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles','game_starter2/assets/tiles.png');
  this.game.load.spritesheet('ss','game_starter2/assets/arnie_spritexb.png',32,48,16);
  this.game.load.spritesheet('ss2','game_starter2/assets/pixie_rpg.png',64,64,273);
  this.game.load.spritesheet('dragon','game_starter2/assets/dragon.png',96,96,96);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  map = (game.add.tilemap('level',32,32));
  map.addTilesetImage('TileSet1','tiles');
  map.setCollisionBetween(18,20);
  map.setCollisionBetween(132,141);
  layer = (map.createLayer('Tile Layer 1'));
  layer.resizeWorld();
  map.setTileIndexCallback(7,hitgate,this);
  p2 = (game.add.sprite(64,64,'ss2',0));
  d = (game.add.sprite(390,300,'dragon',0));
  p2.animations.add('idle',[130]);
  p2.animations.add('down',[130,131,132,133,134,135,136,137,138]);
  p2.animations.add('left',[117,118,119,120,121,122,123,124,125]);
  p2.animations.add('right',[143,144,145,146,147,148,149,150,151]);
  p2.animations.add('up',[104,105,106,107,108,109,110,111,112]);
  p2.anchor.x=0.5;
  p2.anchor.y=0.8;
  game.physics.enable(p2,Phaser.Physics.ARCADE);
  p2.body.allowGravity=false;
  p2.body.collideWorldBounds=true;
  p2.body.width=32;
  p2.body.height=48;
  game.camera.follow(p2);
  cursors = (cursors = game.input.keyboard.createCursorKeys());
}

function hitgate(sprite, tile) {
  tile.alpha=0.2;
  layer.dirty=true;
}

function update() {
  game.physics.arcade.collide(layer,p2,null,null,this);
  p2.body.velocity.x=0;
  p2.body.velocity.y=0;
  if (cursors.up.isDown) {
    p2.animations.play('up',10,true);
    p2.body.velocity.y=-175;
  } else if (cursors.down.isDown) {
    p2.animations.play('down',10,true);
    p2.body.velocity.y=175;
  } else {
    if (cursors.left.isDown) {
      p2.animations.play('left',10,true);
      p2.body.velocity.x=-175;
    } else if (cursors.right.isDown) {
      p2.animations.play('right',10,true);
      p2.body.velocity.x=175;
    } else {
      p2.animations.play('idle',10,true);
    }
  }
}


var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});
