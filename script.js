const numbers = Array.from(document.getElementsByClassName("num"));
const screenDown= document.getElementById("down");
const screenUp= document.getElementById("up");
let numDown = [];

numbers.forEach(num => num.addEventListener('click', clickNumber));
function clickNumber(){
  let numIndex = numbers.indexOf(this);
  numDown.push(Number(numbers[numIndex].innerHTML))
  screenDown.innerHTML=String(numDown);
  console.log(screenDown.innerHTML)
}

