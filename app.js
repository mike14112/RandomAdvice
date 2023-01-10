
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


const btn  = document.querySelector('.dice').addEventListener('click', ()=> get());