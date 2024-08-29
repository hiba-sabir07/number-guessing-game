#! /usr/bin/env node 

import inquirer from "inquirer";

const SystemGeneratedNumber = Math.floor(Math.random() * 10);

const answer :{

    UserGuessedNumber:number,
} = await inquirer.prompt([
    {
        message:"Enter your guessed number 1-10:",
        type:"number",
        name:"UserGuess"
    }
]);
console.log(answer);

//Conditional Statement
if (answer.UserGuessedNumber === SystemGeneratedNumber ){
     console.log("CONGRATS! you have guessed the right number.");
}
else{
    console.log("OOPS! You have guessed the wrong number");
}
    