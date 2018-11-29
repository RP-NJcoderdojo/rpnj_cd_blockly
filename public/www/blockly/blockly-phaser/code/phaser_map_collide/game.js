var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    //game.load.tilemap('level', 'assets/collision_test2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level', 'assets/dragon2.json', null, Phaser.Tilemap.TILED_JSON);
    
    //game.load.image('tiles', 'assets/ground_1x1.png');
    game.load.image('tiles', 'assets/tiles.png');
    
    game.load.spritesheet('ss','assets/arnie_spritexb.png',32,48,16);
    game.load.spritesheet('dragon','assets/dragon.png',96,96,96);

}

var map;
var tileset;
var layer;
var p;
var cursors;
var d;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#787878';

    map = game.add.tilemap('level');

    //map.addTilesetImage('ground_1x1', 'tiles');
    map.addTilesetImage('TileSet1', 'tiles');

    //  14 = ? block
    
    //map.setCollision(1);
    //map.setCollisionBetween(11, 16);
    map.setCollision(7);
    map.setCollisionBetween(18, 20);
    //map.setCollisionBetween(11, 16);
    map.setCollisionBetween(132, 141);

    //map.setCollisionBetween(20, 25);
    //map.setCollisionBetween(27, 29);
    //map.setCollision(40);
    
    layer = map.createLayer('Tile Layer 1');

    //  Un-comment this on to see the collision tiles
    // layer.debug = true;

    layer.resizeWorld();

    p = game.add.sprite(32,32,'ss',0);
    d = game.add.sprite(game.world.centerX+20,game.world.centerY,'dragon',0);
    d.animations.add('down',[0, 1, 2]);
    d.animations.add('up',[36, 37, 38]);
    d.animations.add('left',[12, 13, 14]);
    d.animations.add('right',[24, 25, 26]);
    d.animations.add('idle',[0]);

    d.anchor.set(0.5);
    
    p.animations.add('idle',[0]);
    p.animations.add('down',[0, 1, 2, 3]);
    p.animations.add('left',[4, 5, 6, 7]);
    p.animations.add('right',[8, 9, 10, 11]);
    p.animations.add('up',[12, 13, 14, 15]);

    game.physics.enable(p);
    game.physics.enable(d);

    game.physics.arcade.gravity.y = 250;
	p.body.allowGravity = false;
    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;

    d.body.allowGravity = false;
    d.body.bounce.y = 0.2;
    d.body.linearDamping = 1;
    d.body.collideWorldBounds = true;
    d.body.height -= 25;
    d.body.width -= 40;

    game.camera.follow(p);

    cursors = game.input.keyboard.createCursorKeys();

}

function stopAnim() {
    d.body.velocity.x = 0;
    d.body.velocity.y = 0;
    d.animations.play('idle',6,true);    
}

function update() {
    
    game.physics.arcade.collide(p, layer);
    game.physics.arcade.collide(d, layer);
    
    p.body.velocity.x = 0;
	p.body.velocity.y = 0;

    if (game.physics.arcade.distanceBetween(d, p) < 300) {
        game.physics.arcade.moveToObject(d, p, 150);

        if (d.body.facing == Phaser.DOWN) {
            d.animations.play('down',6,true);
        }
        else if (d.body.facing == Phaser.UP) {
            d.animations.play('up',6,true);
        }
        else {
          if (d.body.facing == Phaser.LEFT) {
                d.animations.play('left',6,true);
            }
            else if (d.body.facing == Phaser.RIGHT) {
                d.animations.play('right',6,true);
            }
            /*else {
                //d.animations.play('idle',6,true);
                stopAnim();
            }*/
        }
    }
    else {
        /*d.body.velocity.x = 0;
	    d.body.velocity.y = 0;
        d.animations.play('idle',6,true); */
        stopAnim();
    }
    
    if (cursors.up.isDown)
    {
        p.animations.play('up',10,true);
        p.body.velocity.y = -175;
    }
	else if (cursors.down.isDown) {
        p.animations.play('down',10,true);
		p.body.velocity.y = 175;
	}
	else {
        if (cursors.left.isDown)
        {
            p.animations.play('left',10,true);
            p.body.velocity.x = -175;
        }
        else if (cursors.right.isDown)
        {
            p.animations.play('right',10,true);
            p.body.velocity.x = 175;
        }
        else {
            p.animations.play('idle',10,true);
        }
    }
}

function render() {
     //game.debug.body(d);
    //game.debug.bodyInfo(p, 32, 320);
}