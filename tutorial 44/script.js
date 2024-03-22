var equation=document.querySelector(".calculator input")

function button(value){
    equation.value+=value
}
function equate(){
    equation.value=eval(equation.value)
}