
// ========================
// 1. GET ELEMENTS (ONLY ONCE)
// ========================
const button = document.getElementById("submit-btn");
const container = document.getElementById("myTest");
const parent = document.getElementById("parent");
const myList = document.getElementById("list");

// ========================
// 2. LOOP THROUGH ELEMENTS
// ========================
const items = document.getElementsByClassName("text");

for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
}

// ========================
// 3. CREATE CARD ELEMENT
// ========================
const card = document.createElement("div");
card.id = "main-card";
card.setAttribute("data-id", "123");

// IMPORTANT: only use innerHTML OR textContent (not both)
card.innerHTML = `
    <h3>Title</h3>
    <p>Description</p>
`;

card.style.backgroundColor = "purple";
card.style.padding = "20px";
card.style.margin = "15px";

document.body.appendChild(card);

// ========================
// 4. APPEND NEW DIV TO PARENT
// ========================
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div added to the parent.";
parent.appendChild(newDiv);

// ========================
// 5. DOCUMENT FRAGMENT (100 ITEMS)
// ========================
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

myList.appendChild(fragment);

console.log("DOM script fully loaded and working!");

alert("SBA script is working!");

// ========================
// 6. DOM TRAVERSAL ON CLICK (UPDATED - MORE VISIBLE)
// ========================

button.addEventListener("click", () => {

    const paragraphs = container.getElementsByClassName("text");

    paragraphs[0].style.backgroundColor = "yellow";
    paragraphs[1].style.backgroundColor = "orange";
    paragraphs[2].style.backgroundColor = "lightgreen";

    paragraphs[1].style.fontWeight = "bold";

    // ✅ ADD THIS (Traversal requirement)
    const firstChild = container.firstElementChild;
    const parentElement = firstChild.parentElement;
    parentElement.style.border = "3px solid blue";

});


// button.addEventListener("click", () => {

//     const paragraphs = container.getElementsByClassName("text");

//     paragraphs[0].style.backgroundColor = "yellow";
//     paragraphs[1].style.backgroundColor = "orange";
//     paragraphs[2].style.backgroundColor = "lightgreen";

//     paragraphs[1].style.fontWeight = "bold";

//     container.style.border = "3px solid blue";
// });






// // ========================
// // 6. DOM TRAVERSAL ON CLICK
// // ========================
// button.addEventListener("click", () => {

//     const firstChild = container.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";

//     const secondChild = firstChild.nextElementSibling;
//     if (secondChild) {
//         secondChild.style.fontWeight = "bold";
//     }

//     container.style.border = "3px solid blue";
// });

// // Get button and container elements
// const button = document.getElementById("submit-btn");
// const container = document.getElementById("myTest");
// const parent = document.getElementById('parent');
// const mylist = document.getElementById('list');

// // 1. ITERATION: Loop through DOM Collection
// const items = document.getElementsByClassName('text');
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i].textContent); // Logs the text content of each paragraph
// }

// // 2. Create and style a new card element
// const card = document.createElement('div');
// card.textContent = 'This is a card';
// card.innerHTML = '<h3>Title</h3><p>Description</p>';
// card.id = 'main-card';
// card.setAttribute('data-id', '123');

// // Apply styles
// card.style.backgroundColor = 'purple';
// card.style.padding = '20px';
// card.style.margin = '15px';
// document.body.appendChild(card);  // Append the card to the body

// // 3. APPEND a new div to the parent
// const parent = document.getElementById('parent');
// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div added to the parent.';
// parent.appendChild(newDiv);  // Append the new div to the parent

// // 4. USING DocumentFragment: Add 100 items to the list
// const mylist = document.getElementById('list');
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 100; i++) {
//     const li = document.createElement('li');
//     li.textContent = `Item ${i}`;
//     fragment.appendChild(li);
// }

// // Append the fragment to the list
// mylist.appendChild(fragment);

// // 5. PARENT-CHILD-SIBLING traversal + styling
// const button = document.getElementById('submit-btn');  // Get button to trigger actions
// const container = document.getElementById('myTest');  // Get the container for parent-child

// button.addEventListener('click', () => {
//     const firstChild = container.firstElementChild;  // Get the first child element
//     firstChild.style.backgroundColor = 'yellow';  // Change the background color of first child
    
//     const secondChild = firstChild.nextElementSibling;  // Get the second child element
//     if (secondChild) {
//         secondChild.style.fontWeight = 'bold';  // Make the second child bold
//     }
    
//     const parentElement = firstChild.parentElement;  // Get the parent element
//     parentElement.style.border = '3px solid blue';  // Add a border to the parent element
// });

// // Iteration over elements with class 'item'
// const items = document.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i].textContent); 
// }

// const card = document.createElement('div');
// card.textContent = 'This is a card';
// card.innerHTML = '<h3>Title</h3><p>Description</p>';
// card.id = 'main-card';
// card.setAttribute('data-id', '123');

// // Apply styles directly to the card
// card.style.backgroundColor = 'purple';
// card.style.padding = '20px';
// card.style.margin = '15px';
// // Uncomment to apply border-radius
// // card.style.borderRadius = '5px';

// document.body.appendChild(card);  // Append the card to the body

// // // Create and style card
// // const card = document.createElement('div');
// // card.textContent = 'This is a card';
// // card.innerHTML = '<h3>Title</h3><p>Description</p>';
// // card.id = 'main-card';
// // card.setAttribute('data-id', '123');
// // card.style.backgroundColor = 'purple';
// // card.style.padding = '20px';
// // card.style.margin = '15px';
// // // card.style.borderRadius = '5px'; // Uncomment to apply border-radius
// // document.body.appendChild(card);

// // Appending new div to parent element
// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div added to the parent.';
// parent.appendChild(newDiv);

// const mylist = document.getElementById('list'); // Ensure list exists
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 100; i++) {
//     const li = document.createElement('li');
//     li.textContent = `Item ${i}`;
//     fragment.appendChild(li);
// }

// // Append the fragment to the list after all items are added
// mylist.appendChild(fragment);

// // // Create and append 100 items to the list using DocumentFragment
// // const fragment = document.createDocumentFragment();
// // for (let i = 0; i < 100; i++) {
// //     const li = document.createElement('li');
// //     li.textContent = `Item ${i}`;
// //     fragment.appendChild(li);
// // }
// // mylist.appendChild(fragment);

// const button = document.getElementById("submit-btn");  // Get the button
// const container = document.getElementById("myTest");  // Get the container

// // Add an event listener to the button
// button.addEventListener("click", () => {
//     // Parent-child-sibling traversal example
//     const firstChild = container.firstElementChild;  // Get the first child
//     firstChild.style.backgroundColor = 'yellow';  // Change background color of first child
    
//     const secondChild = firstChild.nextElementSibling;  // Get the next sibling (second child)
//     if (secondChild) {
//         secondChild.style.fontWeight = 'bold';  // Make second child bold
//     }
    
//     const parentElement = firstChild.parentElement;  // Get the parent element
//     parentElement.style.border = '3px solid blue';  // Add a blue border to the parent element
// });

// // // Add event listener to button for DOM traversal and style changes
// // button.addEventListener("click", () => {
// //     // Parent-child-sibling traversal example
// //     const firstChild = container.firstElementChild;
// //     firstChild.style.backgroundColor = 'yellow'; // Change background of first child
    
// //     const secondChild = firstChild.nextElementSibling;
// //     if (secondChild) {
// //         secondChild.style.fontWeight = 'bold'; // Make second child bold
// //     }

//     const parent = document.getElementById('parent'); // Ensure the parent exists
// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div added to the parent.';
// parent.appendChild(newDiv);  // Append the new div to the parent
    
// //     const parentElement = firstChild.parentElement;
// //     parentElement.style.border = '3px solid blue'; // Add border to the parent
// // });

// // const firstElement=document.querySelector(".myFamily");
// // const mainTitle = document.querySelector("#mainTitle");
// // const specificInput = document.querySelector("div.user-panel input");
// // const allItems = document.querySelectorAll(".tem");
// // const allParagraphs = document.querySelectorAll("p");
// // const notesAnaAlerts = document.querySelectorAll("div.note,div.alert");

// const list = document.querySelector("#list");
// const parent = document.getElementById('parent');
// parent.firstElementChild.style.color = "red";
// console.log(parent);

// const first = parent.firstChild;
// console.log(first);
// // const next = secondChild.nextSibling.nextElementSibling;
// // =parent.secondChild;
// // const secondElement = first.nextElementSibling;
// // console.log(secondChild);
// // console.log(secondElement);
// // const nav = document.querySelector
// const second = parent.secondChild;
// // console.log(second);

// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// function setBackgroundColor(id) {
//   log.textContent = "";

//   try {
//     const elements = document.querySelectorAll(`#${id}`);
//     const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     elements[0].style.backgroundColor = randomColor;
//   } catch (e) {
//     list.textContent = e;
//   }
// }

// /* document.querySelector("#no-escape").addEventListener("click", () => {
//   setBackgroundColor("myElement");
// });

// document.querySelector("#css-escape").addEventListener("click", () => {
//   setBackgroundColor(CSS.escape("myElement"));
// });

// document.querySelector("#manual-escape").addEventListener("click", () => {
//   setBackgroundColor("myElement");
// }); */

// /* for loop
// const elements = document.querySelector('.item.GetElementsByID'); */

// /* forEach with HTMLCollection */

// // const items = document.getElementsByClassName('item');

// // for (let i = 0; i < document.querySelector.getElementByClassName; i++) {
// // console.log(items[i].textContent); 
// // }

// const items = document.getElementsByClassName('item');

// // Iterate over the collection and log textContent of each item
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i].textContent); 
// }

// const card = document.createElement('div');
// card.textContent = 'This is a card';
// card.innerHTML = '<h3>Title</h3><p>Description</p>';
// card.id = 'main-card';
// card.setAttribute('data-id', '123');

// // Apply styles directly to the element
// card.style.backgroundColor = 'purple';
// card.style.padding = '20px';
// card.style.margin = '15px';
// // card.style.borderRadius = '5px'; // Uncomment to apply border-radius

// // Append the card to the body or a container
// document.body.appendChild(card);

// // const card = document.createElement('div');
// // card.textContent = 'This is a card';
// // card.innerHTML = '<h3>Title</h3><p>Description</p>';
// // card.id = 'main-card';
// // card.setAttribute('data-id', '123'); 

// // {
// //     card.style.backgroundColor = 'purple';
// //     card.style.padding= '20px';
// //     card.style.margin = '15px';
// //     /* card.style.border-radius: '5px'; */
    

// /* const myElementlist = document.getElementById('my-list');
// const newItem = document.createElement('li');
// newItem.textContent = "First Item";

// list.prepend(newItem); */

// // const container = document.getElementById('container');
// // const div1 = document.createElement('div');
// // const div2 = document.createElement('div');

// // container.append(div1, div2, "some text");

// // // const parent = document.getElementById("parent");
// // const newDiv = document.createElement('div');
// // parent.appendChild(newDiv);

// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div added to the parent.';
// parent.appendChild(newDiv);

// // Make sure parent is already defined (otherwise, use the correct selector to target it)
// const parent = document.getElementById('parent');

// const mylist = document.getElementById('list');
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 100; i++) {
//     const li = document.createElement('li');
//     li.textContent = `Item ${i}`;
//     fragment.appendChild(li);
// }

// // Append the fragment to the list
// mylist.appendChild(fragment);

// const button = document.getElementById("submit-btn");
// const container = document.getElementById("myTest");

// // Use traversal and apply styles when button is clicked
// button.addEventListener("click", () => {
//     // Parent-child-sibling traversal example
//     const firstChild = container.firstElementChild;
//     firstChild.style.backgroundColor = 'yellow'; // Change the background color of the first child
    
//     const secondChild = firstChild.nextElementSibling;
//     if (secondChild) {
//         secondChild.style.fontWeight = 'bold'; // Make the second child bold
//     }
    
//     const parentElement = firstChild.parentElement;
//     parentElement.style.border = '3px solid blue'; // Change the parent's border
// });

// // const mylist = document.getElementById('list');
// // const fragment = document.createDocumentFragment();

// // for (let i = 0; i < 100; i++) {
// //     const li = document.createElement('li');
// //     li.textContent = `Item ${i}`;
// //     fragment.appendChild(li);
// // }

// // mylist.appendChild(fragment);