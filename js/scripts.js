// // Business logic for Player
function Player(name) {
  this.name = name;
  this.tempScore = 0;
  this.Score = 0;
  this.currentRoll = 0;
}

Player.prototype.roll = function() {
  this.currentRoll = diceRoll();
  if (this.currentRoll === 1) {
    this.endTurn();
  } else {
    this.tempScore += this.currentRoll;
  }
  return this.currentRoll;
}

Player.prototype.hold = function () {
  this.totalScore = this.Score += this.tempScore;
  this.endTurn();
  return this.totalScore;
}

Player.prototype.endTurn = function() {
  this.tempScore = 0;
  console.log('END TURN!!!', this.name);
  this.game.nextPlayer();
}



function Game() {
  this.players = [];
  this.currentPlayerIndex = 0;
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
  // Make this game accessable to the player
  player.game = this;
}

Game.prototype.nextPlayer = function(){
  var currentPlayer = this.players[this.currentPlayerIndex]
  if (this.currentPlayerIndex === this.players.length - 1) {
      this.currentPlayerIndex = 0
  } else {
    this.currentPlayerIndex++
  }
}
//
var zsuzsi = new Player('Zsuzsi');
var ben = new Player('Ben');
var me = new Player('me');

var game = new Game();

game.addPlayer(ben);
game.addPlayer(zsuzsi);
game.addPlayer(me);

console.log(game.players[game.currentPlayerIndex].name,
   game.players[game.currentPlayerIndex].currentRoll,
    game.players[game.currentPlayerIndex].tempScore,
     game.players[game.currentPlayerIndex].Score)

console.log(game.players[game.currentPlayerIndex].roll(
))
console.log(game.players[game.currentPlayerIndex].name,
   game.players[game.currentPlayerIndex].currentRoll,
    game.players[game.currentPlayerIndex].tempScore,
     game.players[game.currentPlayerIndex].Score)

console.log(game.players[game.currentPlayerIndex].roll(
))
console.log(game.players[game.currentPlayerIndex].name,
   game.players[game.currentPlayerIndex].currentRoll,
    game.players[game.currentPlayerIndex].tempScore,
     game.players[game.currentPlayerIndex].Score)

console.log(game.players[game.currentPlayerIndex].roll(
))
console.log(game.players[game.currentPlayerIndex].name,
   game.players[game.currentPlayerIndex].currentRoll,
    game.players[game.currentPlayerIndex].tempScore,
     game.players[game.currentPlayerIndex].Score)

console.log(game.players[game.currentPlayerIndex].roll(
))
console.log(game.players[game.currentPlayerIndex].name,
   game.players[game.currentPlayerIndex].currentRoll,
    game.players[game.currentPlayerIndex].tempScore,
     game.players[game.currentPlayerIndex].Score)

console.log(game.players[game.currentPlayerIndex].hold(
))
console.log(game.players[game.currentPlayerIndex].name,
   game.players[game.currentPlayerIndex].currentRoll,
    game.players[game.currentPlayerIndex].tempScore,
     game.players[game.currentPlayerIndex].Score)
     console.log(game.players[game.currentPlayerIndex].name,
        game.players[game.currentPlayerIndex].currentRoll,
         game.players[game.currentPlayerIndex].tempScore,
          game.players[game.currentPlayerIndex].Score)

     console.log(game.players[game.currentPlayerIndex].roll(
     ))
     console.log(game.players[game.currentPlayerIndex].name,
        game.players[game.currentPlayerIndex].currentRoll,
         game.players[game.currentPlayerIndex].tempScore,
          game.players[game.currentPlayerIndex].Score)

     console.log(game.players[game.currentPlayerIndex].roll(
     ))
     console.log(game.players[game.currentPlayerIndex].name,
        game.players[game.currentPlayerIndex].currentRoll,
         game.players[game.currentPlayerIndex].tempScore,
          game.players[game.currentPlayerIndex].Score)

     console.log(game.players[game.currentPlayerIndex].roll(
     ))
     console.log(game.players[game.currentPlayerIndex].name,
        game.players[game.currentPlayerIndex].currentRoll,
         game.players[game.currentPlayerIndex].tempScore,
          game.players[game.currentPlayerIndex].Score)

     console.log(game.players[game.currentPlayerIndex].roll(
     ))
     console.log(game.players[game.currentPlayerIndex].name,
        game.players[game.currentPlayerIndex].currentRoll,
         game.players[game.currentPlayerIndex].tempScore,
          game.players[game.currentPlayerIndex].Score)

     console.log(game.players[game.currentPlayerIndex].hold(
     ))
     console.log(game.players[game.currentPlayerIndex].name,
        game.players[game.currentPlayerIndex].currentRoll,
         game.players[game.currentPlayerIndex].tempScore,
          game.players[game.currentPlayerIndex].Score)

//Business Logic for diceRoll -----
function diceRoll() {
  return (Math.floor((Math.random() * 6) + 1));;
}

// console.log(zsuzsi.name, zsuzsi.currentRoll, zsuzsi.tempScore, zsuzsi.Score)
// console.log(zsuzsi.roll())
// console.log(zsuzsi.name, zsuzsi.currentRoll, zsuzsi.tempScore, zsuzsi.Score)
// console.log(zsuzsi.roll())
// console.log(zsuzsi.name, zsuzsi.currentRoll, zsuzsi.tempScore, zsuzsi.Score)
// console.log(zsuzsi.roll())
// console.log(zsuzsi.name, zsuzsi.currentRoll, zsuzsi.tempScore, zsuzsi.Score)
// console.log(zsuzsi.roll())
// console.log(zsuzsi.name, zsuzsi.currentRoll, zsuzsi.tempScore, zsuzsi.Score)
// console.log(zsuzsi.hold())
// console.log(zsuzsi.name, zsuzsi.currentRoll, zsuzsi.tempScore, zsuzsi.Score)

$(document).ready(function()  {
  // var newGame = new Game();
  var newPlayer = new Player();
  var newPlayer2 = new Player();
  var currPlayer = newPlayer
  $(".btn1").click(function() {
    if (newPlayer.currentRoll === 1 || currPlayer === newPlayer2) {
      newPlayer.currentRoll = 0;
      var player2number = newPlayer2.Hold();
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
      var player1number = newPlayer.Hold();
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
