const numbers = Array.from(document.getElementsByClassName("num"));
const operator = Array.from(document.getElementsByClassName("operator"));
const equal = document.getElementById("equal").addEventListener('click', equalClick);
const screenDown= document.getElementById("down");
const screenDown1= document.getElementById("down");
const screenUp = document.getElementById("up");
const backspace = document.getElementById("backspace");
const AC = document.getElementById("AC");
//number typing
numbers.forEach(num => num.addEventListener('click', clickNumber));
function clickNumber(){
  let numIndex = numbers.indexOf(this);
  screenDown.value += numbers[numIndex].innerText;
  screenDown.value1 += numbers[numIndex].innerText;
}
operator.forEach(operator => operator.addEventListener('click', operatorClick));
function operatorClick(){
  let opeIndex = operator.indexOf(this);
  if (operator[opeIndex].innerText == "x") {
    operator[opeIndex].innerText = "*"
  }
  screenUp.value = Number(screenDown.value) + operator[opeIndex].innerText;
  screenDown.value ="";
  if(operator[opeIndex].innerText == "*"){
    operator[opeIndex].innerText = "x"
  }
}
function equalClick(){
  screenDown.value = eval(screenUp.value + screenDown.value); 
  screenUp.value = "";
  if(screenDown.value == "Infinity"){
    screenDown.value="CUI BAP"
  }
}
backspace.onclick=function(){
  screenDown.value = screenDown.value.substring(0,screenDown.value.length - 1);
}
AC.onclick=function(){
  screenDown.value = "";
  screenUp.value = "";
}



