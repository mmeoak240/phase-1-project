/**Global Variables */

/**Node Getters*/
const mainDiv = () => document.getElementById("main");
const beginContentDiv = () => document.getElementById("begin-content");
const homeLink = () => document.getElementById("home-link");
const beginLink = () => document.getElementById("begin-link");
const creditsLink = () => document.getElementById("credits-link");
const logoLink = () => document.getElementById("logo");
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

const attachlogoLink = () => {
	logoLink().addEventListener("click", loadLogo);
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
	h1.className = "main-header";
	p.className = "center-align";
	p.className = "main-para";

	mainDiv().innerHTML += imgURL;
	mainDiv().appendChild(h1);
	mainDiv().appendChild(p);
};

const loadBegin = (event) => {
	event.preventDefault;
	resetMainDiv();
	const h1 = document.createElement("h1");
	const p = document.createElement("p");
	// const submit = document.createElement("input");
	// const text = document.createElement("input");
	// const formSubmit = document.createElement("form");
	// const formText = document.createElement("form");

	h1.innerText = "Who Said...";
	h1.className = "main-header";
	// p.innerText = "You have 5 seconds";

	h1.className = "center-align";
	p.className = "center-align";
	// submit.type = "input";
	// text.type = "text";
	// input.className = "input-field";

	mainDiv().appendChild(h1);
	// formText.appendChild(text);
	// formSubmit.appendChild(submit);
	// mainDiv().appendChild(formSubmit);
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
	const credit5 = document.createElement("li");

	h1.innerText = "Made possible thanks to:";
	credit1.innerText = "Flatiron School";
	credit2.innerText = "Nancy Noyes";
	credit3.innerText = "The 2022-02seng-flex cohort";
	credit4.innerText = "https://www.officeapi.dev/";
	credit5.innerText = "My supportive wife";

	credit1.className = "list-element";
	credit2.className = "list-element";
	credit3.className = "list-element";
	credit4.className = "list-element";
	credit5.className = "list-element";

	h1.className = "center-align";

	mainDiv().appendChild(h1);
	mainDiv().appendChild(credit5);
	mainDiv().appendChild(credit1);
	mainDiv().appendChild(credit2);
	mainDiv().appendChild(credit3);
	mainDiv().appendChild(credit4);
};

const loadLogo = (event) => {
	event.preventDefault;
	alert(
		"This is the best show on earth. Maybe even the universe! Dont take my word for it, the page said so."
	);
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
				const timerP = document.createElement("p");
				p.className = "container";
				p.className = "quote-paragraph";
				p.textContent = quote;
				timerP.textContent = "You have 5 seconds";
				if (guessBtn.innerText === "Quote") {
					mainDiv().appendChild(p);
					mainDiv().appendChild(timerP);
					// mainDiv().appendChild(p1);
					guessBtn.innerText = "Next";
					setTimeout(function () {
						const name = quoteObj.data.character.firstname;
						const lastName = quoteObj.data.character.lastname;
						const answer = "Answer: ";
						const p = document.createElement("p");
						p.textContent = answer + name + " " + lastName;
						mainDiv().appendChild(p);
					}, 5000);
				} else if (guessBtn.innerText === "Next") {
					mainDiv.removeChild(p);
					mainDiv().appendChild(p);
					mainDiv().appendChild(timerP);
				}
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
	attachlogoLink();
});

// How to reset the quote 'p' element everytime quote button is clicked?
// How to make quote button stay in place and have quotes appear in same place above everytime?
// Origianl idea was a form that you could type the name of a character into and see if the inputs value equaled the fetched objects name value and display correct or incorrect
