// // Business logic
function PlayerTotal() {
  this.grandTotal = []
  this.currentId = 0
}

PlayerTotal.prototype.addRoll = function(roll) {
  grandTotal.id = this.assignId();
  this.grandTotal.push(roll);
}

PlayerTotal.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

//Business Logic for total -----
// function SmallScore(rolledNumber, currentScore) {
//   this.rolledNumber = rolledNumber
//   this.currentScore = currentScore
// }

// SmallScore.prototype.
//   return this.rolledNumber + this.currentScore;

function diceRoll() {
  return (Math.floor((Math.random() * 6) + 1));;
}

var playerTotal = new PlayerTotal();
var roll = ''
$(document).ready(function()  {
  $(".btn1").click(function() {
    var roll = diceRoll();
    console.log(roll);
  });
  $(".btn2").click(function() {
    PlayerTotal.addRoll(this.id);
    console.log(this.grandTotal);
  });
  $(".btn3").click(function() {
    var roll = diceRoll();
    console.log(roll);
  });
});
