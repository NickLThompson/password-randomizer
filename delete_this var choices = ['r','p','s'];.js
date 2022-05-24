var choices = ['r','p','s'];
var wins = 0;
var losses = 0;
var ties = 0;

function init() {
  var promptChoice = prompt('What would you like to choose: R, P, or S?');
  if (!promptChoice) {
    alert('Please enter a valid value');
    return init();
  }
  
  var userChoice = promptChoice.toLowerCase()[0];
  
  if (choices.includes(userChoice)) {
    console.log(userChoice);
    var random = Math.floor(Math.random() * choices.length);
    var automatedChoice = choices[random];
    console.log(automatedChoice);

    // user wins
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

    if (
      userChoice === 'r' && automatedChoice === 's' ||
      userChoice === 's' && automatedChoice === 'p' || 
      userChoice === 'p' && automatedChoice === 'r'
    ) {
      alert('You win!');
      wins += 1;
    } else if (
      automatedChoice === 'r' && userChoice === 's' ||
      automatedChoice === 's' && userChoice === 'p' || 
      automatedChoice === 'p' && userChoice === 'r'
    ) {
      alert('You lose!');
      losses += 1;
    } else {
      alert('Tie');
      ties += 1;
    }

    // alert("wins: " + wins + "\nlosses: " + losses + "\nties: " + ties);
    alert(`
        wins: ${wins}
        losses: ${losses}
        ties: ${ties}
    `)

    var playAgain = confirm("Would you like to play again?");

    if (playAgain) {
        init();
    } else {
        alert("Game over");
    }

  } else {
    alert('Please enter R, P, or S');
    return init();
  }
};

init();