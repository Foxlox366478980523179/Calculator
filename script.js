//calculator programm

const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
  console.log("clicked");
}

function clearDisplay(){
  display.value ="";
}

function clearDisplay(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}