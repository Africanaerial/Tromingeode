function game() {
//Try the HTML version of this.
const backgroundMusic = new Audio('Selections.mp3.wav');  
backgroundMusic.loop = true;  
backgroundMusic.volume = 0.5;  

document.addEventListener('click', () => {
    backgroundMusic.play();
}, { once: true });  

//In game currency.
let tokens = 0;
let jades = 0;
//In game currency end.
var lives;
lives = 3;
var bossHp;
var chosenWorld;
//Check if true or false.
inMenu = undefined;
isExposed = false;
hasClaimedFirstAward = false;
hasCollectedSecretTokensOne = false;
hasCollectedSecretTokensTwo = false;
//End of check true or false.
function htmlItems() {

}
htmlItems();

// Intervals and timeouts.
setInterval(function() {tokens += 10}, 1800000);

//End of intervals and timeouts.
function recoverableCode() {
/*
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "gray");
grd.addColorStop(1, "#00BA13");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
var audio = new Audio('audio/audio.mp3');
audio.play();
*/
}
//Extra code.

//Abilities.
let abilities = [];
let abiliySamples = [];
let obtainableAbilities = ["Wind Blast", "Wind Beam", "Wind Bullet", "Wind Orb", "Wind Column", "Wind Explosion", "Thundercloud Fist", "Typhoon Outrage", "Boulder Throw", "Sharp Leaf", "Needle Grass", "Poison Bullet", "Mud Blast", "Strangle", "Rock Fist", "Massive Earthquake", "Incineration Spark", "Blue Flame Surge", "Fire Bullet", "Fire Beam", "Fire Blast", "Pyro Fist", "Hellblaze Chamber", "Abyssal Fist", "Geyser", "Whirlpool", "Water Bullet", "Wave", "Tsunami", "Supersonic Wave", "Hypersonic Crush", "Ultrasonic Lightshow", "Pure Sound Fist", "500 Decibel Finale"];
let uncollectedSamples = ["Sample of Wind Blast", "Sample of Wind Beam", "Sample of Wind Bullet", "Sample of Wind Orb", "Sample of Wind Column", "Sample of Wind Explosion", "Sample of Thundercloud Fist", "Sample of Typhoon Outrage", "Sample of Boulder Throw", "Sample of Sharp Leaf", "Sample of Needle Grass", "Sample of Poison Bullet", "Sample of Mud Blast", "Sample of Strangle", "Sample of Rock Fist", "Sample of Massive Earthquake", "Sample of Incineration Spark", "Sample of Blue Flame Surge", "Sample of Fire Bullet", "Sample of Fire Beam", "Sample of Fire Blast", "Sample of Pyro Fist", "Sample of Hellblaze Chamber", "Sample of Abyssal Fist", "Sample of Geyser", "Sample of Whirlpool", "Sample of Water Bullet", "Sample of Wave", "Sample of Tsunami", "Sample of Supersonic Wave", "Sample of Hypersonic Crush", "Sample of Ultrasonic Lightshow", "Sample of Pure Sound Fist", "Sample of 500 Decibel Finale"];
//Abilities end.
let uncollectedEmblems = ["Loot Emblem", "Psychic Emblem", "Randomized Ability Emblem", "Violent Emblem", "Assist Emblem"];
let perks = ["Emblem Perk"];
let inventory = [];
inventory.push("Greatsword of the Depths");
let craftableItems = [];
let creatures = ["Skathaide", "Lepinkari"];
let creatureEggs = ["Dormant Bounded Egg"];
let eggFragments = ["Imprisoned Dragon Eggshell"];
function eggForge() {
var eggCrafter = document.getElementById("eggcrafter");
eggCrafter.onclick = function() {

var craftEgg = prompt("Which egg do you want to craft? (Dormant Bounded Egg)")
if(craftEgg == "Dormant Bounded Egg") {
alert("This egg hatches into Siderlaki, the Ironclad Prison Dragon. Required materials: (Imprisoned Dragon Eggshell (5), Iron(50), Organic Matter(10), Deepscale(5)) The description of this dragon can be viewed in the incubator.");
}
}
}
eggForge();


//End of extra code.
/*
if(inMenu == undefined) {
var canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 1500;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "blue");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
}

if(inMenu == false) {
ctx.clearRect(0, 0, 1000, 2000);
}
*/
var userName = prompt("Choose a name.");
alert("Your name is: " + userName);
if(userName == null) {
alert("Try Again.");
}
while(userName == null){
var userName = prompt("Choose a name.");
alert("Your name is: " + userName);

}
document.cookie = userName;
function biomeForMenuTwo() {
var chooseBiomeForMenuTwo = document.getElementById("biomeselecter");
chooseBiomeForMenuTwo.onclick = function() {
alert("You cannot enter a biome in the menu.");
}
}
biomeForMenuTwo();
function chooseYourWorld() {

var worldarea = document.getElementById("chooseworld");
worldarea.onclick = function() {
var chosenWorld = prompt("Select a world. (Verdant Subterrain, Frost Sun, Glacial Peaks, Acid Volcano, and Island of the envious Beast. Or you can return to the menu by entering Menu.)");
let worldLocation = chosenWorld;
alert("You have chosen:" + " " + chosenWorld);
if(chosenWorld == "Verdant Subterrain") {
inMenu == false;
var bossHp = 11;
var gameLoop;
var targetTimeout;
var spawnDraviteProjectile;
//Detection variables.
var char;
var canvasRect;
var charRect;
var charX;
var charY;
var charW;
var charH;
var detectionPadding;
var collisionAreaLeft;
var collisionAreaRight;
var collisionAreaTop;
var collisionAreaBottom;
var projX;
var projY;
if(inMenu == false) {
console.log("False");
}
function drawBackground() {
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, canvas.width, canvas.height);
grd.addColorStop(0, "#8B8000");
grd.addColorStop(1, "#12674A");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function squareOne() {
ctx.fillStyle = "lime";
ctx.fillRect(100, 100, 50, 25);
}
squareOne();
function squareTwo() {
ctx.fillStyle = "lime";
ctx.fillRect(60, 50, 50, 25);
}
squareTwo();
function squareThree() {
ctx.fillStyle = "lime";
ctx.fillRect(150, 70, 75, 25);
}
squareThree();
function squareFour() {
ctx.fillStyle = "lime";
ctx.fillRect(170, 25, 85, 25);
}
squareFour();
function squareFive() {
ctx.fillStyle = "lime";
ctx.fillRect(100, 10, 50, 25);
}
squareFive();
function squareSix() {
ctx.fillStyle = "lime";
ctx.fillRect(125, 40, 50, 25);
}
squareSix();
function squareSeven() {
ctx.fillStyle = "lime";
ctx.fillRect(40, 1, 85, 25);
}
squareSeven();
function squareEight() {
ctx.fillStyle = "lime";
ctx.fillRect(180, 100, 85, 25);
}
squareEight();
function squareNine() {
ctx.fillStyle = "lime";
ctx.fillRect(40, 90, 50, 75);
}
squareNine();
function squareTen() {
ctx.fillStyle = "lime";
ctx.fillRect(200, 1, 100, 10);
}
squareTen();
function squareEleven() {
ctx.fillStyle = "lime";
ctx.fillRect(60, 50, 50, 25);
}
squareEleven();
}

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
let projectiles = [];
function createCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "cyan";
    ctx.stroke();
}

// Spawns a brown projectile and checks for collisions

function draviteProjectile() {
    let x = Math.round(Math.random() * (canvas.width - 40));
    let y = Math.round(Math.random() * (canvas.height - 40));
console.log("New projectile at:", x, y);
    projectiles.push({ x, y, color: "brown" });

    targetTimeout
= setTimeout(() => {
        projectiles.forEach(p => p.color = "red"); // Turn red after 2 sec

function draviteProjectile() {
    // Random position for the projectile
    let x = Math.round(Math.random() * 190);
    let y = Math.round(Math.random() * 100);

    // Draw the projectile
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "green";
    ctx.stroke();

    // After creating a new projectile, check for collisions with the character
    checkCollision(x, y);
}

function checkCollision(projX, projY) {
    let char = document.getElementById("character");
    let canvas = document.getElementById("background");

    // Get the canvas and character's bounding rectangle relative to the viewport
    let canvasRect = canvas.getBoundingClientRect();
    let charRect = char.getBoundingClientRect();

    // Calculate the position of the character relative to the canvas
    let charX = Math.round(charRect.left - canvasRect.left);  // Character's X relative to canvas
    let charY = Math.round(charRect.top - canvasRect.top);    // Character's Y relative to canvas
    let charW = Math.round(charRect.width);                   // Character's width
    let charH = Math.round(charRect.height);                  // Character's height

    // Adjust the character's collision area
    let detectionPadding = 50;  // Adjust padding to your needs
    let collisionAreaLeft = charX - detectionPadding;
    let collisionAreaRight = charX + charW + detectionPadding;
    let collisionAreaTop = charY - detectionPadding;
    let collisionAreaBottom = charY + charH + detectionPadding;
console.log(moveLeft);
console.log(moveUp);
    // Check if the new projectile is within the updated detection area
    if (
        projX + 20 >= collisionAreaLeft && projX - 20 <= collisionAreaRight &&
        projY + 20 >= collisionAreaTop && projY - 20 <= collisionAreaBottom
    ) {
        console.log("Collision detected!");
        alert("You took damage! You have " + lives + " lives left!");
        lives -= 1;
    }
if(lives == 0 || lives < 0) {
alert("You died! Try again.");
lives += 3;
bossHp = 11;
alert("The boss health is back to " + bossHp + ".");
}
}

// Call the function at regular intervals to create projectiles
/*
if (
        projX + 20 >= collisionAreaLeft && projX - 20 <= collisionAreaRight &&
        projY + 20 >= collisionAreaTop && projY - 20 <= collisionAreaBottom
    ) {
        console.log("Collision detected!");
        alert("This works, you may now add damaging.");
       
    }
*/
var dI = setInterval(draviteProjectile, 5000); // Adjust the interval as needed
setInterval(() => {
    checkCollision();
}, 500);
    }, 2000);


    setTimeout(() => {
        projectiles.shift(); // Remove old projectiles after 3.5 sec
    }, 3500);
}

function render() {
    drawBackground();
    createCircle();

    projectiles.forEach(({ x, y, color }) => {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 8;
        ctx.strokeStyle = "green";
        ctx.stroke();
    });
}
gameLoop = setInterval(() => {
    render();
}, 100);


spawnDraviteProjectile = setInterval(draviteProjectile, 5000);

if(!canvas) {
drawBackground();
}

function biomeForVerdantIsland() {
var chooseBiomeForVerdantIsland = document.getElementById("biomeselecter");
chooseBiomeForVerdantIsland.onclick = function() {

var selectBiomeForVerdantIsland = prompt("Select a biome. (Dravite Depths)");
if(selectBiomeForVerdantIsland == "Dravite Depths") {
clearInterval(spawnDraviteProjectile);
clearTimeout(targetTimeout);
clearInterval(gameLoop);
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "grey");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function squareOne() {
ctx.fillStyle = "green";
ctx.fillRect(100, 100, 50, 25);
}
squareOne();
function squareTwo() {
ctx.fillStyle = "green";
ctx.fillRect(60, 50, 50, 25);
}
squareTwo();
function squareThree() {
ctx.fillStyle = "lime";
ctx.fillRect(150, 70, 75, 25);
}
squareThree();
function squareFour() {
ctx.fillStyle = "green";
ctx.fillRect(170, 25, 85, 25);
}
squareFour();
function squareFive() {
ctx.fillStyle = "green";
ctx.fillRect(100, 10, 50, 25);
}
squareFive();
function squareSix() {
ctx.fillStyle = "lime";
ctx.fillRect(125, 40, 50, 25);
}
squareSix();
function squareSeven() {
ctx.fillStyle = "green";
ctx.fillRect(40, 1, 85, 25);
}
squareSeven();
function squareEight() {
ctx.fillStyle = "green";
ctx.fillRect(180, 100, 85, 25);
}
squareEight();
function squareNine() {
ctx.fillStyle = "lime";
ctx.fillRect(40, 90, 50, 75);
}
squareNine();
function squareTen() {
ctx.fillStyle = "green";
ctx.fillRect(200, 1, 100, 10);
}
squareTen();
function squareEleven() {
ctx.fillStyle = "lime";
ctx.fillRect(60, 50, 50, 25);
}
squareEleven();
}
}
}
biomeForVerdantIsland();
return chosenWorld;
}
if(chosenWorld == "Frost Sun") {

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "aqua");
grd.addColorStop(1, "blue");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function spikeOne() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(100, 100); 
  ctx.lineTo(200, 100); 
  ctx.lineTo(150, 200); 
  ctx.closePath(); 

  
  ctx.strokeStyle = "orange"; 
  ctx.fillStyle = "cyan"; 

  
  ctx.fill(); 
  ctx.stroke(); 
}
spikeOne();
function spikeTwo() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(150, 50);
  ctx.lineTo(100, 50); 
  ctx.closePath(); 

  ctx.strokeStyle = "orange";
  ctx.fillStyle = "cyan";

  ctx.fill();
  ctx.stroke();
}
spikeTwo();
function spikeThree() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  ctx.moveTo(50, 75); 
  ctx.lineTo(200, 100); 
  ctx.lineTo(100, 50); 
  ctx.closePath(); 

  ctx.strokeStyle = "orange";
  ctx.fillStyle = "cyan";

  
  ctx.fill(); 
  ctx.stroke();
}
spikeThree();
function plasmaBomb() {

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/*
let rhombus = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 50,
    visible: true,
    exploding: false,
    explosionRadius: 10
};
*/
function drawBackground() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "aqua");
    gradient.addColorStop(1, "blue");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
function spikeOne() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(100, 100); 
  ctx.lineTo(200, 100); 
  ctx.lineTo(150, 200); 
  ctx.closePath(); 

  
  ctx.strokeStyle = "orange"; 
  ctx.fillStyle = "cyan"; 

  
  ctx.fill(); 
  ctx.stroke(); 
}
spikeOne();
function spikeTwo() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(150, 50);
  ctx.lineTo(100, 50); 
  ctx.closePath(); 

  ctx.strokeStyle = "orange";
  ctx.fillStyle = "cyan";

  ctx.fill();
  ctx.stroke();
}
spikeTwo();
function spikeThree() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  ctx.moveTo(50, 75); 
  ctx.lineTo(200, 100); 
  ctx.lineTo(100, 50); 
  ctx.closePath(); 

  ctx.strokeStyle = "orange";
  ctx.fillStyle = "cyan";

  
  ctx.fill(); 
  ctx.stroke();
}
spikeThree();

}

// Function to draw the rhombus

const character = document.getElementById("character");
//const canvas = document.getElementById("background");
//const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rhombus = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 50,
    visible: true,
    exploding: false,
    explosionRadius: 0
};
// Create and append the canvas

function drawBackground() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "aqua");
    gradient.addColorStop(1, "blue");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
function squareOne() {
ctx.fillStyle = "cyan";
ctx.fillRect(100, 100, 350, 325);
}
squareOne();
function squareTwo() {
ctx.fillStyle = "aquamarine";
ctx.fillRect(300, 300, 325, 350);
}
squareTwo();
function squareThree() {
ctx.fillStyle = "cyan";
ctx.fillRect(600, 700, 350, 340);
}
squareThree();
function squareFour() {
ctx.fillStyle = "aquamarine";
ctx.fillRect(800, 475, 325, 350);
}
squareFour();
function squareFive() {
ctx.fillStyle = "cyan";
ctx.fillRect(200, 1400, 350, 340);
}
squareFive();
function squareSix() {
ctx.fillStyle = "aquamarine";
ctx.fillRect(150, 900, 325, 350);
}
squareSix();
function squareSeven() {
ctx.fillStyle = "cyan";
ctx.fillRect(200, 1000, 350, 340);
}
squareSeven();
function squareEight() {
ctx.fillStyle = "aquamarine";
ctx.fillRect(100, 1500, 325, 350);
}
squareEight();
function squareNine() {
ctx.fillStyle = "cyan";
ctx.fillRect(850, 1450, 350, 340);
}
squareNine();
function createStar() {
function starBase() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() *  800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.lineWidth = 64;
    ctx.strokeStyle = "orange";
    ctx.stroke();
function flare() {
function flareOne() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 32;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareOne();
function flareTwo() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 32;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareTwo();
function flareThree() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 32;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareThree();
function flareFour() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 32;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareFour();
function flareFive() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 32;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareFive();
function flareSix() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareSix();
function flareSeven() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareSeven();
function flareEight() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareEight();
function flareNine() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareNine();
function flareTen() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareTen();
function flareEleven() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareEleven();
function flareTwelve() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.25;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareTwelve();
}
flare();

function flareAgain() {
function flareOne() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 64;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareOne();
function flareTwo() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 64;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareTwo();
function flareThree() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 64;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareThree();
function flareFour() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 64;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
flareFour();
function flareFive() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 64;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareFive();
function flareSix() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareSix();
function flareSeven() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareSeven();
function flareEight() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}
flareEight();
function flareNine() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 16;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareNine();
function flareTen() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 16;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareTen();
function flareEleven() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 16;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareEleven();
function flareTwelve() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = Math.random() * 500 * 1.5;
    let y = Math.random() * 800 * 1.5;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 16;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
flareTwelve();
}
flareAgain();

function core() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = 500 + Math.random(1-11) * 25;
    let y = 800 + Math.random(1-11) * 25;
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.lineWidth = 32;
    ctx.strokeStyle = "orange";
    ctx.stroke();


}
core();
}
starBase();

}
createStar();


}

function drawRhombus() {
    if (rhombus.exploding) {
        
let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(0.25, "red");
    gradient.addColorStop(0.5, "orange");
    gradient.addColorStop(0.75, "yellow");
    gradient.addColorStop(1, "white");

    ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.arc(rhombus.x, rhombus.y, rhombus.explosionRadius, 0, Math.PI * 2);
        ctx.fill();
        return;
    }

    if (!rhombus.visible) return;

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(rhombus.x, rhombus.y - rhombus.size / 2); // Top.
    ctx.lineTo(rhombus.x + rhombus.size / 2, rhombus.y); // Right.
    ctx.lineTo(rhombus.x, rhombus.y + rhombus.size / 2); // Bottom.
    ctx.lineTo(rhombus.x - rhombus.size / 2, rhombus.y); // Left.
    ctx.closePath();
    ctx.fill();
}

function getCharacterCenter() {
    let rect = character.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

let canTakeDamage = true;

function checkExplosionCollision() {
    if (!canTakeDamage) return;

    let charCenter = getCharacterCenter();
    let distance = Math.sqrt((charCenter.x - rhombus.x) ** 2 + (charCenter.y - rhombus.y) ** 2);

    if (distance <= rhombus.explosionRadius) {
        alert("You took damage!");
lives -= 1;
if(lives <= 0) {
alert("You were defeated!");
setTimeout(() => {
alert("Your lives and the boss HP have been reset.");
lives += 3;
}, 10);


}
        canTakeDamage = false;
    }
}

function explodeAndRespawn() {
    rhombus.exploding = true;
    rhombus.explosionRadius = 50;
    canTakeDamage = true; // Reactivate damage for the next explosion

    let explosionInterval = setInterval(() => {
        rhombus.explosionRadius += 20;
        checkExplosionCollision(); // Check if the character enters explosion area

        if (rhombus.explosionRadius > 500) { 
            clearInterval(explosionInterval);
            rhombus.exploding = false;
            rhombus.visible = false;

            setTimeout(() => {
                rhombus.x = Math.random() * canvas.width;
                rhombus.y = Math.random() * canvas.height;
                rhombus.visible = true;
            }, 500);
        }
    }, 50);
}

function animate() {
    drawBackground(); 
    drawRhombus();
    requestAnimationFrame(animate);
}


animate();


setInterval(explodeAndRespawn, 2000);
// setInterval(checkLives(), 1);

}
plasmaBomb();


ctx.beginPath();
ctx.arc(canvas.width, 100, 20, 0, 2 * Math.PI);
ctx.fillStyle = "orange";
ctx.fill();
ctx.lineWidth = 8;
ctx.strokeStyle = "blue";
ctx.stroke();

function biomeForFrostSun() {
var chooseBiomeForFrostSun = document.getElementById("biomeselecter");
chooseBiomeForFrostSun.onclick = function() {
var selectBiomeForFrostSun = prompt("Select a biome. (Icefire)");
if(selectBiomeForFrostSun == "Icefire") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "aquamarine");
grd.addColorStop(1, "orange");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForFrostSun();
return chosenWorld;
}
if(chosenWorld == "Glacial Peaks") {
inMenu == false;
if(!inMenu) {
console.log("False");
}
alert("PRO TIP: If you are right below a snowflake, you will take frost damage.");
function drawBackground() {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "aquamarine");
grd.addColorStop(0.25, "lightblue");
grd.addColorStop(0.5, "white");
grd.addColorStop(0.75, "blue");
grd.addColorStop(1, "aquamarine");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);

ctx.beginPath();
ctx.arc(65, 100, 20, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 8;
ctx.strokeStyle = "cyan";
ctx.stroke();

function glacierSpikeOne() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(100, 100); 
  ctx.lineTo(200, 100); 
  ctx.lineTo(150, 50); 
  ctx.closePath(); 
  ctx.strokeStyle = "aqua"; 
  ctx.fillStyle = "white"; 

  
  ctx.fill(); 
  ctx.stroke(); 
}
glacierSpikeOne();
function glacierSpikeTwo() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  //The spike.
  ctx.beginPath();
  ctx.moveTo(50, 150); //First point.
  ctx.lineTo(200, 200); //Second point.
  ctx.lineTo(150, 100); //Third point.
  ctx.closePath(); 

  
  ctx.strokeStyle = "aqua"; 
  ctx.fillStyle = "white"; 

  
  ctx.fill(); 
  ctx.stroke(); 
}
glacierSpikeTwo();
function iceCubeOne() {
ctx.fillStyle = "white";
  ctx.strokeStyle = "aqua";
ctx.lineWidth = 8; 
ctx.fillRect(102, 100, 85, 100);

}
iceCubeOne();
}
setInterval(() => drawBackground, 1);
/*
const fallingPermafrostShards = setInterval(function() {alert("You got one Permafrost Shard! It must have fell on you.....")
inventory.push("Permafrost Shard")}, 5000);
*/

function iceShards() {
/*
const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const grd = ctx.createLinearGradient(0, 0, 170, 0);
        grd.addColorStop(0, "aquamarine");
        grd.addColorStop(0.25, "lightblue");
        grd.addColorStop(0.5, "white");
        grd.addColorStop(0.75, "blue");
        grd.addColorStop(1, "aquamarine");

        // Draw the background and elements
        function drawBackground() {
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw the first glacier spike
            ctx.beginPath();
            ctx.moveTo(100, 100); 
            ctx.lineTo(200, 100); 
            ctx.lineTo(150, 50); 
            ctx.closePath(); 
            ctx.strokeStyle = "aqua"; 
            ctx.fillStyle = "white"; 
            ctx.fill(); 
            ctx.stroke();

            // Draw the second glacier spike
            ctx.beginPath();
            ctx.moveTo(50, 150); // First point
            ctx.lineTo(200, 200); // Second point
            ctx.lineTo(150, 100); // Third point
            ctx.closePath(); 
            ctx.strokeStyle = "aqua"; 
            ctx.fillStyle = "white"; 
            ctx.fill(); 
            ctx.stroke();

            // Draw the ice cube
            ctx.fillStyle = "white";
            ctx.strokeStyle = "aqua";
            ctx.lineWidth = 8; 
            ctx.fillRect(102, 100, 85, 100);
        }

        drawBackground();

        let lives = 3;
        let rhombuses = [];
        let gameRunning = true;

        class Rhombus {
            constructor(x, size, speed) {
                this.x = x;
                this.y = 0;
                this.size = size;
                this.speed = speed;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 4);
                ctx.fillStyle = "white";
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }

            update() {
                this.y += this.speed;
            }

            collidesWith(charX, charY, charWidth, charHeight) {
                return (
                    this.x + this.size / 2 > charX &&
                    this.x - this.size / 2 < charX + charWidth &&
                    this.y + this.size / 2 > charY &&
                    this.y - this.size / 2 < charY + charHeight
                );
            }
        }

        function spawnRhombus() {
            if (!gameRunning) return;
            let size = Math.random() * 30 + 20;
            let x = Math.random() * canvas.width;
            let speed = Math.random() * 3 + 2;
            rhombuses.push(new Rhombus(x, size, speed));
        }

        function updateGame() {
            if (!gameRunning) return;

            // Redraw the background to prevent it from being cleared
            drawBackground();

            // Get character position
            let charX = character.offsetLeft;
            let charY = character.offsetTop;
            let charWidth = character.offsetWidth;
            let charHeight = character.offsetHeight;

            // Update rhombuses
            rhombuses.forEach((rhombus, index) => {
                rhombus.update();
                rhombus.draw();

                if (rhombus.collidesWith(charX, charY, charWidth, charHeight)) {
                    lives-= 0.5;
                    rhombuses.splice(index, 1);
                    alert(`You took damage! Lives left: ${lives}`);

                    if (lives <= 0) {
                        setTimeout(() => {
lives = 3;
                        alert("You died! Lives and boss HP have been reset.");
}, 10);
                    }
                }
            });

            rhombuses = rhombuses.filter(rhombus => rhombus.y < canvas.height);

            requestAnimationFrame(updateGame);
        }

        setInterval(spawnRhombus, 500);
        updateGame()
*/
const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const grd = ctx.createLinearGradient(0, 0, 170, 0);
        grd.addColorStop(0, "aquamarine");
        
        grd.addColorStop(1, "lightblue");

        // Draw the background and elements
        function drawBackground() {
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
/*
            // Draw the first glacier spike
            ctx.beginPath();
            ctx.moveTo(100, 100); 
            ctx.lineTo(200, 100); 
            ctx.lineTo(150, 50); 
            ctx.closePath(); 
            ctx.strokeStyle = "aqua"; 
            ctx.fillStyle = "white"; 
            ctx.fill(); 
            ctx.stroke();

            // Draw the second glacier spike
            ctx.beginPath();
            ctx.moveTo(50, 150); // First point
            ctx.lineTo(200, 200); // Second point
            ctx.lineTo(150, 100); // Third point
            ctx.closePath(); 
            ctx.strokeStyle = "aqua"; 
            ctx.fillStyle = "white"; 
            ctx.fill(); 
            ctx.stroke();

            // Draw the ice cube
            ctx.fillStyle = "white";
            ctx.strokeStyle = "aqua";
            ctx.lineWidth = 8; 
            ctx.fillRect(102, 100, 85, 100);
*/
function bossFight() {

// Get the canvas and its context
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

// Set canvas size
//canvas.width = 400;
//canvas.height = 400;

// Circle properties
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;  // Circle radius
const numRhombuses = 16; // Number of rhombuses

// Function to draw a rhombus
function drawRhombus(x, y, size, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(0, -size); // Top
    ctx.lineTo(size, 0);  // Right
    ctx.lineTo(0, size);  // Bottom
    ctx.lineTo(-size, 0); // Left
    ctx.closePath();
    
    ctx.fillStyle = "blue";
    ctx.fill();
    
    ctx.restore();
}

// Draw the circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.fillStyle = "aquamarine";
ctx.fill();
ctx.closePath();

// Draw rhombuses around the circle
for (let i = 0; i < numRhombuses; i++) {
    let angle = (i / numRhombuses) * (Math.PI * 2);
    let x = centerX + Math.cos(angle) * (radius + 20);
    let y = centerY + Math.sin(angle) * (radius + 20);
    
    drawRhombus(x, y, 25, angle);
}

/*
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const numRhombuses = 16;
const vibrationStrength = 3; // How much they move

function drawRhombus(x, y, size, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(-size, 0);
    ctx.closePath();
    
    ctx.fillStyle = "blue";
    ctx.fill();
    
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

    // Add random vibration
    let vibX = (Math.random() - 0.5) * vibrationStrength;
    let vibY = (Math.random() - 0.5) * vibrationStrength;

    // Draw vibrating circle
    ctx.beginPath();
    ctx.arc(centerX + vibX, centerY + vibY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.closePath();

    // Draw vibrating rhombuses
    for (let i = 0; i < numRhombuses; i++) {
        let angle = (i / numRhombuses) * (Math.PI * 2);
        let x = centerX + Math.cos(angle) * (radius + 20) + vibX;
        let y = centerY + Math.sin(angle) * (radius + 20) + vibY;
        
        drawRhombus(x, y, 35, angle);
    }

    requestAnimationFrame(draw); // Keep animating
}

draw(); // Start animation
*/
}
bossFight();
        }

        drawBackground();

        let lives = 3;
        let rhombuses = [];
        let gameRunning = true;

        const character = document.getElementById("character");

        class Rhombus {
            constructor(x, size, speed) {
                this.x = x;
                this.y = 0;
                this.size = size;
                this.speed = speed;
                this.tookDamage = false;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 4);
                ctx.fillStyle = "white";
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }

            update() {
                this.y += this.speed;
            }

            collidesWith(charX, charY, charWidth, charHeight) {
                // Check for collision with character
                return (
                    this.x + this.size / 2 > charX &&
                    this.x - this.size / 2 < charX + charWidth &&
                    this.y + this.size / 2 > charY &&
                    this.y - this.size / 2 < charY + charHeight
                );
            }
        }

        function spawnRhombus() {
            if (!gameRunning) return;
            let size = Math.random() * 30 + 20;
            let x = Math.random() * canvas.width;
            let speed = Math.random() * 3 + 2;
            rhombuses.push(new Rhombus(x, size, speed));
        }

        function updateGame() {
            if (!gameRunning) return;

            // Redraw the background to prevent it from being cleared
            drawBackground();

            // Get character position
            let charX = character.offsetLeft;
            let charY = character.offsetTop;
            let charWidth = character.offsetWidth;
            let charHeight = character.offsetHeight;

            // Update rhombuses
            rhombuses.forEach((rhombus, index) => {
                rhombus.update();
                rhombus.draw();

                // Check for collision
                if (rhombus.collidesWith(charX, charY, charWidth, charHeight)) {
                    if (!rhombus.tookDamage) {  // Prevent multiple alerts for the same rhombus
                        lives -= 0.5;
                        rhombus.tookDamage = true; 
                        alert(`You took damage! Lives left: ${lives}`);

                        if (lives <= 0) {
                            setTimeout(() => {
lives = 3;
                            alert("You died of hypothermia! Your lives and boss HP were reset.");
}, 10);
                        }
                    }
                    rhombuses.splice(index, 1);  // Remove rhombus after collision
                }
            });

            // Remove rhombuses that are off-screen
            rhombuses = rhombuses.filter(rhombus => rhombus.y < canvas.height);

            requestAnimationFrame(updateGame);
        }

        setInterval(spawnRhombus, 500);
        updateGame()
}
iceShards();
function biomeForAbsolutePermafrost() {
var chooseBiomeForAbsolutePermafrost = document.getElementById("biomeselecter");
chooseBiomeForAbsolutePermafrost.onclick = function() {
var selectBiomeForAbsolutePermafrost = prompt("Select a biome. (Everfreeze)");
if(selectBiomeForAbsolutePermafrost == "Everfreeze") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "#baf2ef");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForAbsolutePermafrost();
return chosenWorld;
}
if(chosenWorld == "Acid Volcano") {
inMenu == false;
if(inMenu == false) {
console.log("False");
}
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "lime");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForAcidVolcano() {
var chooseBiome = document.getElementById("biomeselecter");
chooseBiome.onclick = function() {
var selectBiome = prompt("Select a biome. (Acid Mantle)");
if(selectBiome == "Acid Mantle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "orange");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForAcidVolcano();
return chosenWorld;
}
if(chosenWorld == "Island of the envious Beast") {
inMenu == false;
if(inMenu == false) {
console.log("False");
}
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "yellow");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForIslandOfTheEnviousBeast() {
var chooseBiome = document.getElementById("biomeselecter");
chooseBiome.onclick = function() {
var selectBiome = prompt("Select a biome. (Envy Lair)");
if(selectBiome == "Envy Lair") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "yellow");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForIslandOfTheEnviousBeast();
return chosenWorld;
}
if(chosenWorld == "Menu") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "purple");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForMenu() {
var chooseBiomeForMenu = document.getElementById("biomeselecter");
chooseBiomeForMenu.onclick = function() {
alert("You cannot enter a biome in the menu.");
}
}
biomeForMenu();
return chosenWorld;
}
if(worldLocation == "Dread Island") {
alert("You sneaky code finder!");
inMenu == false;
if(inMenu == false) {
console.log("False");
}
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "gray");
grd.addColorStop(1, "#A9A9A9");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForDreadIsland() {
var chooseBiome = document.getElementById("biomeselecter");
chooseBiome.onclick = function() {
var selectBiome = prompt("Select a biome. (Feardrop)");
if(selectBiome == "Feardrop") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#636363");
grd.addColorStop(1, "yellow");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForDreadIsland();
return chosenWorld;
}
if(chosenWorld == "Blood Sanctuary") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "#880808");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForBloodSanctuary() {
var chooseBiome = document.getElementById("biomeselecter");
chooseBiome.onclick = function() {
var selectBiome = prompt("Select a biome. (Heartbleed)");
if(selectBiome == "Heartbleed") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#880808");
grd.addColorStop(1, "#9b111e");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForBloodSanctuary();
return chosenWorld;
}
if(chosenWorld == "Fruit Island") {
var confirmAction = prompt("You got Siota to expose the last name right? Yes/No");
if(confirmAction == "No") {
alert("You shall NOT pass.");
}
if(confirmAction == "Yes" && isExposed == false) {
alert("Liars usually get caught, but in this case, they ALWAYS get caught.");
}
if(confirmAction == "Yes" && isExposed == true) {
alert("You can enter.");
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "lime");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
else {
alert("No. Check for capitalization, or spelling, or that world does not exist.");
}
setInterval(function(){
if(chosenWorld != "Verdant Subterrain") {
clearInterval(spawnDraviteProjectile);
clearTimeout(targetTimeout);
clearInterval(gameLoop);
}
}, 0);
}
function worldGauntlets() {
var planetarysystemchanger = document.getElementById("planetarysystemchanger");
planetarysystemchanger.onclick = function() {
var chooseSystem = prompt("Please choose a planetary system. (Stellar System, Elemental System, Toxic System, Strange System, Shaper System, First Stage Boss Lairs, Putrefaction System.)");
if(chooseSystem == "Stellar System") {
var choosestellarsystemWorld = prompt("Please select a world. (Death Sun, Everplasma, Solar Flare Island, Solar Moon, Land of the Starstorms.)");
if(choosestellarsystemWorld == "Death Sun") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "#DC143C");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biome() {
var chooseBiome = document.getElementById("biomeselecter");
chooseBiome.onclick = function() {
var selectBiome = prompt("Select a biome. (Plasmatic Layer)");
if(selectBiome == "Plasmatic Layer") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "red");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biome();
return choosestellarsystemWorld;
}
if(choosestellarsystemWorld == "Everplasma") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#FF10F0");
grd.addColorStop(1, "#E34234");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForEverplasma() {
var chooseBiomeForEverplasma = document.getElementById("biomeselecter");
chooseBiomeForEverplasma.onclick = function() {
var selectBiomeForEverplasma = prompt("Select a biome. (Electric)");
if(selectBiomeForEverplasma == "Electric") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#F9B234");
grd.addColorStop(1, "#ffff33");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForEverplasma();
return choosestellarsystemWorld;
}
if(choosestellarsystemWorld == "Solar Flare Island") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#FDBD01");
grd.addColorStop(1, "#DAEE01");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForSolarFlareIsland() {
var chooseBiomeForSolarFlareIsland = document.getElementById("biomeselecter");
chooseBiomeForSolarFlareIsland.onclick = function() {
var selectBiomeForSolarFlareIsland = prompt("Select a biome. (Sunfire)");
if(selectBiomeForSolarFlareIsland == "Sunfire") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#1d1d77");
grd.addColorStop(1, "#3859AC");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForSolarFlareIsland();
return choosestellarsystemWorld;
}
if(choosestellarsystemWorld == "Solar Moon") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#c2c5cc");
grd.addColorStop(1, "#FFB027");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForSolarMoon() {
var chooseBiomeForSolarMoon = document.getElementById("biomeselecter");
chooseBiomeForSolarMoon.onclick = function() {
var selectBiomeForSolarMoon = prompt("Select a biome. (Shooting Moons)");
if(selectBiomeForSolarMoon == "Shooting Moons") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#c2c5cc");
grd.addColorStop(1, "#506886");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForSolarMoon();
return choosestellarsystemWorld;
}
if(choosestellarsystemWorld == "Land of the Starstorms") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#b133c9");
grd.addColorStop(1, "#000bb8");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function biomeForLandOfTheStarstorms() {
var chooseBiomeForLandOfTheStarstorms = document.getElementById("biomeselecter");
chooseBiomeForLandOfTheStarstorms.onclick = function() {
var selectBiomeForLandOfTheStarstorms = prompt("Select a biome. (Starstorm)");
if(selectBiomeForLandOfTheStarstorms == "Starstorm") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#A4CEE3");
grd.addColorStop(1, "#e6d7ff");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForLandOfTheStarstorms();
return choosestellarsystemWorld;
}
}
if(chooseSystem == "Elemental System") {
var chooseElementalSystemWorld = prompt("Select a world. (Hellish Subterrain, Deep Depths, Seismic Mountains, or Supergiant Vortex.)");
if(chooseElementalSystemWorld == "Hellish Subterrain") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "#CC5500");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
function biomeForPyroIsland() {
var chooseBiomeForPyroIsland = document.getElementById("biomeselecter");
chooseBiomeForPyroIsland.onclick = function() {
var selectBiome = prompt("Select a biome. (Ashgrounds)");
if(selectBiome == "Ashgrounds") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#CC5500");
grd.addColorStop(1, "gray");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForPyroIsland();
}
if(chooseElementalSystemWorld == "Deep Depths") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "aqua");
grd.addColorStop(1, "teal");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
function biomeForAquaIsland() {
var chooseBiomeForAquaIsland = document.getElementById("biomeselecter");
chooseBiomeForAquaIsland.onclick = function() {
var selectBiome = prompt("Select a biome. (Abyss)");
if(selectBiome == "Abyss") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "aqua");
grd.addColorStop(1, "black");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForAquaIsland();
}
if(chooseElementalSystemWorld == "Seismic Mountains") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "#886806");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
function biomeForTerraIsland() {
var chooseBiomeForTerraIsland = document.getElementById("biomeselecter");
chooseBiomeForTerraIsland.onclick = function() {
var selectBiome = prompt("Select a biome. (Dark Savanna)");
if(selectBiome == "Dark Savanna") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "green");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForTerraIsland();
}
if(chooseElementalSystemWorld == "Supergiant Vortex") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "teal");
grd.addColorStop(1, "#87CEEB");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
function biomeForAeroIsland() {
var chooseBiomeForAeroIsland = document.getElementById("biomeselecter");
chooseBiomeForAeroIsland.onclick = function() {
var selectBiome = prompt("Select a biome. (Clouds)");
if(selectBiome == "Clouds") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "teal");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
}
biomeForAeroIsland();
}
}
if(chooseSystem == "Toxic System") {
var chooseToxicSystemWorld = prompt("Select a world. (Acid Lake, Poison Ocean, Waste Island, Leachate Tsunami, Nuclear Battlefield.)");
if(chooseToxicSystemWorld == "Acid Lake") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "#40FD14");
grd.addColorStop(1, "#b0bf1a");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
}
if(chooseToxicSystemWorld == "Poison Ocean") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "#40FD14");
grd.addColorStop(1, "#7f01fe");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
}
if(chooseToxicSystemWorld == "Waste Island") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "#ffdc65");
grd.addColorStop(1, "#ae9973");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
}
if(chooseToxicSystemWorld == "Leachate Tsunami") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "#ae9973");
grd.addColorStop(1, "lime");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
}
if(chooseToxicSystemWorld == "Nuclear Battlefield") {
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 1000;
canvas.height = 1500;
var ctx = canvas.getContext('2d');
ctx.arc(150, 150, 100, 0, null);
const grd = ctx.createLinearGradient(500, 0, 270, 0);
grd.addColorStop(0, "#2CFA1F");
grd.addColorStop(1, "lime");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 2000);
ctx.stroke();
}
}
if(chooseSystem == "Strange System") {
var chooseStrangeSystemWorld = prompt("Select a world. (Weird Planet, Ominous Planet, Suspicious Island, Unknown Island, Ever Unknown.)");
if(chooseStrangeSystemWorld == "Weird Planet") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#734a65'
return chooseStrangeSystemWorld;
}
if(chooseStrangeSystemWorld == "Ominous Planet") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#7f01fe'
return chooseStrangeSystemWorld;
}
if(chooseStrangeSystemWorld == "Suspicious Island") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#301934'
return chooseStrangeSystemWorld;
}
if(chooseStrangeSystemWorld == "Unknown Island") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#36013F'
return chooseStrangeSystemWorld;
}
if(chooseStrangeSystemWorld == "Ever Unknown") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#53277E'
return chooseStrangeSystemWorld;
}
}
if(chooseSystem == "Shaper System") {
var choosePolygonalSystemWorld = prompt("Please select a world (Duplicate Hollow, Cubic World, Hexagonal World, Rectangular World, Decagon Warzone.)");
if(choosePolygonalSystemWorld == "Duplicate Hollow") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#df2c14'
return choosePolygonalSystemWorld;
}
if(choosePolygonalSystemWorld == "Cubic World") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#009b48'
return choosePolygonalSystemWorld;
}
if(choosePolygonalSystemWorld == "Hexagonal World") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#051094'
return choosePolygonalSystemWorld;
}
if(choosePolygonalSystemWorld == "Rectangular World") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#5BC236'
return choosePolygonalSystemWorld;
}
if(choosePolygonalSystemWorld == "Decagon Warzone") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#355E3B'
return choosePolygonalSystemWorld;
}
else {
alert("I think you misspelled something...");
}
}
if(chooseSystem == "Digital System") {
var chooseDigitalSystemWorld = prompt("Select$/a\$world.@@$& (Robotic Ruins, Robot Metropolis, Artificial Glaciers, Electronic Moon, Plasmatic Clusterhouse.)");
if(chooseDigitalSystemWorld == "Robotic Ruins") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#d5d5d5'
return chooseDigitalSystemWorld;
}
if(chooseDigitalSystemWorld == "Robot Metropolis") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#ff69b4'
return chooseDigitalSystemWorld;
}
if(chooseDigitalSystemWorld == "Artificial Glaciers") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#7DF9FF'
return chooseDigitalSystemWorld;
}
if(chooseDigitalSystemWorld == "Electronic Moon") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#ffff33'
return chooseDigitalSystemWorld;
}
if(chooseDigitalSystemWorld == "Plasmatic Clusterhouse") {
var canvas = document.getElementById("background");
canvas.style.backgroundColor = '#f62681'
return chooseDigitalSystemWorld;
}
else {
alert("The world you chose isn't in the game. Also use capitals or it will not work.");
}
}
if(chooseSystem == "Spectral Battle") {
var spectralLair = prompt("Lairs of the spectral beasts. Choose a lair. (Red Battle, Orange Battle, Yellow Battle, Green Battle, Blue Battle, Indigo Battle, Violet Battle.)");
if(spectralLair == "Red Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#8B0000");
grd.addColorStop(1, "#FF474C");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(spectralLair == "Orange Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#ff5f00");
grd.addColorStop(1, "#c65102");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(spectralLair == "Yellow Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#FFFFED");
grd.addColorStop(1, "#8B8000");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(spectralLair == "Green Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#90EE90");
grd.addColorStop(1, "#013220");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(spectralLair == "Blue Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#ADD8E6");
grd.addColorStop(1, "#00008b");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(spectralLair == "Indigo Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#6D5ACF");
grd.addColorStop(1, "#1F0954");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(spectralLair == "Violet Battle") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#CF9FFF");
grd.addColorStop(1, "#9400d3");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
}
if(chooseSystem == "First Stage Boss Lairs") {
var chooseFirstStageBossLairs = prompt("Select a lair. (Rhosillon's Lair, Zaeleph's Lair, Iotasaurus's Lair.)");
if(chooseFirstStageBossLairs == "Rhosillon's Lair") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "gray");
grd.addColorStop(1, "red");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(chooseFirstStageBossLairs == "Zaeleph's Lair") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#013220");
grd.addColorStop(1, "#AA98A9");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
if(chooseFirstStageBossLairs == "Iotasaurus's Lair") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
return chosenWorld;
}
}
if(chooseSystem == "Putrefaction System") {
var choosePutrefactionSystemWorld = prompt("Select a world. (Bonelands, Blood Cell House, Lake of Saliva, Rotten Forest, Center of Putrefaction.)");
if(choosePutrefactionSystemWorld == "Bonelands") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "yellow");
grd.addColorStop(1, "white");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(choosePutrefactionSystemWorld == "Blood Cell House") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#880808");
grd.addColorStop(1, "#ffe4e1");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(choosePutrefactionSystemWorld == "Lake of Saliva") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#96bfe6");
grd.addColorStop(1, "gray");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(choosePutrefactionSystemWorld == "Rotten Forest") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "brown");
grd.addColorStop(1, "green");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(choosePutrefactionSystemWorld == "Center of Putrefaction") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#0a1115");
grd.addColorStop(1, "#564545");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
//Here.
}
}
worldGauntlets();

}
chooseYourWorld();
function gameOptions() {
var options = document.getElementById("moreOptions");
options.onclick = function() {
var selectOption = prompt("What do you want to do? (House of Secrets, Shop, Craft,)");
if(selectOption == "Shop") {
function shop() {
inMenu == false;
if(inMenu == false) {
console.log("False");
}
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "teal");
grd.addColorStop(1, "brown");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
var buyItem = document.getElementById("areaspecial");
buyItem.onclick = function() {
var chooseItem = prompt("You can buy something. (Random Ability Sample Chest, Emblem Chest, Perk Chest.) Or you can go to the separate options: Materials (Category).");
if(chooseItem == "Random Ability Sample Chest" && tokens < 3) {
alert("Nice try, but you don't have enough tokens. You can try again when you do!");
}
if(chooseItem == "Random Ability Sample Chest" && tokens >= 3) {
let z = Math.round(Math.random());
if(z == 0) {
let a = Math.round(33 * Math.random())
console.log(a);
inventory.push(uncollectedSamples[a]);
alert("Inside your inventory are: " + inventory);
console.log(inventory);
}
if(z == 1) {
let n = Math.round(Math.random())
console.log(n);
inventory.push(uncollectedSamples[n]);
console.log(inventory);
}
tokens -= 3;
}
if(chooseItem == "Emblem Chest" && tokens < 5) {
alert("Nice try, but you don't have enough tokens. You can try again when you do!");
}
if(chooseItem == "Emblem Chest" && tokens >= 5) {
let b = Math.round(4 * Math.random());
inventory.push(uncollectedEmblems[b]);
console.log(b);
console.log(inventory);
tokens -= 5;
}
if(chooseItem == "Materials") {
var chooseMaterial = prompt("You can buy material(s). (Ryottribum, Pentinite, Catalyst, Ominous Wisp, Permafrost Shard, Ice, Ionized Dust, Organic Matter, Magma Shard, Wax, Chloroplatnium, Petrified Wood, Iridesceium, Deepscale, Ivory, Equinium, Bronze, Osmium, Exaliber, Shadow Fragment, Dravite, Crystallized Rage)");
if(chooseMaterial == "Ryottribum" && tokens >= 2) {
inventory.push("Ryottribum");
alert("Successfully bought Ryottribum[1].");
tokens -= 2;
}
else if(chooseMaterial == "Ryottribum" && tokens < 2) {
alert("You do not have enough tokens.");
}
if(chooseMaterial == "Pentinite" && tokens >= 5) {
inventory.push("Pentinite");
alert("Successfully bought Pentinite[1].");
tokens -= 5;
}
else if(chooseMaterial == "Pentinite" && tokens < 5) {
alert("Not enough tokens? You get nothing.");
}
if(chooseMaterial == "Catalyst" && tokens >= 1) {
inventory.push("Catalyst");
alert("Successfully bought a Catalyst[1].");
tokens -= 1;
}
else if(chooseMaterial == "Catalyst" && tokens < 1) {
alert("Well, well, well... Look what we have here; NOT ENOUGH TOKENS!");
}
if(chooseMaterial == "Ominous Wisp" && tokens >= 11) {
inventory.push("Ominous Wisp");
alert("Successfully bought an Ominous Wisp[1].");
tokens -= 11;
}
else if(chooseMaterial == "Ominous Wisp" && tokens < 11) {
alert("Successfully bought an Ominous Wisp[1]. Just kidding, you can't afford that. You got nothing.");
}
if(chooseMaterial == "Permafrost Shard" && tokens >= 5) {
inventory.push("Permafrost Shard");
alert("Successfully bought a Permafrost Shard[1].");
tokens -= 5;
}
else if(chooseMaterial == "Permafrost Shard" && tokens < 5) {
alert("You can guess what I am about to tell you, you can't afford this!");
}
if(chooseMaterial == "Ice" && tokens >= 1) {
inventory.push("Ice");
alert("Successfully bought Ice[1].");
tokens -= 1;
}
else if(chooseMaterial == "Ice" && tokens < 1) {
alert("Ha, no. You can't afford this.");
}
if(chooseMaterial == "Ionized Dust" && tokens >= 25) {
inventory.push("Ionized Dust");
alert("Successfully bought Ionized Dust[1].");
tokens -= 25;
}
else if(chooseMaterial == "Ionized Dust" && tokens < 25) {
alert("That's too expensive for you. Get more tokens!");
}
if(chooseMaterial == "Organic Matter" && tokens >= 1) {
inventory.push("Organic Matter");
alert("Successfully bought Organic Matter[1].");
tokens -= 1;
}
else if(chooseMaterial == "Organic Matter" && tokens < 1) {
alert("You can't afford this.");
}
if(chooseMaterial == "Magma Shard" && tokens >= 7) {
inventory.push("Magma Shard");
alert("Successfully bought a Magma Shard[1].");
tokens -= 7;
}
else if(chooseMaterial == "Magma Shard" && tokens < 7) {
alert("You don't have enough tokens.");
}
if(chooseMaterial == "Wax" && tokens >= 1) {
inventory.push("Wax");
alert("Successfully bought Wax[1].");
tokens -= 1;
}
else if(chooseMaterial == "Wax" && tokens < 1) {
alert("I felt like saying a pun here, but you are not worthy. Anyways, you can't afford this.");
}
if(chooseMaterial == "Chloroplatnium" && tokens >= 100) {
inventory.push("Chloroplatnium");
alert("Successfully bought Chloroplatnium[1].");
tokens -= 100;
}
else if(chooseMaterial == "Chloroplatnium" && tokens < 100) {
alert("That's too expensive, you must have at least 100 tokens.");
}
if(chooseMaterial == "Petrified Wood" && tokens >= 1) {
inventory.push("Petrified Wood");
alert("Successfully bought Petrified Wood[1].");
tokens -= 1;
}
else if(chooseMaterial == "Petrified Wood" && tokens < 1) {

alert("You can't afford it. Oh well, too bad!");
}
if(chooseMaterial == "Iridesceium" && tokens >= 1000) {
inventory.push("Iridesceium");
alert("Successfully bought Iridesceium[1].");
}
else if(chooseMaterial == "Iridesceium" && tokens < 1000) {
alert("Do you hear that? CARD DECLINED! You don't have enough tokens! However, you can mine this material in a colourful system, in all of it's colourful worlds. I will let you figure it out.....");
stats.set("hintsReceived", + 1);
alert("You received a hint!");
console.log(stats);
}
if(chooseMaterial == "Deepscale" && tokens >= 85000) {
inventory.push("Deepscale");
alert("Successfully bought Deepscale[1].");
}
else if(chooseMaterial == "Deepscale" && tokens < 85000) {
alert("You don't have 85000 tokens or more. This is too expensive for you!");
}
if(chooseMaterial == "Ivory" && tokens >= 85) {
inventory.push("Ivory");
alert("Successfully bought Ivory[1].");
}
else if(chooseMaterial == "Ivory" && tokens < 85) {
alert("You cannot afford this.....");
}
if(chooseMaterial == "Equinium" && tokens >= 125) {
inventory.push("Equinium");
alert("Successfully bought Eqiunium[1].");
}
else if(chooseMaterial == "Eqiunium" && tokens < 125) {
alert("You cannot afford this.....");
}
if(chooseMaterial == "Bronze" && tokens >= 30) {
inventory.push("Bronze");
alert("Successfully bought Bronze[1].");
}
else if(chooseMaterial == "Bronze" && tokens < 30) {
alert("You cannot afford this.....");
}
if(chooseMaterial == "Osmium" && tokens >= 3400) {
inventory.push("Osmium");
alert("Successfully bought Osmium[1].");
}
else if(chooseMaterial == "Osmium" && tokens < 3400) {
alert("CARD DECLINED!");
}
if(chooseMaterial == "Exaliber" && tokens >= 50000) {
inventory.push("Exaliber");
alert("Successfully bought Exaliber[1].");
}
else if(chooseMaterial == "Exaliber" && tokens < 50000) {
alert("CARD DECLINED!");
}
if(chooseMaterial == "Shadow Fragment" && tokens >= 50000) {
inventory.push("Shadow Fragment");
alert("Successfully bought Shadow Fragment[1].");
}
else if(chooseMaterial == "Shadow Fragment" && tokens < 50000) {
alert("You can't buy this material!");
}
if(chooseMaterial == "Dravite" && tokens >= 524) {
inventory.push("Dravite");
alert("Successfully bought Dravite[1].");
}
else if(chooseMaterial == "Dravite" && tokens < 524) {
alert("You can't buy this material, but you can find in somewhere in Verdant Subterrain, in the Dravite Depths.");
}
if(chooseMaterial == "Crystallized Rage") {

alert("This material is not purchasable, and must be mined.");
}
}
}
}
shop();
}
if(selectOption == "House of Secrets") {
var selectCode = prompt("Why do you want my stuff?");
if(selectCode == "1s1an6") {
alert("After Island of the envious Beast, there is Dread Island.");
}
if(selectCode == "Blood Drinker") {
alert("Blood Sanctuary is the second world after Island of the envious Beast.");
}
if(selectCode == "Spectral Giants") {
alert("Go to the system named Spectral Battle.");
}
if(selectCode == "001010") {
alert("Digital System.");
}
if(selectCode == "Basement") {
alert("I will let you there but don't do anything stupid.");
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "brown");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(selectCode == "Secret Portal") {
var chooseSecretWorld = prompt("Don't you dare tell anyone. Where do you want me to teleport you? (Astral Disaster)");
if(chooseSecretWorld == "Astral Disaster") {
alert("Suit yourself.");
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "black");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
}
if(selectCode == "Apple") {
var nextFruit = prompt("Ok......?");
if(nextFruit == "Orange") {
var secondNextFruit = prompt("Color or Fruit?");
if(secondNextFruit == "Banana") {
var thirdNextFruit = prompt("What are you doing?");
if(thirdNextFruit == "Kiwi") {
var fourthNextFruit = prompt("Are you trying to find a secret world?");
if(fourthNextFruit == "Blueberry") {
var fifthNextFruit = prompt("I might aswell say it myself. Type Grape.");
if(fifthNextFruit == "Grape") {
isExposed = true;
alert("Go to fruit island from the green button."); 
}
}
}
}
}
}
if(selectCode == "Shiny") {
if(hasCollectedSecretTokensOne == true) {
alert("You already did this action...");
}
if(hasCollectedSecretTokensOne == false) {
tokens += 2;
alert("Look what you did. You broke the system! Whatever, here are your 2 tokens.");
alert("You now have: " + tokens + " " + "tokens.");
hasCollectedSecretTokensOne == true;
}
}
if(selectCode == "FR33T0K6NS") {
if(hasCollectedSecretTokensTwo == true) {
alert("You already did this action...");
}
if(hasCollectedSecretTokensTwo == false) {
alert("Since you are so desperate, you can get 6 tokens.");
tokens += 6;
alert("You now have " + tokens + " " + "tokens.");
hasCollectedSecretTokensTwo == true;
}
}
else {
alert(userName + ", " + "That's what you get for trying to steal my stuff!");
}
}
tokens = Number(tokens);
if(isExposed == true && hasClaimedFirstAward == false) {
tokens += 1;
alert("You have claimed an award. Your reward is 1 token. You now have: " + tokens + " " + "tokens.");
hasClaimedFirstAward = true;
}
if(selectOption == "Craft") {
alert("Use the green button to craft.");
var craftingButton = document.getElementById("areaspecial");
craftingButton.onclick = function() {
//Crafting Engine.
if(inventory.includes(uncollectedSamples[0] * 5)) {
craftableItems.push("Wind Blast");
}
if(inventory.includes(uncollectedSamples[1] * 5)) {
craftableItems.push("Wind Beam");
}
if(inventory.includes(uncollectedSamples[2] * 5)) {
craftableItems.push("Wind Bullet");
}
if(inventory.includes(uncollectedSamples[3] * 5)) {
craftableItems.push("Wind Orb");
}
if(inventory.includes(uncollectedSamples[4] * 5)) {
craftableItems.push("Wind Column");
}
if(inventory.includes(uncollectedSamples[5] * 5)) {
craftableItems.push("Wind Explosion");
}
if(inventory.includes(uncollectedSamples[6] * 5)) {
craftableItems.push("Thundercloud Fist");
}
if(inventory.includes(uncollectedSamples[7] * 5)) {
craftableItems.push("Typhoon Outrage");
}
if(inventory.includes(uncollectedSamples[8] * 5)) {
craftableItems.push("Boulder Throw");
}
if(inventory.includes(uncollectedSamples[9 ] * 5)) {
craftableItems.push("Sharp Leaf");
}
if(inventory.includes(uncollectedSamples[10] * 5)) {
craftableItems.push("Needle Grass");
}
if(inventory.includes(uncollectedSamples[11] * 5)) {
craftableItems.push("Poison Bullet");
}
if(inventory.includes(uncollectedSamples[12] * 5)) {
craftableItems.push("Mud Blast");
}
if(inventory.includes(uncollectedSamples[13] * 5)) {
craftableItems.push("Strangle");
}
if(inventory.includes(uncollectedSamples[14] * 5)) {
craftableItems.push("Rock Fist");
}
if(inventory.includes(uncollectedSamples[15] * 5)) {
craftableItems.push("Massive Earthquake");
}
if(inventory.includes(uncollectedSamples[16] * 5)) {
craftableItems.push("Incineration Spark");
}
if(inventory.includes(uncollectedSamples[17] * 5)) {
craftableItems.push("Blue Flame Surge");
}
if(inventory.includes(uncollectedSamples[18] * 5)) {
craftableItems.push("Fire Bullet");
}
if(inventory.includes(uncollectedSamples[19] * 5)) {
craftableItems.push("Fire Beam");
}
if(inventory.includes(uncollectedSamples[20] * 5)) {
craftableItems.push("Fire Blast");
}
if(inventory.includes(uncollectedSamples[21] * 5)) {
craftableItems.push("Pyro Fist");
}
if(inventory.includes(uncollectedSamples[22] * 5)) {
craftableItems.push("Hellblaze Chamber");
}
if(inventory.includes(uncollectedSamples[23] * 5)) {
craftableItems.push("Abyssal Fist");
}
if(inventory.includes(uncollectedSamples[24] * 5)) {
craftableItems.push("Geyser");
}
if(inventory.includes(uncollectedSamples[25] * 5)) {
craftableItems.push("Whirlpool");
}
if(inventory.includes(uncollectedSamples[26] * 5)) {
craftableItems.push("Water Bullet");
}
if(inventory.includes(uncollectedSamples[27] * 5)) {
craftableItems.push("Wave");
}
if(inventory.includes(uncollectedSamples[28] * 5)) {
craftableItems.push("Tsunami");
}
if(inventory.includes(uncollectedSamples[29] * 5)) {
craftableItems.push("Supersonic Wave");
}
if(inventory.includes(uncollectedSamples[30] * 5)) {
craftableItems.push("Hypersonic Crush");
}
if(inventory.includes(uncollectedSamples[31] * 5)) {
craftableItems.push("Ultrasonic Lightshow");
}
if(inventory.includes(uncollectedSamples[32] * 5)) {
craftableItems.push("Pure Sound Fist");
}
if(inventory.includes(uncollectedSamples[33] * 5)) {
craftableItems.push("500 Decibel Finale");
}
if(inventory.includes("Permafrost Shard") && inventory.includes("Magma Shard") && inventory.includes("Catalyst") && inventory.includes("Ionized Dust")) {
craftableItems.push("Permafrost Fireball");
}
//End of Crafting Engine.
let createSomething = prompt("You can create: " + craftableItems + "." + " Inside your inventory are: " + inventory + ".");
if(createSomething == "Permafrost Fireball" && inventory.includes("Permafrost Shard") && inventory.includes("Magma Shard") && inventory.includes("Catalyst") && inventory.includes("Ionized Dust")) {
inventory.push("Permafrost Fireball");
alert("You have successfully crafted a Permafrost Fireball! This material is NOT infinitely usable, and must be crafted again!");
var indexOfNine = inventory.indexOf("Permafrost Shard");
var indexOfTen = inventory.indexOf("Magma Shard");
var indexOfEleven = inventory.indexOf("Catalyst");
var indexOfTwelve = inventory.indexOf("Ionized Dust");
inventory.splice(indexOfNine, 1);
inventory.splice(indexOfTen, 1);
inventory.splice(indexOfEleven, 1);
inventory.splice(indexOfTwelve, 1);
}
else if(createSomething == "Greatsword of the Depths" && inventory.includes("Deepscale") && inventory.includes("Permafrost Shard") && inventory.includes("Catalyst") && inventory.includes("Chloroplatnium")) {
inventory.push("Greatsword of the Depths");
alert("You have successfully crafted a Greatsword of the Depths!");
var indexOfThirteen = inventory.indexOf("Deepscale");
var indexOfFourteen = inventory.indexOf("Permafrost Shard");
var indexOfFifteen = inventory.indexOf("Catalyst");
var indexOfSixteen = inventory.indexOf("Chloroplatnium");
inventory.splice(indexOfThirteen, 1);
inventory.splice(indexOfFourteen, 1);
inventory.splice(indexOfFifteen, 1);
inventory.splice(indexOfSixteen, 1);
}
if(inventory.includes("Equinium") && inventory.includes("Shadow Fragment") && inventory.includes("Chloroplatnium") && inventory.includes("Ominous Wisp")) {

craftableItems.push("Moonlit Blade");
}

if(createSomething == "Moonlit Blade" && inventory.includes("Equinium") && inventory.includes("Shadow Fragment") && inventory.includes("Chloroplatnium") && inventory.includes("Ominous Wisp")) {

inventory.push("Moonlit Blade");
}

else if(createSomething == "Wind Blast" && inventory.includes("Sample of Wind Blast") * 5) {
inventory.push("Wind Blast");
alert("You have successfully crafted Wind Blast!");
var indexOfOne = inventory.indexOf("Sample of Wind Blast");
inventory.splice(indexOfOne, 5);
console.log(inventory);
}
else if(createSomething == "Wind Beam" && inventory.includes("Sample of Wind Beam") * 5) {
inventory.push("Wind Beam");
alert("You have successfully crafted Wind Beam!");
var indexOfTwo = inventory.indexOf("Sample of Wind Beam");
inventory.splice(indexOfTwo, 5);
}
else if(createSomething == "Wind Bullet" && inventory.includes("Sample of Wind Bullet") * 5) {
inventory.push("Wind Blast");
alert("You have successfully crafted Wind Bullet!");
var indexOfThree = inventory.indexOf("Sample of Wind Bullet");
inventory.splice(indexOfThree, 5);
}
else if(createSomething == "Wind Orb" && inventory.includes("Sample of Wind Orb") * 5) {
inventory.push("Wind Orb");
alert("You have successfully crafted Wind Orb");
var indexOfFour = inventory.indexOf("Sample of Wind Orb");
inventory.splice(indexOfFour, 5);
}
else if(createSomething == "Wind Column" && inventory.includes("Sample of Wind Column") * 5) {
inventory.push("Wind Column");
alert("You have successfully crafted Wind Column!");
var indexOfFive = inventory.indexOf("Sample of Wind Column");
inventory.splice(indexOfFive, 5);
}
else if(createSomething == "Wind Explosion" && inventory.includes("Sample of Wind Explosion") * 5) {
inventory.push("Wind Explosion");
alert("You have successfully crafted Wind Explosion!");
var indexOfSix = inventory.indexOf("Sample of Wind Explosion");
inventory.splice(indexOfSix, 5);
}
else if(createSomething == "Thundercloud Fist" && inventory.includes("Sample of Thundercloud Fist") * 5) {
inventory.push("Thundercloud Fist");
alert("You have successfully crafted Thundercloud Fist!");
var indexOfSeven = inventory.indexOf("Sample of Thundercloud Fist");
inventory.splice(indexOfSeven, 5);
}
else if(createSomething == "Typhoon Outrage" && inventory.includes("Sample of Typhoon Outrage") * 5) {
inventory.push("Typhoon Outrage");
alert("You have successfully crafted Typhoon Outrage!");
var indexOfEight = inventory.indexOf("Sample of Typhoon Outrage");
inventory.splice(indexOfEight, 5);
}

}
}
//Another game option.
}
}
gameOptions();
//Movement controls.

var controlLeft = document.getElementById("battlebuttonone");
let moveLeft = 500;
/*
controlLeft.onclick = function() {
moveLeft -= 100 / 2;
document.getElementById("character").style.left = moveLeft + "px"; 

}
*/
var controlRight = document.getElementById("battlebuttontwo");
/*
controlRight.onclick = function() {
moveLeft += 50;
document.getElementById("character").style.left = moveLeft + "px";

}
*/
var controlUp = document.getElementById("battlebuttonthree");
let moveUp = 750;
/*
controlUp.onclick = function() {
moveUp -= 100 / 2;
document.getElementById("character").style.top =  moveUp + "px";
}
*/
var controlDown = document.getElementById("battlebuttonfour");
/*
controlDown.onclick = function() {
moveUp += 50;
*/
document.getElementById("character").style.top =  moveUp + "px";
document.getElementById("battlebuttonone").onclick = function () {
            moveLeft = Math.max(0, moveLeft - 50);
            document.getElementById("character").style.left = moveLeft + "px";
        };
        document.getElementById("battlebuttontwo").onclick = function () {
            moveLeft = Math.min(950, moveLeft + 50);
            document.getElementById("character").style.left = moveLeft + "px";
        };
        document.getElementById("battlebuttonthree").onclick = function () {
            moveUp = Math.max(0, moveUp - 50);
            document.getElementById("character").style.top = moveUp + "px";
        };
        document.getElementById("battlebuttonfour").onclick = function () {
            moveUp = Math.min(1450, moveUp + 50);
            document.getElementById("character").style.top = moveUp + "px";
        };
/*
controlLeft.onclick = function () { 
    character.x -= 50; 
    updateCharacterPosition();
};
controlRight.onclick = function () { 
    character.x += 50; 
    updateCharacterPosition();
};
controlUp.onclick = function () { 
    character.y -= 50; 
    updateCharacterPosition();
};
controlDown.onclick = function () { 
    character.y += 50; 
    updateCharacterPosition();
};
*/
// Syncs character position with HTML element
function updateCharacterPosition() {
    document.getElementById("character").style.left = character.x + "px";
    document.getElementById("character").style.top = character.y + "px";
}
let character = { x: 90, y: 50, size: 20 }; // Inside projectile area


//End of movement controls.


/* 
Color inventory = [#79f8fc]
*/
let materials = ["Ryottribum", "Pentinite", "Catalyst", "Ominous Wisp", "Permafrost Shard", "Ice", "Ionized Dust", "Organic Matter", "Magma Shard", "Wax", "Chloroplatnium", "Petrified Wood", "Iridesceium", "Deepscale", "Ivory", "Bronze", "Osmium", "Exaliber", "Shadow Fragment", "Kyawthuite Fragment", "Dravite", "Crystallized Rage"];
let craftableMaterials = ["Permafrost Fireball", "Greatsword of the Depths", "Moonlit Blade", "Solstice Edge", "Prismerang"];

const stats = new Map([
  ["hintsReceived", 0],
  ["tokens", tokens]
]);
console.log(stats);

inventory.push("Wind Blast");
function bossFights() {
var chooseBossLair = document.getElementById("choosebosslairs");
chooseBossLair.onclick = function() {
var chooseLair = prompt("Select a boss lair. (The Abyssal Empryean, Iridescent Peaks, Phthalo Heights, Exaliber's Vessel, The SubZero, Infernal Crevasse, Aquatic Void, High Skies)");
if(chooseLair == "The Abyssal Empryean") {
alert("The Emperor knows your fate. Maybe you can change it, or succumb to it.");
const bossFight = setInterval(function() {
var timeOutOne = setTimeout(function(){
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "aqua");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350)
}, 50);
//clearTimeout(timeOutOne);
var timeOutTwo = setTimeout(function() {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "aqua");
grd.addColorStop(1, "purple");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350)
}, 75);
//clearTimeout(timeOutTwo);
}, 100);
if(chooseLair != "The Abyssal Empryean") {
clearInterval(bossFight);
clearTimeout(timeOutOne);
clearTimeout(timeOutTwo);
}

}
if(chooseLair == "Iridescent Peaks") {
    var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(360, 180, 170, 0);
grd.addColorStop(0, "magenta");
grd.addColorStop(1, "cyan");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
  
}
if(chooseLair == "Phthalo Heights") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "#123524");
grd.addColorStop(1, "#ABCBE9");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(chooseLair == "Exaliber's Vessel") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "pink");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(chooseLair == "The SubZero") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "aquamarine");
grd.addColorStop(1, "black");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(chooseLair == "Infernal Crevasse") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "black");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(chooseLair == "Aquatic Void") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "aqua");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
}
if(chooseLair == "High Skies") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "#1A237E");
grd.addColorStop(1, "#102833");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
alert("You are travelling on a cumulonimbus cloud. You will arrive at the Aetherial Veil shortly.");
setTimeout(function(){
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "#FFD700");
grd.addColorStop(1, "#00A86B");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350)
alert("You have arrived. Click the gilded brown button to talk to the dealer.");
}, 10000)
var merchantClient = document.getElementById("merchant");
merchantClient.onclick = function() {
var buyMaterial = prompt("What would you like to buy? Here, the currency is Jade. These are things you can buy: (Kyawthuite Fragment)");
if(buyMaterial == "Kyawthuite Fragment" && jades >= 2100) {
inventory.push("Kyawthuite Fragment");
alert("Obtained a Kyawthuite Fragment[1].");
}
if(buyMaterial == "Kyawthuite Fragment" && jades < 2100) {
alert("Not enough jades!");
}
}
setTimeout(function(){
jades += 5;
}, 180000)
}
var differentVeils = document.getElementById("biomeselecter");
differentVeils.onclick = function() {
var chooseVeil = prompt("Choose a veil. (Nimbostratus Sanctum)");
if(chooseVeil == "Nimbostratus Sanctum") {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "#1A237E");
grd.addColorStop(1, "#102833");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
alert("You are travelling on a cumulonimbus cloud. You will arrive at the Nimbostratus Sanctum shortly.");
setTimeout(function(){
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "#00a86b");
grd.addColorStop(1, "#9393a8");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350)
alert("You have arrived. Click the gilded brown button to talk to the dealer.");
}, 10000)
}
}
}


}
bossFights();
const achievements = ["Mommy! I'm rich!", "Where did you get this from?", "Touched Grass!", "100 Frostbites!", "Frozen.", "Hazard!", "Jealousy!", "Detective!"];
var obtainedAchievements = [];
function earnedAchievements() {
if(tokens >= 100) {
obtainedAchievements.push(achievements[0]);
alert("Achievement earned! (Mommy! I'm rich!) Rarity: BRONZE.");
firstAchievementEarned == true;
}
else if(tokens >= 100 && firstAchievementEarned == true) {
console.log("Already earned!");
}

if(tokens >= 1000) {
obtainedAchievements.push(achievements[1]);
alert("Achievement earned! (Where did you get this from?) Rarity: BRONZE.");
secondAchievementEarned == true;
}
else if(tokens >= 1000 && secondAchievementEarned == true) {
console.log("Already earned!");
}
//Continue from here.
if(chosenWorld == "Verdant Subterrain") {
alert("Works.");
}
}
earnedAchievements();
function rankingSystem() {
var rank;
var rankPoints;
}
rankingSystem();
function questBoard() {
var questBoard = document.getElementById("questboard");
questBoard.onclick = function() {
var quest = prompt("Select a quest. (Tourmaline Expert)");
if(quest == "Tourmaline Expert") {
alert("Collect 50 dravite crystals.");
var questProgress = 0;

}

}
}
questBoard();
function abilitySelecter() {
var chooseAbility = document.getElementById("powerselecter");
chooseAbility.onclick = function() {
var ability = prompt("Select an ability or weapon.");
if(ability == "Greatsword of the Depths" && inventory.includes("Greatsword of the Depths")) {
var xOut = document.getElementById("battlebuttoneight");
xOut.onclick = function() {

// Function to create or get a canvas
function getCanvas(id, zIndex, isOverlay = false) {
    let canvas = document.getElementById(id);
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = id;
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = zIndex;
        if (isOverlay) canvas.style.pointerEvents = "none"; // Prevent interaction issues
        document.body.appendChild(canvas);
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return canvas.getContext("2d");
}

// Create or get canvases
const bgCtx = getCanvas("background", "0"); // Background canvas (lower layer)
const overlayCtx = getCanvas("overlayCanvas", "1", true); // Overlay canvas (top layer)

let size = 20; 
const speed = 8; 

bgCtx.fillStyle = "transparent"; 
bgCtx.fillRect(0, 0, bgCtx.canvas.width, bgCtx.canvas.height);

function drawX(size) {
    overlayCtx.clearRect(0, 0, overlayCtx.canvas.width, overlayCtx.canvas.height); // Clear previous frame
    overlayCtx.strokeStyle = "cyan";
    overlayCtx.lineWidth = 32;

    let centerX = overlayCtx.canvas.width / 2;
    let centerY = overlayCtx.canvas.height / 2;

    overlayCtx.beginPath();
    overlayCtx.moveTo(centerX - size, centerY - size);
    overlayCtx.lineTo(centerX + size, centerY + size);
    overlayCtx.moveTo(centerX - size, centerY + size);
    overlayCtx.lineTo(centerX + size, centerY - size);
    overlayCtx.stroke();
}

function animate() {
    drawX(size);
    size += speed;

    if (size < Math.max(overlayCtx.canvas.width, overlayCtx.canvas.height)) {
        requestAnimationFrame(animate);
    } else {
        overlayCtx.clearRect(0, 0, overlayCtx.canvas.width, overlayCtx.canvas.height); // Clear when done.
    }
}

animate();
}
var abyssalCrevice = document.getElementById("battlebuttonseven")
abyssalCrevice.onclick = function() {
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lineColor = "cyan"; 
const segmentLength = 10; 
let points = [{ x: canvas.width / 2, y: 0 }];

function drawCrackedLine() {
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 16;
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.stroke();
}

function updateLine() {
    let lastPoint = points[points.length - 1];

    // Create a new random point with zig-zag effect
    let newX = lastPoint.x + (Math.random() - 0.5) * 40; // Random left-right movement
    let newY = lastPoint.y + segmentLength; // Always moving downward

    // Add random cracks (split direction)
    if (Math.random() < 0.2) {
        newX += (Math.random() - 0.5) * 100;
    }

    points.push({ x: newX, y: newY });

    // Keep drawing if it exceeds canvas height (to overlap)
    if (newY < canvas.height + 100) {
        requestAnimationFrame(updateLine);
    }

    drawCrackedLine();
}

// Start the animation
updateLine();
}
}
if(ability == "Wind Blast" && inventory.includes("Wind Blast")) {
setTimeout(function() {
var windBlast = document.getElementById("battlebuttoneight");
windBlast.onclick = function() {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
let rhombus = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 50,
    visible: true,
    exploding: false,
    explosionRadius: 10
};
function drawRhombus() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


    if(rhombus.exploding) {
        
        ctx.fillStyle = "lightblue";
        ctx.beginPath();
        ctx.arc(rhombus.x, rhombus.y, rhombus.explosionRadius, 0, Math.PI * 2);
        ctx.fill();
        return;
    }

    if(!rhombus.visible) return;

    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.moveTo(rhombus.x, rhombus.y - rhombus.size / 2); // Top
    ctx.lineTo(rhombus.x + rhombus.size / 2, rhombus.y); // Right
    ctx.lineTo(rhombus.x, rhombus.y + rhombus.size / 2); // Bottom
    ctx.lineTo(rhombus.x - rhombus.size / 2, rhombus.y); // Left
    ctx.closePath();
    ctx.fill();
}

// Function to "explode" and respawn the rhombus
function explodeAndRespawn() {
    rhombus.exploding = true;
    rhombus.explosionRadius = 50;

    // Expand the explosion
    let explosionInterval = setInterval(() => {
        rhombus.explosionRadius += 5;
        if (rhombus.explosionRadius > 600) {
            clearInterval(explosionInterval);
            rhombus.exploding = false;
            rhombus.visible = false;

            setTimeout(() => {
                // Respawn at a new location
                rhombus.x = Math.random() * canvas.width;
                rhombus.y = Math.random() * canvas.height;
                rhombus.visible = true;
            }, 500);
        }
    }, 50);
}

// Animation loop
function animate() {
/*
    drawBackground(); // Redraw gradient background every frame
*/
    drawRhombus();
    requestAnimationFrame(animate);
}

// Start the animation
animate();
explodeAndRespawn();
}
}, 1);
}

}
}
abilitySelecter();
function arrayAbilities() {
var invAbilities = [];
if(inventory.includes("Wind Blast")) {
invAbilities.push("Wind Blast");
}
}
function transcendentals() {
var viewTranscendentals = document.getElementById("transcendentals");
viewTranscendentals.onclick = function() {
function starEffect() {

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rhombus = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 50,
    visible: true,
    exploding: false,
    explosionRadius: 10
};

function drawBackground() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.25, "indigo");
    gradient.addColorStop(0.33, "yellow");
    gradient.addColorStop(0.5, "magenta");
    gradient.addColorStop(0.66, "orange");
    gradient.addColorStop(0.75, "pink");
    gradient.addColorStop(1, "blue");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawBackground();
/*
function drawRhombus() {
    if (rhombus.exploding) {
        // Draw explosion effect
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(rhombus.x, rhombus.y, rhombus.explosionRadius, 0, Math.PI * 2);
        ctx.fill();
        return;
    }

    if (!rhombus.visible) return; // Don't draw if exploded

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(rhombus.x, rhombus.y - rhombus.size / 2); // Top
    ctx.lineTo(rhombus.x + rhombus.size / 2, rhombus.y); // Right
    ctx.lineTo(rhombus.x, rhombus.y + rhombus.size / 2); // Bottom
    ctx.lineTo(rhombus.x - rhombus.size / 2, rhombus.y); // Left
    ctx.closePath();
    ctx.fill();
}

// Function to "explode" and respawn the rhombus
function explodeAndRespawn() {
    rhombus.exploding = true;
    rhombus.explosionRadius = 10;

    // Expand the explosion
    let explosionInterval = setInterval(() => {
        rhombus.explosionRadius += 5;
        if (rhombus.explosionRadius > 40) {
            clearInterval(explosionInterval);
            rhombus.exploding = false;
            rhombus.visible = false;

            setTimeout(() => {
                // Respawn at a new location
                rhombus.x = Math.random() * canvas.width;
                rhombus.y = Math.random() * canvas.height;
                rhombus.visible = true;
            }, 500);
        }
    }, 50);
}

// Animation loop
function animate() {
    drawBackground(); // Redraw gradient background every frame
    drawRhombus();
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Make it explode every 3 seconds
setInterval(explodeAndRespawn, 3000);
*/
}
starEffect();
function interact() {
var listButton = document.getElementById("areaspecial");
listButton.onclick = function() {
var list = prompt("Which transcendental are you looking for? (Orgikholos, Tentalass, Prismerethess)");
var orgiKholosLevel = 0;
if(list == "Orgikholos") {
function checkInteraction() {
var interaction = document.getElementById("interaction");
interaction.onclick = function() {
var upgrade = prompt("Are you willing to upgrade? (y/n)");
if(upgrade == "y" && inventory.includes("Crystallized Rage")) {
orgiKholosLevel += 1;
}
}
}
checkInteraction();
}
}
}
interact();
} //Onclick function.
}
transcendentals();
function alliedForces() {
var allies = document.getElementById("allies");
allies.onclick = function() {
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function drawBackground() {

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.25, "lightblue");
    gradient.addColorStop(0.33, "gray");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(0.66, "orange");
    gradient.addColorStop(0.75, "brown");
    gradient.addColorStop(1, "black");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawBackground();
}
}
alliedForces();
function viewDragons() {
var draconicShrine = document.getElementById("dragons");
draconicShrine.onclick = function() {
var canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

const grd = ctx.createLinearGradient(180, 180, 170, 0);
grd.addColorStop(0, "#1A237E");
grd.addColorStop(1, "black");
ctx.fillStyle =  grd;
ctx.fillRect(0, 0, 300, 350);
function dragonShowcase() {
function viewDragon() {
const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

    let x = 500;
    let y = 800;

    ctx.beginPath();
    ctx.arc(x, y, 200, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "gray";
    ctx.stroke();
}
viewDragon();
}
dragonShowcase();
}
}
viewDragons();
function incubator() {

}
function fishingFeature() {
var fishingRod = document.getElementById("fishingrod");
fishingRod.onclick = function() {

function fishingEffect() {
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;
let opacity = 1;
let fadeOut = false;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = opacity;

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
            let y = Math.sin((x + time * 2) * 0.01 + i * 3) * 30 + canvas.height / 2;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsl(${190 + i * 10}, 100%, 50%)`; // Blue-cyan colors
        ctx.lineWidth = 30;
        ctx.stroke();
    }

    time += 2;

    if (fadeOut) {
        opacity -= 0.01;
        if (opacity <= 0) {
            canvas.remove(); // Remove canvas when fully faded out
            return;
        }
    }

    requestAnimationFrame(drawWave);
}

// Start animation
drawWave();

// After 3 seconds, start fading out
setTimeout(() => { fadeOut = true; }, 3000);
}
fishingEffect();
}
}
fishingFeature();
}

game();