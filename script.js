const numbers= document.querySelectorAll('.numbers')
const operators= document.querySelectorAll('.operators')
const display= document.getElementById('display')
const clear= document.getElementById('clear')
const back= document.getElementById('back')
const last= document.getElementById('last')


let problem= ''
let equation=''
let answer=''
let ops =['+','-','x','÷']
let series =''
let check = ''
let n= 0

function number(e){
problem += e.target.textContent
show(problem) 

    //stops using operators back to back
   if (ops.includes(e.target.textContent)){
     check = problem.slice(-2)
     console.log(check.charAt(0))
    if(ops.includes(check.charAt(0))){
    n = problem.length-2
    problem=problem.replace(problem.charAt(n),'')
    show(problem)
    }

    }
if (e.target.textContent == "="){
    //might want to make this its own function also cut the repetitive code
    
 

    //checks for no operators 
     if(!problem.includes(operators)){
        equation=problem
        problem= problem.replace('=','')
        answer=problem
        showAnswer(answer,equation)
    }
    if (problem.includes('+')){
        equation=problem
        problem =problem.split('+')
        problem[1]= problem[1].replace('=','')
        add(problem,equation)
    }
    if (problem.includes('-')){
        problem =problem.split('-')
        problem[1]= problem[1].replace('=','')
        sub(problem)
    }
    if (problem.includes('x')){

        problem =problem.split('x')
        problem[1]= problem[1].replace('=','')
        series = problem
        
        mult(problem)
    }
    if (problem.includes('÷')){
         problem =problem.split('÷') 
         problem[1]= problem[1].replace('=','')
         if (problem[1]== 0){
            answer='dont divide by 0 buddy'
            showAnswer(answer)
    }
         else
        
        div(problem)}
}
}

function add(problem) {
   answer=parseFloat(problem[0])+parseFloat(problem[1])
    showAnswer(answer,equation)
}
function sub(problem) {
    answer=parseFloat(problem[0])-parseFloat(problem[1])
    showAnswer(answer)
}
function mult(problem) {
    answer=parseFloat(problem[0])*parseFloat(problem[1])
    showAnswer(answer)
}
function div(problem) {
    answer=parseFloat(problem[0])/parseFloat(problem[1])
    showAnswer(answer)
}

function clearScreen(){
    problem=[]
    answer=[]
    show()
}


function addListeners(){
    document.addEventListener('keydown', e =>{
        const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        if (key) {
          e.preventDefault();
          key.click();
        }})
    


    numbers.forEach(numberButton=>
    numberButton.addEventListener('click', number))

    operators.forEach(operatorButton=>
    operatorButton.addEventListener('click', number))

    clear.addEventListener('click',clearScreen);
}
function show(){
  display.innerHTML = problem  
}
function showAnswer(){
    display.innerHTML = answer
    last.innerHTML = equation.replace('=','')
    return problem = answer
}
addListeners()
 

