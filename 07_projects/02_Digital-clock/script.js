let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let clock = document.querySelector('.clock')


 myInterval = setInterval(function(){
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
 }, 1000);

function myClock() {
    clock.innerHTML = date.toLocaleTimeString();
}


// add event listener on start button
startBtn.addEventListener('click', (e) => {
     myInterval = setInterval(function(){
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
 }, 1000);
})

// add event listener on stop button
stopBtn.addEventListener('click', ()=>{
        clearInterval(myInterval);
})