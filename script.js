let inputs = [];
let operators1 = ["+", "-", "/", "*", "="];
let operators2 = ["."];
let displayString;
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getValue(input) {
    // //If last input is a '.' and current input is also a '.'
    // if(operators2.includes(inputs[inputs.length-1]) === true && input === "."){
    //     console.log("Duplicate '.' ");
    // } 
    // else if(inputs.length === 0 && operators1.includes(input) === false){
    //     inputs.push(input + "1");
    //     console.log(operators1.includes(input) === false);
    // }
    // else if(operators1.includes(input) === true && operators1.includes(inputs[inputs.length - 1]) === false){
    //     inputs.push(input + "2");
    // }
    // else if(nums.includes(Number(input))){
    //     inputs.push(input + "3");
    // }
    // display();
    // console.log(inputs);

    if (nums.includes(Number(input))) {
        inputs.push(input);
    } else if (operators1.includes(input) === true && inputs.length !== 0 && operators1.includes(inputs[inputs.length - 1]) === false) {
        inputs.push(input);
    } else if (operators2.includes(input) === true && operators2.includes(inputs[inputs.length - 1]) === false) {
        console.log(operators2.includes(inputs[inputs.length - 1]));
        inputs.push(input);
    }
    display();
    console.log(inputs);
}

//To clear all inputs
function allClear() {
    inputs = [];
    display();
}

//To clear last entry
function backOne() {
    inputs.pop();
    display();
}

//To display inputs on the screen
function display() {
    displayString = inputs.join("");
    document.getElementById("display").innerHTML = displayString;
}

//To calculate
function result() {
    if (inputs.length === 0) {
        displayString = "";
    } else {
        displayString = inputs.join("");
        let final = eval(displayString);
        console.log(final);
        document.getElementById("display").innerHTML = final;
        inputs = [];
        inputs.push(final);
    }
}

//when i click a button, it will call getValue() which will push the value of that button into inputs array after validating some conditions. 
//1st cond: operator should not be the first character. 
//2nd cond: no 2 consecutive operators