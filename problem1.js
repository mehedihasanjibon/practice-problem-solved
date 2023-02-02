//  Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return 
// Input :
// The first line of the input is the Harry's mom gave him.
// The second line is the cost of 1kg of oranges and 1 kg of apples 

// output: 
// print the result. 
// sample Input: 1000;
// 700
// output: 300;




var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var getBack = moneyGiven - totalPrice;
console.log(getBack);