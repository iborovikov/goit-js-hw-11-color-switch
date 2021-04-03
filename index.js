const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const buttonsRef = document.querySelectorAll('button');
const startBtnRef = buttonsRef[0];
const stopBtnRef = buttonsRef[1];
let isActive = false;

startBtnRef.addEventListener('click', setRandomColor);

function setRandomColor() {
  
  if (!isActive) {
    const timeoutId = setInterval(() => {
      isActive = true;
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const randomColor = colors[randomIntegerFromInterval(0, 5)];
      bodyRef.style.backgroundColor = randomColor;
    }, 1000);

    stopBtnRef.addEventListener('click', stopColors);
    function stopColors() {
      clearInterval(timeoutId);
      isActive = false;
    };
  };
};


