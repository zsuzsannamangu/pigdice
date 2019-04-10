// // Business logic
function Player(name) {
  this.name = name;
  this.tempScore = 0;
  this.Score = 0;
  // this.currentId = 0
}


Player.prototype.Roll = function() {
  var number = diceRoll();
  if (number === 1) {
    this.tempScore = 0;
    console.log("one", number);
    // this.EndTurn()
  } else {
    this.tempScore += number
    console.log("single", number);
  }
    console.log("total", this.tempScore);
}

Player.prototype.Hold = function () {
  this.Score += this.tempScore;
  this.tempScore = 0;
  console.log("all", this.Score);
  // this.EndTurn()
}


//Business Logic for total -----
function diceRoll() {
  return (Math.floor((Math.random() * 6) + 1));;
}


// var roll = ''
$(document).ready(function()  {
  var newPlayer = new Player();
  $(".btn1").click(function() {
    newPlayer.Roll();
  });
  $(".btn2").click(function() {
    newPlayer.Hold();
  });
  // $(".btn3").click(function() {
  //   var roll = diceRoll();
  //   console.log(roll);
  // });
  // console.log("all", this.Score);
});
