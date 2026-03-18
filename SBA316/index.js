// const firstElement=document.querySelector(".myFamily");
// const mainTitle = document.querySelector("#mainTitle");
// const specificInput = document.querySelector("div.user-panel input");
// const allItems = document.querySelectorAll(".tem");
// const allParagraphs = document.querySelectorAll("p");
// const notesAnaAlerts = document.querySelectorAll("div.note,div.alert");

const list = document.querySelector("#list");
const parent = document.getElementById('parent');
console.log(parent);

const first = parent.firstChild;
console.log(first);
// const next = secondChild.nextSibling.nextElementSibling;
// =parent.secondChild;
// const secondElement = first.nextElementSibling;
// console.log(secondChild);
// console.log(secondElement);
// const nav = document.querySelector
const second = parent.secondChild;
// console.log(second);

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = document.querySelectorAll(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    elements[0].style.backgroundColor = randomColor;
  } catch (e) {
    list.textContent = e;
  }
}

/* document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("myElement");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("myElement"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("myElement");
}); */

/* for loop
const elements = document.querySelector('.item.GetElementsByID'); */

/* forEach with HTMLCollection */

const items = document.getElementsByClassName('item');

for (let i = 0; i < document.querySelector.getElementByClassName; i++) {
console.log(items[i].textContent); 
}

const card = document.createElement('div');
card.textContent = 'This is a card';
card.innerHTML = '<h3>Title</h3><p>Description</p>';
card.id = 'main-card';
card.setAttribute('data-id', '123'); 

{
    card.style.backgroundColor = 'purple';
    card.style.padding= '20px';
    card.style.margin = '15px';
    /* card.style.border-radius: '5px'; */
    
}
/* const myElementlist = document.getElementById('my-list');
const newItem = document.createElement('li');
newItem.textContent = "First Item";

list.prepend(newItem); */

// const container = document.getElementById('container');
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');

// container.append(div1, div2, "some text");

// const parent = document.getElementById("parent");
const newDiv = document.createElement('div');
parent.appendChild(newDiv);

const mylist = document.getElementById('list');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

// mylist.appendChild(fragment);