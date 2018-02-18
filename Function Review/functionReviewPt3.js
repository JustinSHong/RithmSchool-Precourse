// Part 3 - write the following functions in the descriptions below

	// Rock Paper Scissors - using your knowledge so far, build a game of Rock/Paper/Scissor
	// where through the use of the prompt function, a user can enter their choice and based on a random selection
	// - they can either tie/win or lose against a computer.

	
function rockPaperScissors() {
	// ask use for their choice
	var user = prompt('Please choose rock, paper, or scissors').toLowerCase();

	// computer makes a choice
	var num = Math.random();
	var computer = '';

	if (num > 0 && num <= 0.33) {
		computer = 'rock';
	} else if (num > 0.33 && num <= 0.66) {
		computer = 'paper';
	} else if (num > 0.66) {
		computer = 'scissors';
	}
	// user vs computer
	if (user === 'rock') {
		if (computer === 'rock') {
			return user + ' ' + computer + ' ' + 'tie';
		} else if (computer === 'paper') {
			return user + ' ' + computer + ' ' + 'computer wins';
		}
		return user + ' ' + computer + ' ' + 'user wins';
	} else if (user === 'paper') {
		if (computer === 'paper') {
			return user + ' ' + computer + ' ' + 'tie';
		} else if (computer === 'rock') {
			return user + ' ' + computer + ' ' + 'user wins';
		}
		return user + ' ' + computer + ' ' + 'computer wins';
	} else {
		if (computer === 'scissors') {
			return user + ' ' + computer + ' ' + 'tie';
		} else if (computer === 'paper') {
			return user + ' ' + computer + ' ' + 'user wins';
		}
		return user + ' ' + computer + ' ' + 'computer wins';
	}
}

function rockPaperScissors() {

	// computer makes a choice
	function computerChoice(num) {

		if (num > 0 && num <= 0.33) {
			return 'rock';
		} else if (num > 0.33 && num <= 0.66) {
			return 'paper';
		}
		return 'scissors';
	}

	// prompt user with a choice 
	var userChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
	var computerChoice = computerChoice(Math.random());

	// compare choices
	var answers = ['rock','paper','scissors'];

	// special case: user makes a non-valid choice
	if (!userChoice || answers.indexOf(userChoice) === -1) {
		return 'Please make a valid choice';
	}

	// all losing scenarios
	if (userChoice === computerChoice) {
		return 'Tie!';
	}

	if (userChoice === 'rock' && computerChoice === 'paper') {
		return 'You lose, the computer chose ' + computerChoice;
	}

	if (userChoice === 'paper' && computerChoice === 'scissors') {
		return 'You lose, the computer chose ' + computerChoice;
	}

	if (userChoice === 'scissors' && computerChoice === 'rock') {
		return 'You lose, the computer chose ' + computerChoice;
	}
	// otherwise you win
	return 'You win, you chose ' + userChoice;
}
