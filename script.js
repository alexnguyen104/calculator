const numbers = Array.from(document.getElementsByClassName("num"));
const operator = Array.from(document.getElementsByClassName("operator"));
const screenDown1= document.getElementById("down");
const screenDown2= document.getElementById("down");
const screenUp = document.getElementById("up");
const backspace = document.getElementById("backspace");
const AC = document.getElementById("AC");
let a =0;
//number typing
numbers.forEach(num => num.addEventListener('click', clickNumber));
function clickNumber(){
  let numIndex = numbers.indexOf(this);
  screenDown1.value += numbers[numIndex].innerHTML;
  
}
operator.forEach(operator => operator.addEventListener('click', operatorClick));
function operatorClick(){
  let opeIndex = operator.indexOf(this);
  screenUp.value = Number(screenDown1.value) + operator[opeIndex].innerHTML;
}
backspace.onclick=function(){
  screenDown.value = screenDown.value.substring(0,screenDown.value.length - 1);
}
AC.onclick=function(){
  screenDown.value = "";
  screenUp.value = "";
}



