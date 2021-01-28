// your javascript file
const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const blueH3 = document.createElement('h3');
const divBlackBorder = document.createElement('div');
const para2 = document.createElement('p');
const h1 = document.createElement('h1');
const helloButton = document.createElement('button');

content.classList.add('content');
content.textContent = 'This document is created with DOM. This black text is in a DIV.';
para.style.color = 'red';
para.textContent = 'Hi, I\'m red! I have my own `<p>`.';
blueH3.style.color = 'blue';
blueH3.textContent = 'I\'m blue H3!';
divBlackBorder.style.border = "solid black 2px";
para2.textContent = 'Me too!';
h1.textContent = 'I\'m in a DIV with a black border.'
helloButton.classList.add('btn');
helloButton.textContent = 'Click me!';

container.appendChild(content);
content.appendChild(para);
content.appendChild(blueH3);
content.appendChild(divBlackBorder);
divBlackBorder.appendChild(h1);
divBlackBorder.appendChild(helloButton);
divBlackBorder.appendChild(para2);

helloButton.addEventListener('click', (e) => {
  alert('Hello, World!');
  e.target.style.background = 'blue';
})