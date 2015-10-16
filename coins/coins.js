/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

// function coinCounter () { // Initialize a JavaScript object to hold the coins var coinPurse = {};

// coinPurse.quarters = 0;

// return coinPurse; }

// var coins = coinCounter(1.41) 
// console.log();


// function (117) {
// 	1) 117/25 = 4
// 	2) 4*25=100
// 	3) 117-100 = 17
// 	4) theNumber = 17
// }



var Quarter = {
	value: 25
}

var Dime = {
	value: 10
}

var Nickel = {
	value: 5
}

var Penny = {
	value: 1
}

var coinValues = [Quarter.value, Dime.value, Nickel.value, Penny.value];

function findTheCoinsBruh(theNumber) {

		var multi_number = theNumber * 100;
		console.log(multi_number);



	for (var i = 0; i < coinValues.length; i++) {

		var numCoin = Math.floor(multi_number / coinValues[i]);

		var amtCalc = numCoin * coinValues[i];

	 	var amntLeftOver = multi_number - amtCalc;

	 	multi_number = amntLeftOver; 


	 	if (i === 0){
	 	 	console.log("the number of quarters is: ", numCoin);
	 	} else if(i === 1){
	 	 	console.log("the number of dimes is: ", numCoin);
	 	} else if(i === 2){
	 	 	console.log("the number of nickels is: ", numCoin);
	 	} else if(i === 3){
	 	 	console.log("the number of nickels is: ", numCoin);
	 	}
	}
}


findTheCoinsBruh(10.17);

















// var Quarter = {
//     value: 25
// }

// var Dime  = {
//     value: 10
// }

// var Nickel = {
//     value: 5
// }

// var Penny = {
//     value: 1
// }

// var coinValues = [25, 10, 5, 1];

// function findTheCoinsBruh(theNumber) {

//         var multi_number = theNumber * 100;
//         console.log(multi_number);

//  for (var i = 0; i < coinValues.length; i++){                    
//         var numCoin = Math.floor(multi_number / coinValues[i]); 
         
//         var amtCalc = numCoin * coinValues[i];

//         var amtLeftOver = multi_number - amtCalc;

//         multi_number = amtLeftOver;

//         if (i === 0){
//             console.log("The Number of Quarters is: ", numCoin);
//         } else if(i === 1){
//             console.log("The Number of Dimes is: ", numCoin);
//         } else if(i === 2){
//             console.log("The Number of Nickels is: ", numCoin);
//         } else if(i === 3){
//             console.log("The Number of Pennies is: ", numCoin);
//         }
//    }

// }

// findTheCoinsBruh(10.74);












