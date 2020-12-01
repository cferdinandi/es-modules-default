import getTheAnswer, {add, subtract} from './modules/helpers-alt.js';

// Get two numbers from the user
var num1 = parseFloat(prompt('Enter a number', 0));
var num2 = parseFloat(prompt('Enter another number', 0));

// Get the answer
var answer = getTheAnswer();

// Tell them the total
alert('The answer is always ' + answer);