/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers);

// -------------------------------------------------------------------------------

/* Function Expression - Subtract Numbers */
function substract(number1,number2){
    return number1 - number2;
}

function substractNumbers(){
    let substract1 = Number(document.querySelector('#subtract1').value);
    let substract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(substract1, substract2);
}
document.querySelector('#subtractNumbers').addEventListener('click',substractNumbers);

// -------------------------------------------------------------------------------
/* Arrow Function - Multiply Numbers */

let multiply = (number1,number2) => number1 * number2;

let multiplyNumbers = ()  =>   {
    let multiply1 = Number(document.querySelector('#factor1').value);
    let multiply2 = Number(document.querySelector('#factor2').value);
    return document.querySelector('#product').value = multiply(multiply1,multiply2);
   
}

document.querySelector('#multiplyNumbers').addEventListener('click' ,multiplyNumbers);

// -------------------------------------------------------------------------------
/* Open Function Use - Divide Numbers */

let devide = (number1,number2) => number1 / number2;

let devideNumbers = ()  =>   {
    let devidend1 = Number(document.querySelector('#dividend').value);
    let divisor2 = Number(document.querySelector('#divisor').value);
    return document.querySelector('#quotient').value = devide(devidend1,divisor2);git status
    
   
}

document.querySelector('#divideNumbers').addEventListener('click' ,devideNumbers);


// -------------------------------------------------------------------------------
/* Decision Structure */
const date = new Date();
const year = date.getFullYear() ;


let sum = 0;

document.querySelector('#year').value = year;

// -------------------------------------------------------------------------------
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];


/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let numbersArray_odds = numbersArray.filter( (numbersArray) => (numbersArray % 2)  >  0)
document.querySelector('#odds').innerHTML = numbersArray_odds;

/* Output Evens Only Array */
let numbersArray_evens = numbersArray.filter( (numbersArray) => (numbersArray % 2)  === 0)
document.querySelector('#evens').innerHTML =  numbersArray_evens;

/* Output Sum of Org. Array */
let numbersArray_sum = numbersArray.reduce( (sum, number) => sum + number)
document.querySelector('#sumOfArray').innerHTML =  numbersArray_sum;

/* Output Multiplied by 2 Array */
let numbersArray_multiply = numbersArray.map( (x) => x * 2  );
document.querySelector('#multiplied').innerHTML =  numbersArray_multiply;


/* Output Sum of Multiplied by 2 Array */ 

// I donot think this is what the teacher ask me to do :(
let numbersArray_sumOfMultiplied = numbersArray.map( (x) => x * 2  );
let numbersArray_sumOfMultiplied2 =  numbersArray_sumOfMultiplied.reduce( (sum, number) => sum + number)
document.querySelector('#sumOfMultiplied').innerHTML =  numbersArray_sumOfMultiplied2;
