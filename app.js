'use strict';
let data1 = {};
 
let  get = function() { fetch('https://api.adviceslip.com/advice') 
.then((response) => {
  return response.json();
})
.then((data1) => {
  document.querySelector('.text-id').textContent = ` ADVICE ID # ${data1.slip.id}`;
  document.querySelector('.advizer-text').textContent = `${data1.slip.advice}`;
})};

get();


const btn  = document.querySelector('.dice').addEventListener('click', ()=> {
  get()
 
  let  diceRandom =  Math.trunc(Math.random() * 5 ) + 1;
  let  diceImg =  document.querySelector('.diceRandom')
  diceImg.src = `http://127.0.0.1:5500/images/dice${diceRandom}.png`
  });
