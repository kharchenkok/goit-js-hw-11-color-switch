const refs={
    startButton:document.querySelector('[data-action="start"]'),
    stopButton:document.querySelector('[data-action="stop"]'),
    body:document.querySelector('body')
}

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

  // ==============================1ex===========================================================
// let timerId=null

// const startSwitchColor = () => {
//     timerId = setInterval( () => {
//             const currentColor = colors[randomIntegerFromInterval(0,colors.length-1)];
//             refs.body.style.backgroundColor=currentColor;
//             // console.log(currentColor);
//     }, 1000);
//     refs.startButton.removeEventListener('click', startSwitchColor)
    
// };
// const stopSwitchColor = () =>{
//     clearInterval(timerId);
//     refs.startButton.addEventListener('click', startSwitchColor);
// }

//   refs.startButton.addEventListener('click', startSwitchColor);
//   refs.stopButton.addEventListener('click', stopSwitchColor);

// ==============================2ex========================================================
const switchBgColor = {
  timerId:null,
  isActive:false,

  start () {
    if(this.isActive){
      return
    }
    this.isActive=true;
    this.timerId = setInterval(()=>{
        const currentColor = colors[randomIntegerFromInterval(0,colors.length-1)];
        switchColor(currentColor)
    },1000 )
  },

  stop(){
    clearInterval(this.timerId),
    this.timerId=null
    this.isActive=false
    switchColor(colors[0])
  }
}

function switchColor(color){
  refs.body.style.backgroundColor=color;
}

refs.startButton.addEventListener('click', switchBgColor.start.bind(switchBgColor));

refs.stopButton.addEventListener('click', switchBgColor.stop.bind(switchBgColor));