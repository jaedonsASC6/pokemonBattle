let pokemonSize = 300
let canvasLength = 1000
let canvasWidth = 1000
let healthOutlinelength = 200
let healthOutlineWidth = 25
let healthBarLengthPoke1 = 200
let healthBarWidthPoke1 = 25
let healthBarLengthPoke2 = 200
let healthBarWidthPoke2 = 25
let attackBoxLength = 500
let attackBoxWidth = 200
let pokemon1Attack;
let pokemon2Attack;

function setup() {
    pokemon1Attack = random(1,100)
    pokemon2Attack = random(1,100)
    createCanvas(canvasLength,canvasWidth)
}
function draw() {
    background("gray")
    fill("green")
    rect(0,800,attackBoxLength,attackBoxWidth)
    fill("green")
    rect(500,800,attackBoxLength,attackBoxWidth)
    fill("red")
    rect(0,500,pokemonSize,pokemonSize)
    fill("blue")
    rect(700,500,pokemonSize,pokemonSize)
    fill("white")
    rect(0,0,healthOutlinelength,healthOutlineWidth)
    rect(800,0,healthOutlinelength,healthOutlineWidth)
    fill("red")
    rect(0,0,healthBarLengthPoke1,healthBarWidthPoke1)
    fill("red")
    rect(800,0,healthBarLengthPoke2,healthBarWidthPoke2)
}
function mouseClicked(){
    // if you click pokemone ones attack box
    let player1Damage = random(1,50)
    let player2Damage = random(1,50)
if(healthBarLengthPoke1 > 0 && healthBarLengthPoke2 > 0){
    if(mouseX > 0 && mouseX < attackBoxLength && mouseY <= 1000 && mouseY > 800){
        healthBarLengthPoke2 -= player1Damage
        console.log(healthBarLengthPoke2)
        }
    if(mouseX > 500 && mouseX < 1000 && mouseY <= 1000 && mouseY > 800){
            healthBarLengthPoke1 -= player2Damage
        }
    }else if(healthBarLengthPoke2 - player1Damage <= 0){
        alert("Player 1 Won Congrats")
        pokemonSize = 300
        canvasLength = 1000
        canvasWidth = 1000
        healthOutlinelength = 200
        healthOutlineWidth = 25
        healthBarLengthPoke1 = 200
        healthBarWidthPoke1 = 25
        healthBarLengthPoke2 = 200
        healthBarWidthPoke2 = 25
        attackBoxLength = 500
        attackBoxWidth = 200
    }else if(healthBarLengthPoke1 - player2Damage <= 0){
        alert("Player 2 Won Congrats")
        pokemonSize = 300
        canvasLength = 1000
        canvasWidth = 1000
        healthOutlinelength = 200
        healthOutlineWidth = 25
        healthBarLengthPoke1 = 200
        healthBarWidthPoke1 = 25
        healthBarLengthPoke2 = 200
        healthBarWidthPoke2 = 25
        attackBoxLength = 500
        attackBoxWidth = 200
    }
}
