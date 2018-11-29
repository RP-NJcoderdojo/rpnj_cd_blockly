var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser_blockly', {preload: preload, create: create, update: update});

var is_firing;
var p;
var cursors;
var fireKey;
var weapons =[];
var currentWeapon;
var arrowPoint;
var arrowPointX = 1;
var arrowPointY = 1;
var p_scale = .5;
var grd;

var Bullet = function (game, key) {
    Phaser.Sprite.call(this, game, 0, 0, key);
    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    this.anchor.set(0.5);

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.exists = false;
 
    this.tracking = false;
    this.scaleSpeed = 0;
    
};


Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.fire = function (x, y, angle, speed, gx, gy) {
   this.body.allowGravity=false;
    gx = gx || 0;
    gy = gy || 0;
    this.reset(x, y);
    this.scale.set(0.1);
    this.tracking = false;
    this.angle = arrowPoint;

    //console.log('x- ' + x);
    //console.log('y- ' + y);
    this.rotation = this.angle * (Math.PI / 180);
    this.game.physics.arcade.velocityFromAngle(this.angle, speed, this.body.velocity);
    //this.rotation = game.physics.arcade.angleBetween(p,new Phaser.Point(x,y));
    //this.rotation = this.angle * (Math.PI / 180);
    console.log(this.rotation);
    
    //this.game.physics.arcade.velocityFromRotation(this.angle, speed, this.body.velocity);

    //this.angle = angle;
        //this.body.gravity.set(gx, gy);
};

Bullet.prototype.update = function () {
    if (this.tracking)
    {
        this.rotation = Math.atan2(this.body.velocity.y, this.body.velocity.x);
    }
    if (this.scaleSpeed > 0)
    {
        this.scale.x += this.scaleSpeed;
        this.scale.y += this.scaleSpeed;
    }
};


var Weapon = {};
////////////////////////////////////////////////////
//  A single bullet is fired in front of the ship //
////////////////////////////////////////////////////

Weapon.SingleBullet = function (game) {
    Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);
    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;
    
    for (var i = 0; i < 3; i++)
    {
        this.add(new Bullet(game, 'arrow'), true);
    }
    return this;
};

Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;

Weapon.SingleBullet.prototype.fire = function (source) {
    if (this.game.time.time < this.nextFire) { return; }
    //console.log('x: ' + source.x);
    //console.log('y: ' + source.y);

    var x = source.x + (10 * arrowPointX);
    var y = source.y + (10 * arrowPointY);
    this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
    this.nextFire = this.game.time.time + this.fireRate;
};

function preload() {
  //this.game.load.spritesheet('ss','assets/white_hair_pixie_w_bow.png',64,64,273);
  this.game.load.spritesheet('ss','assets/p1_spritesheet.png',72.5,96,21);
  this.game.load.image('arrow','assets/arrow.png');
  this.game.load.image('ground','assets/grass_ground.png');
  this.game.load.image('platform','assets/grass_platform.png');
}


function create() {
  game.world.setBounds(0,0,2348,2048);
  is_firing = false;
  //game.stage.backgroundColor='#333399';
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y=500;
  p = (game.add.sprite(32,1900,'ss',0));
  grd = (game.add.sprite(0,1984,'ground',0));
      
  game.physics.enable(p,Phaser.Physics.ARCADE);
  game.physics.enable(grd,Phaser.Physics.ARCADE);    
    
  p.body.collideWorldBounds=true;
  p.body.allowGravity=true;
  grd.body.allowGravity=false;
  grd.body.immovable=true;

 platforms = game.add.physicsGroup();

  platforms.create(500, 150, 'platform');
  platforms.create(200, 300, 'platform');
  platforms.create(400, 450, 'platform');    
  platforms.create(150, 1850, 'platform');
  platforms.create(400, 1700, 'platform');
  platforms.create(700, 1550, 'platform');
  platforms.create(450, 1400, 'platform');
  platforms.create(250, 1250, 'platform');
  platforms.create(50, 1100, 'platform');
    
  platforms.setAll('body.immovable', true);
  platforms.setAll('body.allowGravity', false);

  p.body.bounce.set(0.2);
  p.anchor.set(.5,.5);
    
  p.scale.x = p_scale;
  p.scale.y = p_scale;    
  game.camera.follow(p);
  cursors = (cursors = game.input.keyboard.createCursorKeys());
  /*  
  p.animations.add('idle',[130]);
  p.animations.add('up',[104,105,106,107,108,109,110,111,112]);
  p.animations.add('left',[117,118,119,120,121,122,123,124,125]);
  p.animations.add('down',[130,131,132,133,134,135,136,137,138]);
  p.animations.add('right',[143,144,145,146,147,148,149,150,151]);
  p.animations.add('fireUp',[208,209,210,211,212,213,214,215,216,217,218,219,220]);
  p.animations.add('fireRight',[247,248,249,250,251,252,253,254,255,256,257,258]);
  p.animations.add('fireDown',[234,235,236,237,238,239,240,241,242,243,244,245]);
  p.animations.add('fireLeft',[221,222,223,224,225,226,227,228,229,230,231,232]);
  */
  p.animations.add('walk',[0,1,2,3,4,5]);
  fireKey = (game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
  fireKey.onDown.add(fire_weapon,this);
  fireKey.onUp.add(stop_fire_weapon,this);
  weapons.push(new Weapon.SingleBullet(game));
  currentWeapon = 0;
}

function update() {
  game.physics.arcade.collide(p, grd, null);
  game.physics.arcade.collide(p, platforms, null);
  p.body.velocity.x=0;
  //p.body.velocity.y=0;
  if (cursors.left.isDown) {
    p.body.velocity.x=-175;
    //p.animations.play('left',6,true);
      p.animations.play('walk',6,true);
      p.scale.x = p_scale * -1;
  } else if (cursors.right.isDown) {
    //p.animations.play('right',6,true);
      p.scale.x = p_scale;
      p.animations.play('walk',6,true);
    p.body.velocity.x=175;
  } else {
    //if (cursors.up.isDown && p.body.touching.down) {
    //  p.animations.play('up',6,true);
    //  p.body.velocity.y=-400;
    //} else if (cursors.down.isDown) {
    //  p.animations.play('down',6,true);
    //  p.body.velocity.y=175;
    //} else {
      if (!is_firing) {
        p.animations.stop();
      }
    }
  //}
if (cursors.up.isDown && p.body.touching.down) {
      p.animations.play('up',6,true);
      p.body.velocity.y=-400;
    }    
}

function stop_fire_weapon() {
  is_firing = false;
  p.animations.stop();
}

function fire_weapon() {
  is_firing = true;
  if ((p.body.facing) == (Phaser.UP)) {
    p.animations.play('fireUp',13,true);
    arrowPoint = 270;
    arrowPointY = -1;
    arrowPointX = 1;
  }
  if ((p.body.facing) == (Phaser.RIGHT)) {
    p.animations.play('fireRight',13,true);
    arrowPoint = 0;
    arrowPointX = 1;
    arrowPointY = 1;
  }
  if ((p.body.facing) == (Phaser.LEFT)) {
    p.animations.play('fireLeft',13,true);
    arrowPoint = 180;
    arrowPointX = -1;
    arrowPointY = 1;
  }
  if ((p.body.facing) == (Phaser.DOWN)) {
    p.animations.play('fireDown',13,true);
    arrowPoint = 90;
    arrowPointY = 1;
    arrowPointX = 1;
  }
 weapons[currentWeapon].fire(p);                 
}

