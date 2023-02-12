const numbers= document.querySelectorAll('.numbers')
const operators= document.querySelectorAll('.operators')
const display= document.getElementById('display')
let problem= []
let answer=[]



function number(e){
console.log(e.target.textContent)
problem += e.target.textContent
show(problem)
if (e.target.textContent == "="){
    problem =problem.split('+')
    problem[1]= problem[1].replace('=','')
    add(problem)

}
}

function add(problem) {
   answer=parseFloat(problem[0])+parseFloat(problem[1])
    showAnswer(answer)
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
    numberButton.addEventListener('click', number))
    operators.forEach(operatorButton=>
       operatorButton.addEventListener('click', number)
)}
function show(){
  display.innerHTML = problem
}
function showAnswer(){
    display.innerHTML = answer
    
}
addListeners()
 

