// // Business logic
function Player(name) {
  this.name = name;
  this.tempScore = 0;
  this.Score = 0;
  // this.currentId = 0
}


Player.prototype.Roll = function() {
  // this.tempScore = 0;
  var number = diceRoll();
  if (number === 1) {
    this.tempScore = 0;
    console.log("one", number);
    return 0
    // this.EndTurn()
  } else {
    console.log("single", number);
    return this.tempScore += number
  }
    console.log("total", this.tempScore);
}

Player.prototype.Hold = function () {
  console.log("all", this.Score);
  return this.Score += this.tempScore;
  this.EndTurn()
  // this.tempScore = 0;
}

Player.prototype.EndTurn = function() {
  this.tempScore = 0;
  //change to next player show/hide
}

//Business Logic for total -----
function diceRoll() {
  return (Math.floor((Math.random() * 6) + 1));;
}


// var roll = ''
$(document).ready(function()  {
  var newPlayer = new Player();
  var newPlayer2 = new Player();
  $(".btn1").click(function() {
    // newPlayer.Roll();
    $(".endmessage2").hide();
    // $(".player1-number").show();

    var player1temp = newPlayer.Roll();
    $(".player1temp").text(player1temp);

  });
  $(".btn2").click(function() {
    // newPlayer.Hold();
    $(".endmessage1").show();

    var player1number = newPlayer.Hold();
    $(".player1number").text(player1number);

  });
  $(".btn3").click(function() {
    // newPlayer2.Roll();
    $(".endmessage1").hide();

    var player2temp = newPlayer2.Roll();
    $(".player2temp").text(player2temp);
  });
  $(".btn4").click(function() {
    // newPlayer2.Hold();
    $(".endmessage2").show();

    var player2number = newPlayer2.Hold();
    $(".player2number").text(player2number);
  });
  // $(".btn3").click(function() {
  //   var roll = diceRoll();
  //   console.log(roll);
  // });
  // console.log("all", this.Score);
});
