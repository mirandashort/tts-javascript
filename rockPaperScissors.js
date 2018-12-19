// 1. Use the power of JavaScript and the DOM API to build a clickable rock, paper, scissors game.
document.addEventListener('DOMContentLoaded', function() {

  var possibilities = [
    'rock',
    'paper',
    'scissors'
  ];
  var turn = []

  var randomPossibility = possibilities[Math.floor(Math.random() * possibilities.length)];
  var readComputer = function(possibilities) {
    document.getElementById('read-computer').innerHTML = 'Computer played ' + randomPossibility;
    result = randomPossibility;
    turn.push({computer: result});
  };

  var readPlayer = function() {
    var playerSelection = document.getElementById('player-choice');
    var selectedValue = playerSelection.options[playerSelection.selectedIndex].value;
    var textValue = playerSelection.options[playerSelection.selectedIndex].text;
    document.getElementById('read-player').innerHTML = 'You played ' + textValue
    return textValue;
  }
  var challengeComputer = document.getElementById("challenge-computer")
  challengeComputer.addEventListener("click", readPlayer);
  challengeComputer.addEventListener("click", readComputer);

});
