"use strict"


/*
const block = document.querySelector('.block');
const blockClone = block.cloneNode(true);
console.log(blockClone);
*/

/*
const block = document.querySelector('.block');
block.remove();
*/

/*
const block = document.querySelector('.block');
block.className = "object";
*/

/*
const block = document.querySelector('.block');
block.classList.add('text');
block.classList.remove('text');
block.classList.toggle('active');
block.classList.toggle('active');
console.log(block.classList.contains('block'));
*/

const block = document.querySelector('.block');
block.style.paddingTop = `20px`;
block.style.textDecoration = `underline`;
block.style.textDecoration = ``;
block.style.cssText = `
   background-color: rgb(205, 240, 25);
	font-size: 32px;
	padding: 10px;
`;
block.style.backgroundColor = ``;
block.style.color = `rgb(100, 24, 255)`;
block.style.backgroundColor = `rgb(205, 240, 25)`;

const block1 = document.querySelector('.page');
const blockStyle = getComputedStyle(block1);
const padding = blockStyle.padding;
console.log(padding);
const fontSize = parseInt(blockStyle.fontSize);
console.log(fontSize);

const block2 = document.querySelector('.block__title');
const speed = block2.dataset.speed;
console.log(speed);

console.log(block2.hasAttribute('data-speed'));

block1.hidden = false;

console.log(block1.tagName);


// Розміри та координати

/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);

const mainElement = document.documentElement;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight);

const width = window.innerWidth - mainElement.clientWidth;
console.log(width);
*/

const scrollTop = window.scrollY;
const scrollLeft = window.scrollX;
console.log(scrollTop);
console.log(scrollLeft);

/*

window.scrollBy(0, 10);
console.log(window.scrollY);

window.scrollTo({
	top: 100,
	left: 0,
	behavior: "smooth"
});

*/


// Позиція обєкта

const block3 = document.querySelector('.block');
console.log(block.offsetParent);
console.log(block.offsetTop);
console.log(block.offsetLeft);

// Розміри

const block4 = document.querySelector('.block');
console.log(block4.offsetWidth);
console.log(block4.offsetHeight);

// Координати

console.log(block4.getBoundingClientRect().top);

// Події

const link = document.querySelector('.link');
link.style.color = `rgb(100, 24, 255)`;
link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('подія');
}
link.removeEventListener("click", linkAction);

// Дія за замовчуванням

const link1 = document.querySelector('.link');
link1.addEventListener("click", linkAction);
function linkAction(event) {
	if (link1.dataset.google === "false") {
		console.log('подія');
		event.preventDefault();
	}
}

const links = document.querySelectorAll('.link');
links.forEach(link1 => {
	link1.addEventListener("click", linkAction);
	function linkAction(event) {
		if (link1.dataset.google === "false") {
			console.log('подія');
			event.preventDefault();
		}
	}
});

// Делегування подій

document.addEventListener("click", action);
function action(event) {
	const targetItem = event.target;
	console.log(targetItem);
	if (targetItem.closest('.link')) {
		console.log('link!!!');
		event.preventDefault();
	}
	console.log('click');
}

//  Задачі з відео

// Відео JS - DOM. задача 1

const greeting = document.querySelector('[data-say-hi]');
console.log(greeting);
console.log(greeting.getAttribute('data-say-hi'));   // варіант 1

if (greeting) {                                    // варіант 2
	console.log(greeting.dataset.sayHi);  
}

// Відео JS - DOM. задача 2

const namesList = document.querySelectorAll('li');  
let item;
namesList.forEach(li => {
	if (li.textContent === "Йончи") return item = li
});
console.log(item);

// Відео JS - DOM. задача 3

const toDo = document.querySelectorAll('.like');
console.log(toDo);


// Відео JS - DOM. задача 4

const list = document.querySelector('ul');  
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// Відео JS - Розміри, прокрутка, координати елементів. задача 1

const mainElement = document.documentElement;  
const mainElementWidth1 = mainElement.clientWidth;

console.log(mainElementWidth1);

const windowWidth1 = window.innerWidth;

console.log(windowWidth1);

const width = windowWidth1 - mainElementWidth1;
console.log(width);

// Відео JS - Розміри, прокрутка, коорд.  задача 2

function scroll() {                   
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(scroll, 1000);

// Відео JS - Розміри, прокрутка, коорд.  задача 3

const item1 = document.querySelector('.names');           
const getItemCoords1 = item1.getBoundingClientRect();
console.log(getItemCoords1);

const item2 = document.querySelector('[data-say-hi]');
const getItemCoords2 = item2.getBoundingClientRect();
console.log(getItemCoords2);

const item3 = document.querySelector('.block__title');
const getItemCoords3 = item3.getBoundingClientRect();
console.log(getItemCoords3);


// Задача

const searchBody = document.querySelector('.search');
document.addEventListener("click", search);
document.addEventListener("keyup", search);

function search(event) {
	if (event.target.closest('.search__button')) {
		searchBody.classList.toggle('_active');
	}
	if (!event.target.closest('.search') || event.code === "Escape") {
		searchBody.classList.remove('_active');
	}
}

const txtItem = document.querySelector('.form__input');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.form__label span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}










