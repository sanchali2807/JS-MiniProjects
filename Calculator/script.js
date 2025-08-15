

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
// display.value = eval(display.value);
//can cause an error
try{
    display.value = eval(display.value);
}catch(error){
    display.value = "Error";
}
}