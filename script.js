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
    if (problem.includes('+')){
        problem =problem.split('+')
        problem[1]= problem[1].replace('=','')
        add(problem)}
    if (problem.includes('-')){
        problem =problem.split('-')
        problem[1]= problem[1].replace('=','')
        sub(problem)}
    if (problem.includes('x')){
         problem =problem.split('x')
        problem[1]= problem[1].replace('=','')
        mult(problem)}
    if (problem.includes('÷')){
         problem =problem.split('÷')
         problem[1]= problem[1].replace('=','')
        div(problem)}

}
}

function add(problem) {
   answer=parseFloat(problem[0])+parseFloat(problem[1])
    showAnswer(answer)
}
function sub(problem) {
    answer=parseFloat(problem[0])-parseFloat(problem[1])
    showAnswer(answer)
}
function mult(problem) {
    answer=parseFloat(problem[0])*parseFloat(problem[1])
    console.log(answer)
    showAnswer(answer)
}
function div(problem) {
    answer=parseFloat(problem[0])/parseFloat(problem[1])
    showAnswer(answer)
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
 

