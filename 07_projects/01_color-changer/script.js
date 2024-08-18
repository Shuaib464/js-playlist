let wrapper = document.querySelector('.wrapper')
let buttons = document.querySelectorAll('.box')

let para = document.querySelector('#para')
                
const myPara = `Try clicking on one of the colors
           above           
           to change the background 
           color of this page!`;
para.innerText = myPara;


wrapper.addEventListener('click', (e) => {
    wrapper.style.backgroundColor = "rgb(243, 233, 221)";
})



//add event listener to each box
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        wrapper.style.backgroundColor = e.target.id;
        e.stopPropagation();
    })
})