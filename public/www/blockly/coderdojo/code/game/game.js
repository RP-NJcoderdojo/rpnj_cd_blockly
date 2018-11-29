var map;
var layer;
var cursors;
var player;

function preload() {
  game.load.tilemap('map','../assets/collision_test.json',null ,Phaser.Tilemap.TILED_JSON);
  game.load.image('ground_1x1','../assets/ground_1x1.png');
  this.game.load.spritesheet('ss','../assets/arnie_spritexb.png',32,48,16);
}

function update() {
  if (cursors.left.isDown) {
    player.animations.play('left',10,true);
    player.x=(player.x) - 3} else if (cursors.right.isDown) {
    player.animations.play('right',10,true);
    player.x=(player.x) + 3} else {
    if (cursors.up.isDown) {
      player.animations.play('up',10,true);
      player.y=(player.y) - 3} else if (cursors.down.isDown) {
      player.animations.play('down',10,true);
      player.y=(player.y) + 3} else {
      player.animations.play('idle',0,true);
    }
  }
}

function create() {
  game.stage.backgroundColor='#336666';
  map = (game.add.tilemap('map'));
  map.addTilesetImage('ground_1x1');
  layer = (map.createLayer('Tile Layer 1'));
  layer.resizeWorld();
  cursors = (cursors = game.input.keyboard.createCursorKeys());
  player = (game.add.sprite(game.world.centerX,game.world.centerY,'ss',0));
  game.physics.enable(player,Phaser.Physics.ARCADE);
  player.body.collideWorldBounds=true;
  game.camera.follow(player);
  player.animations.add('idle',[0]);
  player.animations.add('down',[0, 1, 2, 3]);
  player.animations.add('left',[4, 5, 6, 7]);
  player.animations.add('right',[8, 9, 10, 11]);
  player.animations.add('up',[12, 13, 14, 15]);
}


var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});
