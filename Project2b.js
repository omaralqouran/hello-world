/**
 *   @author Al-Qouran (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 Insurance company code || created: 09.27.2016
 *   @todo
 */
"use strict";
const PROMPT = require('readline-sync');
const CURRENT_YEAR = 2016;

let continueResponse;
let lastName, firstName, birthMonth;
let birthDay, birthYear, policyNumber,totalAccidents, premiumDueDay, premiumDueMonth, premiumDueYear, customerAge, accidentNumbers, totalCost;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setFirstName();
        setLastName();
        setPolicyNumber();
        setBirthDay();
        setBirthMonth();
        setBirthYear();
        setTotalAccidents();
        calculateCustomerAge();
        setPremiumDueDay();
        setPremiumDueMonth();
        setPremiumDueYear();
        calculateTotalCost();
        printTotalCost();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}
main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question('\nDo you wish to continue? [0=no, 1=yes]: '));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

function setFirstName() {
    firstName = PROMPT.question('\nWhat is your first name: ');
}

function setLastName() {
    lastName = PROMPT.question('\nWhat is your last name: ');
}

function setBirthDay() {
    const MAX_BIRTH_DAY = 31;
    birthDay = Number(PROMPT.question('\nPlease enter the day in which you were born? In the format of a number 1-31: '));
    if (birthDay <= 1 || birthDay >= MAX_BIRTH_DAY) {
        console.log(`${birthDay} is an incorrect value. Please try again.`);
        return setBirthDay();
    }
}

function setBirthMonth() {
    const MAX_BIRTH_MONTH = 12;
    birthMonth = Number(PROMPT.question('\nWhat is the month were you born in? Please enter in the format of a number: '));
    if (birthMonth<= 1 || birthMonth >= MAX_BIRTH_MONTH) {
        console.log(`${birthMonth} is an incorrect value. Please try again.`);
        return setBirthMonth();
    }
}

function setBirthYear() {
    const CURRENT_MAX_BIRTH_YEAR = 2002;
    birthYear = Number(PROMPT.question('\nWhat is your birth year?: '));
    if (birthYear <= 1925 || birthYear >= CURRENT_MAX_BIRTH_YEAR ) {
        console.log(`${birthYear} is an incorrect value. Please try again.`);
        return setBirthYear();
    }
}

function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 1000) + 1);
}

function setTotalAccidents() {
    totalAccidents = Number(PROMPT.question('\nHow many accidents have you been that were at-fault? '));
}

function calculateCustomerAge() {
    customerAge = (CURRENT_YEAR - birthYear);
}

function setPremiumDueDay() {
    (premiumDueDay = birthDay);
}

function setPremiumDueMonth() {
    (premiumDueMonth = birthMonth);
}

function setPremiumDueYear() {
    premiumDueYear = (CURRENT_YEAR + 1)
}

function calculateTotalCost() {
    const MID_AGE = 30,
        OLD_AGE_MIN = 45,
        OLD_AGE_MAX = 120,
        YOUNG_AGE_MIN = 15,
        YOUNG_FEE = 20,
        MIDDLE_FEE = 10,
        ELDERLY_FEE = 30,
        BASE_PRICE = 100,
        FAULT_ACCIDENTS = 50;
    if (customerAge > YOUNG_AGE_MIN && customerAge < MID_AGE){
        totalCost = YOUNG_FEE + BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
    else if (customerAge >= MID_AGE && customerAge < OLD_AGE_MIN) {
        totalCost = MIDDLE_FEE + BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
    else if (customerAge >= OLD_AGE_MIN && customerAge < OLD_AGE_MAX) {
        totalCost = ELDERLY_FEE + BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
    else {
        totalCost = BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
}

function printTotalCost(){
    process.stdout.write('\x1Bc');
    console.log(firstName + ' ' + lastName +  ' has a policy number of ' + policyNumber +' and your insurance bill will be $'
        + totalCost +' and your premium due date is due on ' + premiumDueDay +',' + premiumDueMonth +','+ premiumDueYear);
}

function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log(`\nWe thank you for your service.`);
}
