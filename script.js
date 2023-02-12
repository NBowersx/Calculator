const numbers= document.querySelectorAll('.numbers')
const problem= []



function number(e){
console.log(e.target.textContent)
}

function add(num1,num2) {
    return num1+num2
}
function sub(num1,num2) {
    return num1-num2
}
function mult(num1,num2) {
    return num1*num2
}
function div(num1,num2) {
    return num1/num2
}

function operate(num1, operator, num2){
    if (operator == '+'){
        add(num1,num2)
    }



}
function addListeners(){
    numbers.forEach(numberButton=>
    numberButton.addEventListener('click', number)
)}
addListeners()
