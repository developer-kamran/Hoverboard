const container = document.querySelector('.container');
// const color = ['hotpink', 'red', '#fff', '#777', 'yellow', 'green', 'steelblue']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const SQUARES = 500;
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.addEventListener('mouseover', () => {
    // setColor(square)
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomColor()];
      console.log(hexColor);
    }
    square.style.background = hexColor;
    square.style.boxShadow = ` 0 0 2px ${hexColor}, 0 0 10px ${hexColor}`;
  });
  square.addEventListener('mouseout', () => {
    // removeColor(square)
    square.style.background = '#1d1d1d';
    square.style.boxShadow = ` 0 0 2px #000, 0 0 10px #000`;
  });
}

function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}

// function setColor(element) {
// const color = getRandomColor()
// element.style.background = color
// element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
// }

// function removeColor(element) {
// element.style.background = '#1d1d1d'
// element.style.boxShadow = ` 0 0 2px #000, 0 0 10px #000`
// }
