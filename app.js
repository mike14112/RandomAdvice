
let data1 = {};
 
let  get = function() { fetch('https://api.adviceslip.com/advice') 
.then((response) => {
  return response.json();
})
.then((data1) => {
  console.log(data1)
  document.querySelector('.id').innerHTML = ` ADVICE ID # ${data1.slip.id}`;
  document.querySelector('.r-id').innerHTML = `${data1.slip.advice}`;
})}

get()
const btn  = document.querySelector('.btn-advice').addEventListener('click', ()=> get.call(get));