#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 4321;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter the amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    }
  } else if (operationAns.operation === "fast cash") {
    let fast = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Select the amount you want to withdraw",
        type: "list",
        choices: ["2000", "5000", "7000", "10000"],
      },
    ]);
    myBalance -= fast.fastCash;
    console.log(
      `You have successfully withdrawn ${fast.fastCash}. Your remaining balance is ${myBalance}`
    );
  } else if (operationAns.operation === "check balance") {
    console.log("Your balance is: " + myBalance);
  }
} else {
  console.log("Incorrect pin code");
}
