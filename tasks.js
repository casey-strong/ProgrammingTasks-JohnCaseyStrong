//
// Author: John Casey Strong
// All code here is of my own creation without using any online sources with the exception of syntax.
//
// I ran this code with the node runtime, I find that's the easiest way to test them.
// However, feel free to use whatever you like best.
//
// I included a section at the end to print the values each function returns.
// To test different values just change the parameters.
//



//
// String Reversing
//

let ReverseString = (str) => {
  //Declare empty string to concatenate the characters to
  let newStr = "";

  //Work backwords through the word concating each char to newStr as it goes
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  //Return the reversed string
  return newStr;
}



//
// Largest Integer of Three
//

let LargestOfThree = (int1, int2, int3) => {
  //The first condition either identifies the first integer as the largest or tied
  //for largest if true. Including >= instead of just > reduces the comparisons made
  //if the first integer is tied for largest with the second or third.
  if (int1 >= int2 && int1 >= int3) {
    return int1;

    //This second comparison just compares the second and third integers as one of them
    //has to be to the largest integer given the previous condition.
  } else if (int2 > int3) {
    return int2;
  } else {
    return int3;
  }
}



//
// Factorial through Recursion
//

let Factorial = (num) => {
  //Stop the recursion before 1 so it doesn't return zero
  //if it was >= it would have the same result but add an extra multiplication operation
  if (num > 1) {
    return num * Factorial(num - 1);
  } else {
    return 1;
  }
}



//
// Nth Number in Fibonacci Sequence
//

let NFibonacci = (n) => {
  //Declare two numbers to add up the next digit and a temp variable to hold sum while
  //shifting number assignments
  let num1 = 1;
  let num2 = 0;
  let temp = 0;

  //Loop to progress the series until nth number is reached. Start at 1 is just to
  //easier represent what digit of sequence is being calculated.
  for (let i = 1; i <= n; i++) {
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }

  return num2;
}



//
// Testing
//

console.log(ReverseString("Hello."));
//console.log(LargestOfThree(2, 3, 3));
//console.log(Factorial(3));
//console.log(NFibonacci(10));


//
// Final note: I did not build these functions to prevent breaking under strange inputs.
//    I assumed coding style and efficiency were the main focus of this assignment and
//    so I did not include input cleaning. If you would like me to show how I would
//    clean inputs I would be happy to send another coding sample.
//
