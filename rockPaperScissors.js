// 1. Use the power of JavaScript and the DOM API to build a clickable rock, paper, scissors game.
document.addEventListener('DOMContentLoaded', function() {

  var possibilities = [
    'rock',
    'paper',
    'scissors'
  ];
  var turn = []

  var randomPossibility = possibilities[Math.floor(Math.random() * possibilities.length)];
  var eval = function(possibilities) {
    document.getElementById('read-computer').innerHTML = 'Computer played ' + randomPossibility;

    var playerSelection = document.getElementById('player-choice');
    var selectedValue = playerSelection.options[playerSelection.selectedIndex].value;
    document.getElementById('read-player').innerHTML = 'You played ' + selectedValue

    turn.push([{computer: randomPossibility}, {player: selectedValue}]);
    console.log(turn)
  };

  var challengeComputer = document.getElementById("challenge-computer")
  challengeComputer.addEventListener("click", eval);

});
