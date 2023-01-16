//List of page elements to be called

const startButton = document.querySelector("#start");
const initialScreen = document.querySelector("#start-screen");
const questionArea = document.querySelector("#questions");


// The starting amount of seconds for timer
let timerSeconds = 75;

document.getElementById('time').innerHTML = timerSeconds;






// Function to hide the start button and start text. This function can be called in to
// other functions to hide a variety of elements

function hidden(section) {
    section.style.display = 'none';
}

// And a similar function to reveal elements

function reveal(section) {
    section.style.display = 'block';
}


// Timer countdown in seconds

function countdown() {
	timerSeconds--;
	document.getElementById("time").innerHTML = String( timerSeconds );
	if (timerSeconds > 0) {
		setTimeout(countdown, 1000);
	}
};



// Adds event listener to the start button
// On click runs a series of functions including hide start button, start timer, reveal questions etc

startButton.addEventListener('click', function () {
    hidden(initialScreen);
    reveal(questionArea);
    setTimeout(countdown, 1000);
    renderQuestion();
});


// Show question


let questionOrder = 0;
let currentQ = 0;


function renderQuestion() {
    const currentQuestion = questions[currentQ].question

    let questionTitle = document.getElementById('question-title');

    questionTitle.textContent = currentQuestion

    let choicesContainer = document.getElementById('choices')


    for (let i = 0; i < questions[currentQ].choices.length; i++) {

        let button = document.createElement('button')

        button.textContent = questions[currentQ].choices[i]

        choicesContainer.append(button)
    }
}





