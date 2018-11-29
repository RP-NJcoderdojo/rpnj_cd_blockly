var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
function preload() {
    game.load.image('asuna', 'assets/asuna_by_vali233.png');
    //game.load.image('phaser', 'assets/phaser.png');
}
var text;
var tween;

function create() {
    game.renderer.renderSession.roundPixels = true;
    game.stage.backgroundColor = '#124184';
    game.add.text(16, 16, "Example 1: Position", { font: "16px Arial", fill: "#ffffff" });
    //game.add.sprite(640, 553, 'phaser');
    text = game.add.text(680, 16, "Click to Start", { font: "16px Arial", fill: "#ffffff" });
    var sprite = game.add.sprite(64, 100, 'asuna');
    tween = game.add.tween(sprite).to( { 'x': 400, 'y': 400 }, 2000);
    game.input.onDown.addOnce(start, this);
}

function start() {
    tween.start();
    text.visible = false;
}
