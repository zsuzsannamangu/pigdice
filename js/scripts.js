// // Business logic
function PlayerTotal() {
  this.grandTotal = []
  // this.currentId = 0
}

PlayerTotal.prototype.addRoll = function(total) {
  // grandTotal.id = this.assignId();
  this.grandTotal.push(total);
}
//
// // PlayerTotal.prototype.assignId = function() {
// //   this.currentId +=1;
// //   return this.currentId;
// // }
//
// //Business Logic for total -----
function SmallScore(rolledNumber, currentScore) {
  this.rolledNumber = rolledNumber
  this.currentScore = currentScore
}

SmallScore.prototype.
  return this.rolledNumber + this.currentScore;

function roll() {
  return (Math.floor((Math.random() * 6) + 1));;
}
var roll = roll();
console.log(roll);

// var roll1 = new PlayerTotal(3)
// console.log(roll1.addRoll)

// PlayerTotal.prototype.adfasdf = function() {
//   return (this.roundScore);
// }

// function hold() {
//   how to hold
// }

// var playerTotal = new PlayerTotal();
//
function attachTicketListeners() {
  $(".btn1").on("click", function() {
    return (Math.floor((Math.random() * 6) + 1));
  });
};


// $(document).ready(function()  {
//   $(".btn1").click(function() {
//     var eachRoundScore = new SmallScore(
//       var roll = Math.floor((Math.random() * 6) + 1);
//       console.log(roll);
//     )
//
//   //   var amount = bankaccount.currentBalance();
//   //   //
//   //   // $(".amount").number(amount);
//   //   $("#show-balance").show();
//   //
//   //   console.log(amount.currentBalance())
//   });
// });



//
//
//
// Math.floor((Math.random() * 6) + 1);
//
//
//
// return (this.currentScore + this.roundScore);
