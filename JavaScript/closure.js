//example: 1
function createCalculateTax(tax){
    function calcTax(amount){
    return amount * tax;
    }
  return calcTax;
}

const vattaxCalculator = createCalculateTax(.19);
const incomeTaxCalc = createCalculateTax(.25);


//example: 2
function produceMultiplier(multiplier){
    function multiply(amount){
        return amount * multiplier;
    }
    return multiply;
}

const fiveTimes = produceMultiplier(5);
const tenTimes = produceMultiplier(10);

//you can use as a function
console.log(fiveTimes(15));
console.log(vattaxCalculator(15));


//laxicalScope

let userName = "Kishan";

function greet(){
console.log(`Wellcome `+ userName);
}

userName = "kishan Singh"

greet();

