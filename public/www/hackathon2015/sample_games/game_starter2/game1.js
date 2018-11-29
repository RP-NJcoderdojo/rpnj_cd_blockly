var map;
var layer;
var p;
var d;
var cursors;
var isJumping = false;

function preload() {
  game.load.tilemap('level','assets/dragon2.json',null ,Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles','assets/tiles.png');
  this.game.load.spritesheet('ss','assets/arnie_spritexb.png',32,48,16);
  this.game.load.spritesheet('dragon','assets/dragon.png',96,96,96);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = 250;
    
  map = (game.add.tilemap('level'));
  map.addTilesetImage('TileSet1','tiles');
  layer = (map.createLayer('Tile Layer 1'));
  layer.resizeWorld();

  map.setCollision(7);
  map.setCollisionBetween(18,20);
  map.setCollisionBetween(132,141);
  
  p = (game.add.sprite(32,32,'ss',0));
  game.physics.enable(p);
  p.body.allowGravity=true;
  p.body.collideWorldBounds=true;
  p.body.bounce.y = 0.2;
  p.body.linearDamping = 1;

  p.animations.add('idle',[0]);
  p.animations.add('down',[0, 1, 2, 3]);
  p.animations.add('left',[4, 5, 6, 7]);
  p.animations.add('right',[8, 9, 10, 11]);
  p.animations.add('up',[12, 13, 14, 15]);
 
  d = (game.add.sprite(390,300,'dragon',0));


  game.camera.follow(p);
  cursors = (cursors = game.input.keyboard.createCursorKeys());
}

function update() {
    game.physics.arcade.collide(p, layer);
    p.body.velocity.x=0;
    //p.body.velocity.y=0;
  if (cursors.up.isDown) {
    //isJumping = true;
    //p.animations.play('up',10,true);
    p.body.velocity.y=-150;
  } /*else if (cursors.down.isDown) {
    p.animations.play('down',10,true);
    p.body.velocity.y=75;
  } else {*/
    if (cursors.left.isDown) {
      p.animations.play('left',10,true);
      p.body.velocity.x=-175;
    } else if (cursors.right.isDown) {
      p.animations.play('right',10,true);
      p.body.velocity.x=175;
    } else {
      p.animations.play('idle',10,true);
    }
  //}
  if (p.body.velocity.y > 0) {
      isJumping = true;
      //p.animations.stop();
  }
  else{
      isJumping = false;
  }
}


var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});
