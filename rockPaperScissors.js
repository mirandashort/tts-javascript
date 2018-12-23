// 1. Use the power of JavaScript and the DOM API to build a clickable rock, paper, scissors game.
document.addEventListener('DOMContentLoaded', function() {

  var possibilities = [
    'rock',
    'paper',
    'scissors'
  ];

  var turn = [];

  var eval = function() {
    var randomPossibility = possibilities[Math.floor(Math.random() * possibilities.length)];
    document.getElementById('read-computer').innerHTML = 'Computer played ' + randomPossibility;

    var playerSelection = document.getElementById('player-choice');
    var selectedValue = playerSelection.options[playerSelection.selectedIndex].value;
    document.getElementById('read-player').innerHTML = 'You played ' + selectedValue

    turn.push([{computer: randomPossibility}, {player: selectedValue}]);
  };

  var computerScore = 0
  var playerScore = 0

  var getCurrentScore = function() {
    var computerPlay = turn[0][0].computer
    var playerPlay = turn[0][1].player

    if ((computerPlay === 'rock' && playerPlay === 'scissors') || (computerPlay === 'paper' && playerPlay === 'rock') || (computerPlay === 'scissors' && playerPlay === 'paper')) {
      computerScore += 1
    } else if ((computerPlay === 'scissors' && playerPlay === 'rock') || (computerPlay === 'rock' && playerPlay === 'paper') || (computerPlay === 'paper' && playerPlay === 'scissors')) {
      playerScore += 1
    }
    else computerScore += 0
    turn.shift()

    document.getElementById('current-score').innerHTML =
      'Computer: ' + computerScore + ', ' + 'You: ' + playerScore

    if (computerScore === 3) {
      alert('Computer wins!')
    }
    else if (playerScore === 3) {
      alert('You win!')
    }
    else {
      alert('Computer: ' + computerScore + ', ' + 'You: ' + playerScore)
    }
  }


  document.getElementById("challenge-computer").addEventListener("click", eval);
  document.getElementById('get-current-score').addEventListener("click", getCurrentScore)


});
