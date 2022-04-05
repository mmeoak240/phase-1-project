/**Global Variables */

/**Node Getters*/
const mainDiv = () => document.getElementById("main");
const beginContentDiv = () => document.getElementById("begin-content");
const homeLink = () => document.getElementById("home-link");
const beginLink = () => document.getElementById("begin-link");
const creditsLink = () => document.getElementById("credits-link");
const imgURL =
	'<img src= "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/mainpage/office-social-min.png/_jcr_content/renditions/original" class = "office-img" />';
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

	h1.innerText = "That's What Who Said?!";
	p.innerText = "How well do you know your Office family?";

	h1.className = "center-align";
	p.className = "center-align";

	mainDiv().innerHTML += imgURL;
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

const quoteGetter = () => {
	const guessBtn = document.createElement("button");
	guessBtn.className = "center-align";
	guessBtn.className = "guessBtn";
	guessBtn.innerText = "Quote";
	mainDiv().appendChild(guessBtn);
	guessBtn.addEventListener("click", (e) => {
		fetch("https://www.officeapi.dev/api/quotes/random")
			.then((resp) => resp.json())
			.then(function (quoteObj) {
				const quote = quoteObj.data.content;
				const p = document.createElement("p");
				p.className = "container";
				p.className = "quote-paragraph";
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

// How to reset the quote 'p' element everytime quote button is clicked?
// How to make quote button stay in place and have quotes appear in same place above everytime?
