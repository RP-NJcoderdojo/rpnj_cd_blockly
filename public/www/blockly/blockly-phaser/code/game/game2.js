var game = new Phaser.Game(800,600, Phaser.CANVAS, 'phaser_blockly', {preload: preload, create: create, update: update, render: render});

function preload() {
  game.load.tilemap('map','../assets/collision_test.csv',null ,Phaser.Tilemap.CSV);
  game.load.image('ground_1x1','../assets/ground_1x1.png');
  game.load.spritesheet('ss','../assets/arnie_spritexb.png',32,48,16);
}

var map;
var layer;
var cursors;
var player;


function create() {
  game.stage.backgroundColor='#336666';

  map = game.add.tilemap('map',32,32);
    
  map.addTilesetImage('ground_1x1');
    
  layer = map.createLayer(0);
    
  layer.resizeWorld();
    
  map.setCollisionBetween(0,12);

  player = game.add.sprite(game.world.centerX,game.world.centerY,'ss',0);
  player.animations.add('idle',[0]);
  player.animations.add('down',[0, 1, 2, 3]);
  player.animations.add('left',[4, 5, 6, 7]);
  player.animations.add('right',[8, 9, 10, 11]);
  player.animations.add('up',[12, 13, 14, 15]);

  //game.physics.startSystem(Phaser.Physics.ARCADE);

  game.physics.enable(player,Phaser.Physics.ARCADE);

  player.body.collideWorldBounds = true;
  //player.body.setSize(10, 14, 2, 1);
    
  //layer.debug = true;
    
  cursors = (cursors = game.input.keyboard.createCursorKeys());
  
  game.camera.follow(player);
}

function update() {
  game.physics.arcade.collide(player, layer);
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

function collideLayer(){
console.log('coll');
}

function render() {
//    game.debug.body(layer);
    game.debug.body(player);
}

