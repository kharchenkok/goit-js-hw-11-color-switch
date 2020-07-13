const refs={
    startButton:document.querySelector('[data-action="start"]'),
    stopButton:document.querySelector('[data-action="stop"]'),
    body:document.querySelector('body')
}
// console.log(refs.startButton);
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let timerId=null

const startChngColor = () => {
    timerId = setInterval( () => {
            const currentColor = colors[randomIntegerFromInterval(0,colors.length-1)];
            refs.body.style.backgroundColor=currentColor;
            // console.log(currentColor);
    }, 1000);
    refs.startButton.removeEventListener('click', startChngColor)
    
};
const stopChngColor = () =>{
    clearInterval(timerId);
    refs.startButton.addEventListener('click', startChngColor);
}

  refs.startButton.addEventListener('click', startChngColor);
  refs.stopButton.addEventListener('click', stopChngColor);