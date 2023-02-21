let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let delenie= document.getElementById('delenie');
let ymnogenie = document.getElementById('ymnogenie');
let getResult = document.getElementById('result');
let num11 = document.getElementById('num1');
let num22 = document.getElementById('num2');
let outpood = document.querySelector('.realy')

let geyr = 0 
 
plus.addEventListener('click', (event) => {
         
        const a = Number(num11.value)  
        const b = Number(num22.value)
       geyr = a + b
      console.log(geyr);
    
})

minus.addEventListener('click', (event) => {
         
        const a = Number(num11.value)  
        const b = Number(num22.value)
      geyr = a - b
      console.log(geyr);
    
})


delenie.addEventListener('click', (event) => {
         
        const a = Number(num11.value)  
        const b = Number(num22.value)
       geyr = a / b
      console.log(geyr);
    
})

ymnogenie.addEventListener('click', (event) => {
         
        const a = Number(num11.value)  
        const b = Number(num22.value)
       geyr = a * b
      console.log(geyr);
    
})


getResult.addEventListener('click', (event) => {
          outpood.innerHTML = geyr    
})
