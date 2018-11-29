var p;
var grd;
var cursors;
var platforms;

function preload() {
  this.game.load.spritesheet('ss','assets/p_beige_walk.png',70,96,2);
  game.load.image('ground','assets/grass_ground.png');
  game.load.image('platform','assets/grass_platform.png');
  game.load.image('coin','assets/coin_03.png');
}

function create() {
  game.world.setBounds(0,0,2348,2048);
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y=500;
  p = (game.add.sprite(32,1800,'ss',0));
  grd = (game.add.sprite(0,1984,'ground'));
  p.anchor.set(0.5);
  game.physics.enable(p,Phaser.Physics.ARCADE);
  game.physics.enable(grd,Phaser.Physics.ARCADE);
  p.body.collideWorldBounds=true;
  p.body.allowGravity=true;
  grd.body.allowGravity=false;
  grd.body.immovable=true;
  game.camera.follow(p);
  cursors = (game.input.keyboard.createCursorKeys());
  p.animations.add('walk',[0,1]);
  platforms = (game.add.physicsGroup());
  platforms.create(150,1850,'platform');
  platforms.create(400,1700,'platform');
  platforms.create(700,1600,'platform');
  platforms.create(1050,1600,'platform');
  platforms.create(1400,1500,'platform');
  //platforms.create(700,1500,'platform');
  platforms.create(350,1500,'platform');
  platforms.create(100,1400,'platform');
  platforms.setAll('body.allowGravity',false);
  platforms.setAll('body.immovable',true);
}

function update() {
  game.physics.arcade.collide(p,grd,null,null,this);
  game.physics.arcade.collide(p,platforms,null,null,this);
  if (cursors.left.isDown) {
    p.body.velocity.x=-175;
    p.animations.play('walk',4,true);
    p.scale.x=-1;
  } else if (cursors.right.isDown) {
    p.body.velocity.x=175;
    p.animations.play('walk',4,true);
    p.scale.x=1;
  } else {
    p.body.velocity.x=0;
    p.animations.stop();
  }
  if ((cursors.up.isDown) && ((p.body.onFloor()) || (p.body.touching.down))) {
    p.body.velocity.y=-400;
  }
}


function render(){
    //Show the sprite's hitbox as a green rectangle
    game.debug.body(p);
        platforms.forEach ( function(item) {
        game.debug.body(item)});
}

var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});
