var map;
var layer;
var p;
var d;
var cursors;

function preload() {
  game.load.tilemap('level','game_starter2/assets/dragon2.json',null ,Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles','game_starter2/assets/tiles.png');
  this.game.load.spritesheet('ss','game_starter2/assets/arnie_spritexb.png',32,48,16);
  this.game.load.spritesheet('dragon','game_starter2/assets/dragon.png',96,96,96);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  map = (game.add.tilemap('level'));
  map.addTilesetImage('TileSet1','tiles');
  map.setCollision(7);
  map.setCollisionBetween(18,20);
  map.setCollisionBetween(132,141);
  layer = (map.createLayer('Tile Layer 1'));
  layer.resizeWorld();
  p = (game.add.sprite(32,32,'ss',0));
  d = (game.add.sprite(390,300,'dragon',0));
  p.animations.add('idle',[0]);
  p.animations.add('down',[0, 1, 2, 3]);
  p.animations.add('left',[4, 5, 6, 7]);
  p.animations.add('right',[8, 9, 10, 11]);
  p.animations.add('up',[12, 13, 14, 15]);
  game.physics.enable(p,Phaser.Physics.ARCADE);
  p.body.allowGravity=false;
  p.body.collideWorldBounds=true;
  game.camera.follow(p);
  cursors = (cursors = game.input.keyboard.createCursorKeys());
}

function update() {
  p.body.velocity.x=0;
  p.body.velocity.y=0;
  if (cursors.up.isDown) {
    p.animations.play('up',10,true);
    p.body.velocity.y=-175;
  } else if (cursors.down.isDown) {
    p.animations.play('down',10,true);
    p.body.velocity.y=175;
  } else {
    if (cursors.left.isDown) {
      p.animations.play('left',10,true);
      p.body.velocity.x=-175;
    } else if (cursors.right.isDown) {
      p.animations.play('right',10,true);
      p.body.velocity.x=175;
    } else {
      p.animations.play('idle',10,true);
    }
  }
}


var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});
