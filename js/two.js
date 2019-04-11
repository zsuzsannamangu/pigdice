// // Business logic
function Player(name) {
  this.name = name;
  this.tempScore = 0;
  this.Score = 0;
// this.currentId = 0
}

// function Game(players) {
//   this.players = players
//   this.currentPlayerIndex = 0
//   }

// Game.prototype.endTurn = function endTurn() {
//   var currentPlayer = this.players[this.currentPlayerIndex]
// // TODO: reset currentPlayer's round score and add to total Score
// // TODO: check win condition
//     if (this.currentPlayerIndex === this.players.length - 1) {
//         this.currentPlayerIndex = 0 }
//         else {
//         this.currentPlayerIndex++ }
//       }

Player.prototype.Roll = function() {
// this.tempScore = 0;
var number = diceRoll();
  if (number === 1) {
    this.tempScore = 0;
    console.log("one", number);
    return 0
// this.EndTurn()
} else
  { console.log("single", number);
    return this.tempScore += number }
    console.log("total", this.tempScore); }

Player.prototype.Hold = function () {
  console.log("all", this.Score);
  var totalScore = this.Score += this.tempScore;
  this.tempScore = 0; return totalScore
// this.EndTurn();

}

// Player.prototype.EndTurn = function() {
//   this.tempScore = 0;
// //change to next player show/hide }

//Business Logic for total -----
function diceRoll() { return (Math.floor((Math.random() * 6) + 1));; }


$(document).ready(function() {
  var newPlayer = new Player();
  var newPlayer2 = new Player();
  var currPlayer = newPlayer
  $(".btn1").click(function() {
    if (currPlayer === newPlayer2) {
      return
    }
// newPlayer.Roll();
$(".endmessage2").hide();
// $(".player1-number").show();

var player1temp = newPlayer.Roll();
$(".player1temp").text(player1temp);

// var player1rolled = number
// $(".player1rolled").text(player1rolled);
});

$(".btn2").click(function() {
  if (currPlayer === newPlayer2) {
    return
  }
  // newPlayer.Hold();
$(".endmessage1").show();
currPlayer = newPlayer2

var player1number = newPlayer.Hold();
$(".player1number").text(player1number);
$(".player1temp").empty();
});

$(".btn3").click(function() {
  if (currPlayer === newPlayer) {
    return }
// newPlayer2.Roll();
$(".endmessage1").hide();

var player2temp = newPlayer2.Roll();
$(".player2temp").text(player2temp);
});

$(".btn4").click(function() {
  if (currPlayer === newPlayer) {
    return
  }
// newPlayer2.Hold();
$(".endmessage2").show();
currPlayer = newPlayer

var player2number = newPlayer2.Hold();
$(".player2number").text(player2number);
$(".player2temp").empty();
});

});
