// // Business logic for Player
function Player(name) {
  this.name = name;
  this.tempScore = 0;
  this.Score = 0;
  this.currentRoll = 0;
}

Player.prototype.Roll = function() {
  var number = diceRoll();
  if (number === 1) {
    this.currentRoll = number;
    this.EndTurn();
    return 0
  } else {
    this.currentRoll = number;
    return this.tempScore += number

  }
}

Player.prototype.Hold = function () {
  var totalScore = this.Score += this.tempScore;
  this.EndTurn();
  return totalScore

}

Player.prototype.EndTurn = function() {
  this.tempScore = 0;
  return 0;
  //change to next player show/hide
}

//Business Logic for diceRoll -----
function diceRoll() {
  return (Math.floor((Math.random() * 6) + 1));;
}


$(document).ready(function()  {
  var newPlayer = new Player();
  var newPlayer2 = new Player();
  var currPlayer = newPlayer
  $(".btn1").click(function() {
    if (newPlayer.currentRoll === 1 || currPlayer === newPlayer2) {
      newPlayer.currentRoll = 0;
      currPlayer = newPlayer2
      return
    }
    $(".endmessage2").hide();
    var player1temp = newPlayer.Roll();
    $(".player1temp").text(player1temp);
    var player1rolled = (newPlayer.currentRoll);
    $(".player1rolled").text(player1rolled);
  });

  $(".btn2").click(function() {
    if (currPlayer === newPlayer2) {
      return
    }
    $(".endmessage1").show();
    currPlayer = newPlayer2
    var player1number = newPlayer.Hold();
    $(".player1number").text(player1number);
    $(".player1temp").empty();
  });

  $(".btn3").click(function() {
    if (newPlayer2.currentRoll === 1 || currPlayer === newPlayer) {
      newPlayer2.currentRoll = 0;
      currPlayer = newPlayer
      return
    }
    $(".endmessage1").hide();
    var player2temp = newPlayer2.Roll();
    $(".player2temp").text(player2temp);
    var player2rolled = (newPlayer2.currentRoll);
    $(".player2rolled").text(player2rolled);
  });

  $(".btn4").click(function() {
    if (currPlayer === newPlayer) {
      return
    }
    $(".endmessage2").show();
    currPlayer = newPlayer
    var player2number = newPlayer2.Hold();
    $(".player2number").text(player2number);
    $(".player2temp").empty();
  });
});
