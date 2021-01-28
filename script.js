// your javascript file
const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const blueH3 = document.createElement('h3');
const divBlackBorder = document.createElement('div');
const para2 = document.createElement('p');
const h1 = document.createElement('h1');
const helloButton = document.createElement('button');
const helloButton1 = document.createElement('button');
const helloButton2 = document.createElement('button');
const helloButton3 = document.createElement('button');

content.classList.add('content');
content.textContent = 'Everything inside `"#container` are created with DOM js.';
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
divBlackBorder.appendChild(helloButton1);
divBlackBorder.appendChild(helloButton2);
// divBlackBorder.appendChild(helloButton);
divBlackBorder.appendChild(helloButton3);

helloButton.addEventListener('click', (e) => {
  alert('Hello, World!');
  // e.target.style.background = 'blue';
})

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  if (button.className !== 'btn') {
    button.textContent = 'Press me too!';
  }

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});