var p;
var cursors;
var fireKey;
var is_firing;


function create() {
  game.stage.backgroundColor='#ffffff';
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y=250;
  p = (game.add.sprite(32,32,'ss',0));
  game.physics.enable(p,Phaser.Physics.ARCADE);
  p.body.collideWorldBounds=true;
  p.body.allowGravity=false;
  p.body.bounce.set(0.2);
  game.camera.follow(p);
  cursors = (cursors = game.input.keyboard.createCursorKeys());
  p.animations.add('idle',[130]);
  p.animations.add('up',[104,105,106,107,108,109,110,111,112]);
  p.animations.add('left',[117,118,119,120,121,122,123,124,125]);
  p.animations.add('down',[130,131,132,133,134,135,136,137,138]);
  p.animations.add('right',[143,144,145,146,147,148,149,150,151]);
  p.animations.add('fireUp',[208,209,210,211,212,213,214,215,216,217,218,219,220]);
  fireKey = (game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
  fireKey.onDown.add(fire_weapon,this);
  fireKey.onUp.add(stop_fire_weapon,this);
}

function preload() {
  this.game.load.spritesheet('ss','./assets/white_hair_pixie_w_bow.png',64,64,273);
}

function update() {
  p.body.velocity.x=0;
  p.body.velocity.y=0;
  if (cursors.left.isDown) {
    p.body.velocity.x=-175;
    p.animations.play('left',6,true); 
  } else if (cursors.right.isDown) {
    p.animations.play('right',6,true);
    p.body.velocity.x=175;
  } else {
    if (cursors.up.isDown) {
      p.animations.play('up',6,true);
      p.body.velocity.y=-175;
    } else if (cursors.down.isDown) {
      p.animations.play('down',6,true);
      p.body.velocity.y=175;
    } else {
      if (!is_firing){
        p.animations.stop();  
      }
    }
  }
}

function fire_weapon() {
  is_firing = true;
  p.animations.play('fireUp',13,false);

}

function stop_fire_weapon() {
  is_firing = false;
}
var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});
