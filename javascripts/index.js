/**Global Variables */

/**Node Getters*/
const mainDiv = () => document.getElementById("main");
const beginContentDiv = () => document.getElementById("begin-content");
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

const attachCreditsLink = () => {
	creditsLink().addEventListener("click", loadCredits);
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
	// const btn = document.createElement("button");
	h1.innerText = "Who Said...";
	p.innerText = "Type your guess and hit submit";
	// btn.innerText = "Quote";

	h1.className = "center-align";
	p.className = "center-align";
	// btn.className = "center-align";
	// btn.setAttribute("id", "quoteButton");

	mainDiv().appendChild(h1);
	mainDiv().appendChild(p);
	// mainDiv().appendChild(btn);
	quoteGetter();
};

const loadCredits = (event) => {
	event.preventDefault;
	resetMainDiv();
	const h1 = document.createElement("h1");
	const ul = document.getElementById("credits-lists");
	const credit1 = document.createElement("li");
	const credit2 = document.createElement("li");
	const credit3 = document.createElement("li");
	const credit4 = document.createElement("li");

	h1.innerText = "Made possible because of:";
	credit1.innerText = "Flatiron School";
	credit2.innerText = "Nancy Noyes";
	credit3.innerText = "The 2022-02seng-flex cohort";
	credit4.innerText = "https://www.officeapi.dev/";

	h1.className = "center-align";

	mainDiv().appendChild(h1);
	mainDiv().appendChild(credit1);
	mainDiv().appendChild(credit2);
	mainDiv().appendChild(credit3);
	mainDiv().appendChild(credit4);
};

// const createCard = () => {
// 	const div1 = document.createElement("div");
// 	const div2 = document.createElement("div");
// 	const div3 = document.createElement("div");
// 	const div4 = document.createElement("div");
// 	const span = document.createElement("span");
// 	const p = document.createElement("p");

// 	span.innerText = "Quote";

// 	div1.className = "row";
// 	div2.className = "col s12 m6";
// 	div3.className = "card blue-grey darken-1";
// 	div4.className = "card-content white-text";
// 	span.className = "card-title";
// };

const quoteGetter = () => {
	const guessBtn = document.createElement("button");
	guessBtn.innerText = "Guess!";
	mainDiv().appendChild(guessBtn);
	guessBtn.addEventListener("click", (e) => {
		fetch("https://www.officeapi.dev/api/quotes/random")
			.then((resp) => resp.json())
			.then(function (quoteObj) {
				console.log(quoteObj);
				const quote = quoteObj.data.content;
				console.log(quote);
				const p = document.createElement("p");
				p.className = "container";
				p.textContent = quote;
				mainDiv().appendChild(p);
			});
	});
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
	attachCreditsLink();
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
