#! /usr/bin/env node
console.log('running shah.calculator14');
import inquirer from "inquirer";
import number from "inquirer/lib/prompts/number.js";
const answer = await inquirer.prompt([
    {message : "enter first number",type : "number", name : "firstNumber"},
   {message : "enter second number", type : "number", name : "secondNumber"},
   { message :"select one operator to perform operation", 
    type : "list",
    name : "operator",
    choices :["addition","subtraction","multiplication","division"],

    }
]);
 if (answer.operator === "addition") { 
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operator === "multiplication") {  
console.log(answer.firstNumber * answer.secondNumber)
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber)
}
 else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber)
}
else  {
    console.log("enter valid option")
};
