// Import stylesheets
import "./style.css";
import "phaser";

// Write Javascript code!
const appDiv = document.getElementById("app");

var config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  parent: appDiv,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.baseURL = "https://examples.phaser.io/assets/";
  this.load.crossOrigin = "anonymous";
  this.load.image("background", "skies/sky4.png");
  this.load.image("platform", "sprites/block.png");
  this.load.image("bullet","bullets/bullet02.png")
  this.load.spritesheet("enemy","games/starstruck/droid.png", {
    frameWidth: 32,
    frameHeight: 32
  })
  this.load.image("star","games/starstruck/star2.png")
  this.load.image("door","games/invaders/starfield.png")
  this.load.spritesheet("player", "games/starstruck/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  });

  this.load.spritesheet("coin", "https://mozdevs.github.io/html5-games-workshop/assets/platformer/coin_spritesheet.png", {
    frameWidth: 22,
    frameHeight: 22
  });

}

var player, platforms;
var cursors;
var cd;
//var enemy;
var bullets;
var stars;
var gameoverText;
var enemys;
var counter=0;
var counterText;
var door;
var winText;
function cdminus(){if(cd>0)cd--;}
function create() {
  setInterval(cdminus, 400)
  cd =0;
  let back = this.add.tileSprite(0, 0, 480, 270, "background");
  back.setOrigin(0);
  back.setScrollFactor(0); //fixedToCamera = true;
  door = this.physics.add.sprite(2750, 250, "door");
  door.setScale(0.1)
  door.setCollideWorldBounds(true);
  this.cameras.main.setBounds(0, 0, 2800, 300);
  this.physics.world.setBounds(0, 0, 2800, 300);

  player = this.physics.add.sprite(50, 200, "player");
  player.setCollideWorldBounds(true);

  this.cameras.main.startFollow(player);
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "front",
    frames: [{ key: "player", frame: 4 }],
    frameRate: 20
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "eye",
    frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 4 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "coi",
    frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 4 }),
    frameRate: 10,
    repeat: -1
  });
  
  
  cursors = this.input.keyboard.createCursorKeys();
  platforms = this.physics.add.staticGroup();
  stars = this.physics.add.staticGroup();
  bullets = this.physics.add.group();
  enemys = this.physics.add.group();
  platforms.create(100, 270, "platform");
  platforms.create(130, 270, "platform")
    platforms.create(130, 240, "platform");
      platforms.create(130, 210, "platform");
        platforms.create(160, 180, "platform");
  platforms.create(350, 270, "platform");
    platforms.create(350, 170, "platform");
    platforms.create(350, 140, "platform");
    platforms.create(350, 110, "platform");
    platforms.create(350, 80, "platform");
    platforms.create(350, 50, "platform");
    platforms.create(350, 20, "platform");

    
    platforms.create(430, 270, "platform");
    platforms.create(430, 240, "platform");
    platforms.create(530, 200, "platform");
    platforms.create(630, 150, "platform");
    platforms.create(730, 100, "platform");
    platforms.create(820, 270, "platform");
     platforms.create(820, 240, "platform");
     platforms.create(820, 210, "platform");
      platforms.create(900, 150, "platform");
      platforms.create(930, 180, "platform");
      platforms.create(960, 180, "platform");
platforms.create(990, 180, "platform");
      platforms.create(1020, 180, "platform");
       platforms.create(1050, 180, "platform");
        platforms.create(1080, 180, "platform");
      platforms.create(1110, 150, "platform");
platforms.create(1200, 270, "platform");


platforms.create(1300, 210, "platform");
platforms.create(1300, 180, "platform");
platforms.create(1300, 150, "platform");
platforms.create(1300, 120, "platform");
platforms.create(1300, 90, "platform");


platforms.create(1400, 270, "platform");
platforms.create(1500, 210, "platform");
platforms.create(1600, 150, "platform");
platforms.create(1700, 210, "platform");
platforms.create(1770, 150, "platform");
platforms.create(1800, 120, "platform");
platforms.create(1800, 90, "platform");
platforms.create(1800, 60, "platform");
platforms.create(1800, 30, "platform");

platforms.create(1800, 270, "platform");
platforms.create(1830, 240, "platform");
platforms.create(1860, 210, "platform");
platforms.create(1890, 180, "platform");
platforms.create(1920, 150, "platform");
platforms.create(1950, 120, "platform");
platforms.create(1980, 150, "platform");
platforms.create(2010, 150, "platform");
platforms.create(2040, 150, "platform");
platforms.create(2070, 150, "platform");
platforms.create(2100, 150, "platform");
platforms.create(2130, 150, "platform");
platforms.create(2160, 150, "platform");
platforms.create(2190, 150, "platform");
platforms.create(2200, 150, "platform");
platforms.create(2230, 150, "platform");
platforms.create(2260, 150, "platform");
platforms.create(2290, 150, "platform");
platforms.create(2320, 150, "platform");
platforms.create(2350, 150, "platform");
platforms.create(2380, 150, "platform");
platforms.create(2410, 120, "platform");
platforms.create(2440, 150, "platform");
platforms.create(2470, 180, "platform");
platforms.create(2500, 210, "platform");
platforms.create(2530, 240, "platform");
platforms.create(2560, 270, "platform");




 
  let star=stars.create(400, 150, "star");
  let star2=stars.create(200, 100, "star");
   let star3=stars.create(745, 80, "star");
   let star4=stars.create(1020, 150, "star");
     let star5=stars.create(1315, 60, "star");
     let star6=stars.create(1785, 100, "star");
     let star7=stars.create(2200, 100, "star");
     let star8=stars.create(2500, 80, "star");



   
  platforms.getChildren().forEach(c =>
    c
      .setScale(0.3)
      .setOrigin(0)
      .refreshBody()
  );
  this.physics.add.collider(player, platforms);
  let enemy=enemys.create(250,250,"enemy");
  enemy.body.velocity.x=-20;
  enemy.setScale(2);
  enemy.setCollideWorldBounds(true);

    let enemy2=enemys.create(550,250,"enemy");
  enemy2.body.velocity.x=-20;
  enemy2.setScale(2);
  enemy2.setCollideWorldBounds(true);

   let enemy3=enemys.create(750,250,"enemy");
  enemy3.body.velocity.x=-20;
  enemy3.setScale(2);
  enemy3.setCollideWorldBounds(true);

     let enemy4=enemys.create(950,140,"enemy");
  enemy4.body.velocity.x=-20;
  enemy4.setScale(2);
  enemy4.setCollideWorldBounds(true);

       let enemy5=enemys.create(950,250,"enemy");
  enemy5.body.velocity.x=-20;
  enemy5.setScale(2);
  enemy5.setCollideWorldBounds(true);
      let enemy6=enemys.create(2050,110,"enemy");
  enemy6.body.velocity.x=-20;
  enemy6.setScale(2);
  enemy6.setCollideWorldBounds(true);
      let enemy7=enemys.create(2150,110,"enemy");
  enemy7.body.velocity.x=-20;
  enemy7.setScale(2);
  enemy7.setCollideWorldBounds(true);
      let enemy8=enemys.create(2250,110,"enemy");
  enemy8.body.velocity.x=-20;
  enemy8.setScale(2);
  enemy8.setCollideWorldBounds(true);
   
  counterText = this.add.text(20, 25,
    counter,
    { font: "30px Arial", fill: "#ffffff", align: "center" });
  counterText.setOrigin(0.5);
  counterText.setScrollFactor(0);
  gameoverText = this.add.text(240, 140,
    'GAME OVER',
    { font: "40px Arial", fill: "#ffffff", align: "center" });
  gameoverText.setOrigin(0.5);
  gameoverText.setScrollFactor(0);
  gameoverText.visible = false;
  winText = this.add.text(240, 140,
    'WYGRAŁEŚ!!!',
    { font: "40px Arial", fill: "#ffffff", align: "center" });
  winText.setOrigin(0.5);
  winText.setScrollFactor(0);
  winText.visible = false;

  enemy.anims.play("eye", true);
   enemy2.anims.play("eye", true);
   enemy3.anims.play("eye", true);
    enemy4.anims.play("eye", true);
    enemy5.anims.play("eye", true);
      enemy6.anims.play("eye", true);
    enemy7.anims.play("eye", true);
    enemy8.anims.play("eye", true);
    



 star.anims.play("coi", true);
  star2.anims.play("coi", true);
  star3.anims.play("coi", true);
  star4.anims.play("coi", true);
  star5.anims.play("coi", true);
    star6.anims.play("coi", true);
  star7.anims.play("coi", true);
  star8.anims.play("coi", true);
    
}

function update() {
  
  if (cursors.left.isDown) {
    player.setVelocityX(-150);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(150);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("front");
   
  }
    
  if (
    cursors.up.isDown &&
    (player.body.onFloor())
  ) {
    player.setVelocityY(-250);
  }
  if(cursors.space.isDown)
  {
    if(cd==0)
    {
      if(player.body.velocity.x<0){
      let bullet=bullets.create(player.x-32, player.y, "bullet");
      bullet.body.velocity.x=(-200);
      bullet.body.gravity.y=-500;
      cd=3;
      }
      else
      {
      let bullet=bullets.create(player.x+32, player.y, "bullet");
      bullet.body.velocity.x=200;
      bullet.body.gravity.y=-500;
      cd=3;
      }
    }
  }
  this.physics.collide(bullets, enemys, bulletHitsEnemy);
  this.physics.collide(bullets, platforms, bulletHitsPlatform);
  this.physics.collide(enemys,platforms,enemyHitsPlatform);
  this.physics.overlap(player,stars,playerHitsStar);
  this.physics.overlap(player,enemys,enemyHitsPlayer);
  this.physics.overlap(player,door,playerHitsDoor);
}
function bulletHitsEnemy(bullet, enemy) {
  bullet.disableBody(true, true);
  enemy.disableBody(true, true);
  counter++;
  counterText.text=counter;
  
}
function bulletHitsPlatform(bullet, platform) {
  bullet.disableBody(true, true);
}
function enemyHitsPlatform(enemy, platform) {
  if(enemy.y>=platform.y-20&&enemy.y<=platform.y+20){
  if(enemy.x>platform.x)enemy.body.velocity.x=20
  else enemy.body.velocity.x=-20}
}
function playerHitsStar(player,star)
{
  star.disableBody(true,true)
  counter++;
  counterText.text=counter;
}
function enemyHitsPlayer(player,enemy)
{
  player.disableBody(true,true)
  gameoverText.visible = true;
}
function playerHitsDoor(player,door)
{
  if(counter>14){winText.visible = true;
  player.disableBody(true,true);}
}