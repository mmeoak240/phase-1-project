# Welcome to The Office: That’s What Who Said?!

## Why?

Me and my wife may be what you could call super fans. I'm not going to say we’ve watched the entire series a hundred or more times or that while most people have music on in the background while doing chores we have The Office playing, but i'm also not going to deny it. I created this application for people who wanted to test one of the most critical aspects of being a super fan, quoting it and knowing who said what. Also i always out quote my wife so this was made to help her practice.

## Features:

When at the home page you will have four clickable buttons in the navigation bar at the top.
The logo will cause an alert with an important message.
The “Home” button will return you to this page.
The “Begin!” button will bring you to the quote challenge page
The “Credits” page will bring you to the page giving credit to the people and resources who have given me the ability to make this application.

## How to use:

Firstly please click the “Begin!” button at the top right of the page.
This will bring you to the following page.
![phase_1_project_img1](https://user-images.githubusercontent.com/97415262/162031737-33017664-d0e6-43be-bf8a-9f38708f2989.png)
Whenever you are ready, click the “Quote” button. This will cause a quote by one of the characters from The Office to appear. You will have 5 seconds to guess who said the quote before the answer is provided.
![phase_1_project_img2](https://user-images.githubusercontent.com/97415262/162031814-a2e7935b-1ccd-431a-b8fe-67cb38f63f7d.png)
The button will now say next, click the repeat step 3.

## Code features:

The navigation bar links all operate using the ‘click’ event listener and use templates and DOM manipulation to change the page, all without having to redirect, creating a smoother user experience.
The “Quote” button utilizes the ‘click’ event listener as well but it executes 3 main functions
The first being a ‘fetch’ request that accesses an API on https://www.officeapi.dev and json()s the object.
guessBtn.addEventListener("click", (e) => {
fetch("https://www.officeapi.dev/api/quotes/random")
.then((resp) => resp.json())

The second function allows for the APIs returned information to be rendered to the page.

```
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
```

And the final function creates a setTimeout function that delays the rendering of the “firstName” value of the fetched object.
setTimeout(function () {
const name = quoteObj.data.character.firstname;
const lastName = quoteObj.data.character.lastname;
const answer = "Answer: ";
const p = document.createElement("p");
p.textContent = answer + name + " " + lastName;
mainDiv().appendChild(p);
}, 5000);

## Thanks:

Thank you for taking the time to view this README. I hope it will inspire other beginning coders to develop pages derived from the things that bring them joy in life and spread that to others. I hope the application was enjoyable to use as helping you become that much closer to achieving the level of super fan.
