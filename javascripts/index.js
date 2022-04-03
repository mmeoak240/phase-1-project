/**Global Variables */

/**Node Getters*/
const mainDiv = () => document.getElementById("main");
const homeLink = () => document.getElementById("home-link");
const beginLink = () => document.getElementById("begin-link");
const creditsLink = () => document.getElementById("credits-link");
/**Event Listeners*/
const attachHomeLink = () => {
	homeLink().addEventListener("click", loadHome);
};

const attachBeginLink = () => {
	beginLink().addEventListener("click", loadBegin);
};

/**Event Handlers*/
const loadHome = (event) => {
	if (event) {
		event.preventDefault();
	}
	resetMainDiv();
	const h1 = document.createElement("h1");
	const p = document.createElement("p");

	h1.innerText = "That's What Who Said!";
	p.innerText = "How well do you know your Office family?";

	h1.className = "center-align";
	p.className = "center-align";

	mainDiv().appendChild(h1);
	mainDiv().appendChild(p);
};

const loadBegin = (event) => {
	event.preventDefault;
	resetMainDiv();
	const h1 = document.createElement("h1");
	const p = document.createElement("p");

	h1.innerText = "Who Said...";
	p.innerText = "Type your guess and hit submit";

	h1.className = "center-align";
	p.className = "center-align";

	mainDiv().appendChild(h1);
	mainDiv().appendChild(p);
};

const loadCredits = (event) => {
	event.preventDefault;
	resetMainDiv();
	const h1 = document.createElement("h1");
	const ul = document.createElement("ul");
	const li = document.createElement("li");

	h1.innerText = "MAde possible because of:";
	p.innerText = "Type your guess and hit submit";

	h1.className = "center-align";
	p.className = "center-align";

	mainDiv().appendChild(h1);
	mainDiv().appendChild(p);
};

/**MISC*/
const resetMainDiv = () => {
	mainDiv().innerHTML = "";
};

/**StartUp*/

document.addEventListener("DOMContentLoaded", function () {
	loadHome();
	attachHomeLink();
	attachBeginLink();
});

// const quizContainer = document.getElementById("quiz");
// const resultsContainer = document.getElementById("results");
// const submitButton = document.getElementById("submit");

// function buildQuiz() {}

// function showResults() {}

// // display quiz right away
// buildQuiz();

// // on submit, show results
// submitButton.addEventListener("click", showResults);

// function quoteGetter() {
// 	fetch("https://officeapi.dev/api/quotes/random")
// 		.then((resp) => resp.json())
// 		.then((quoteObj) => renderQuote(quoteObj));
// }
