function setup() {
  createCanvas(1800, 1000);
  createBoard();

}

/* Creates board of 15 stones */
function createBoard(){
  startGame();

}


//runs every second
function draw() {

  //draws the constants:
  //background, buttons, rules
  drawConstants();

  //draws the moveable parts of NIM
  //stones, player text, game over text
  drawBoard();

}

//draws the constant parts of the game
function drawConstants(){
  //"clears the previous info"
  background(238,210,232);

  //yellow background of the game board
  fill(242,227,198);
  noStroke();
  rect(100, 100, 800, 500, 20);

  //welcome to nim!
  fill(71,92,108);
  textSize(32);
  text("Welcome to NIM!", 500, 50);
  textAlign(CENTER, CENTER);

  //rules!
  fill(71,92,108);
  textSize(20);
  text("Rules of NIM:", 500, 800);
  text("Two players take turns removing 1, 2, or 3 stones from the board.", 500, 825);
  text("Whoever cannot remove a stone on their turn LOSES!", 500, 850);
  text("This game is super easy! Anyone can play!", 500, 875);
  textAlign(CENTER, CENTER);
  

  //remove-1 stone button
  fill(242,227,198);
  noStroke();
  rect(100, 650, 200, 100, 20);

  //remove-1 stone txt
  fill(71,92,108);
  textSize(32);
  text("1 stone", 200, 700);
  textAlign(CENTER, CENTER);

  //code copied from Spring example on j5
  // Test if mouse if over remove 1 button
  if (mouseX > 100 && mouseX < 300 && mouseY > 650 && mouseY < 750) {
    overRemove1 = true;
  } else {
    overRemove1 = false;
  }

  //remove-2 button
  fill(242,227,198);
  noStroke();
  rect(400, 650, 200, 100, 20);

  //remove-2 txt
  fill(71,92,108);
  textSize(32);
  text("2 stones", 500, 700);
  textAlign(CENTER, CENTER);

  //code copied from Spring example on j5
  // Test if mouse if over the remove 2 button
  if (mouseX > 400 && mouseX < 600 && mouseY > 650 && mouseY < 750) {
    overRemove2 = true;
  } else {
    overRemove2 = false;
  }
  
  //remove 3 button
  fill(242,227,198);
  noStroke();
  rect(700, 650, 200, 100, 20);

  //remove 3 txt
  fill(71,92,108);
  textSize(32);
  text("3 stones", 800, 700);
  textAlign(CENTER, CENTER);

  //code copied from Spring example on j5
  // Test if mouse if over the remove 3 button
  if (mouseX > 700 && mouseX < 900 && mouseY > 650 && mouseY < 750) {
    overRemove3 = true;
  } else {
    overRemove3 = false;
  }

}

//checks for buttons being pressed
function mousePressed() {
  if (overRemove1) {
    removeStone(1);
  }

  if (overRemove2) {
    removeStone(2);
  }

  if (overRemove3) {
    removeStone(3);
  }

  if (overAgain && stones == 0){
    startGame();
    overAgain = false;
  }
}

/* Will remove n stones from the board, if legal */
function removeStone(x){
  if (stones >= x){
    stones = stones - x;
    nextPlayer();
  }

}

/* Moves onto the next player */
function nextPlayer(){
  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
}

//draws the moveable parts of NIM
//stones, player text, game over text
function drawBoard() {

  if (stones != 0){
    //if the game has not ended

    //displays number of stones as stars
    fill(71,92,108);
    textSize(64);
    stoneString = "* ".repeat(stones);
    text(stoneString, 500, 250);
    textAlign(CENTER, CENTER);

    //display the number of stones with text
    fill(71,92,108);
    textSize(32);
    stonesTex = "There are currently " + stones + " stone(s) on the board";
    text(stonesTex, 500, 400);
    textAlign(CENTER, CENTER);

    //prompt text
    fill(71,92,108);
    textSize(32);
    stonesTex = "It is currently Player " + player + "'s turn!";
    text(stonesTex, 500, 450);
    textAlign(CENTER, CENTER);

    //prompt text
    fill(71,92,108);
    textSize(32);
    stonesTex = "Player " + player + ", how many stones do you want to remove?";
    text(stonesTex, 500, 500);
    textAlign(CENTER, CENTER);
  }
    else {
  
    //Game over!
    fill(71,92,108);
    textSize(65);
    text("GAME OVER!!", 500, 200);
    textSize(32);
    textAlign(CENTER, CENTER);

    //prompt text
    fill(71,92,108);
    textSize(32);
    stonesTex = "It is currently Player " + player + "'s turn!";
    text(stonesTex, 500, 300);
    textAlign(CENTER, CENTER);


    //prompt text
    fill(71,92,108);
    textSize(32);
    text("And welp, you can't remove any stones...", 500, 350);
    textAlign(CENTER, CENTER);

    //prompt text
    fill(71,92,108);
    textSize(32);
    text("GG, Player " + player + " loses!", 500, 400);
    textAlign(CENTER, CENTER);
   

    //play again button
    fill(238,210,232);
    rect(400, 450, 200, 100, 20);

    //play again txt
    fill(71,92,108);
    textSize(32);
    text("Play again", 500, 500);
    textAlign(CENTER, CENTER);

    //code copied from Spring example on j5
    // Test if mouse if over the remove 3 button
    if (mouseX > 400 && mouseX < 600 && mouseY > 450 && mouseY < 550) {
      overAgain = true;
    } else {
      overAgain = false;
    }
  }
}

//starts the game
function startGame(){
  stones = 15;
  player = 1;
}