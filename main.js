//1
var integerVar = 10;
var charVar = 'A';
var floatVar = 3.14;
var doubleVar = 283.333;
var booleanVar = true;
console.log("Integer:" + integerVar);
console.log("Character:" + charVar);
console.log("Float:" + floatVar);
console.log("Double:" + doubleVar);
console.log("Boolean:" + booleanVar);

//2
console.log("Hello,World!");

//3
var num1 = 4;
var num2 = 9;
var sum = num1 + num2;
console.log("Sum of " + num1 + "and" + num2 + "is:" + sum);

//4
var num1 = 99;
var num2 = 9;
var difference = num1 - num2;
console.log("Difference between " + num1 + "and" + num2 + "is:" + difference);

//5
var number = 5;
var cube = Math.pow(number, 3);
console.log("Cube of " + number + "is:" + cube);

//6
function swapNumbers(c, d) {
    let temp = c;
    c = d;
    d = temp;
    return [c, d];
}
let a = 55;
let b = 2;
console.log("Before swapping:a=", a, ",b=", b);
[a, b] = swapNumbers(a, b);
console.log("After swapping:a=", a, ",b=", b);

//7
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const result = factorial(6);
console.log("factorial of 6 is:", result);

//8
function findLargestNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
const c = 32;
const d = 7;
const largestNumber = findLargestNumber(c, d);
console.log("The Largest number is:", largestNumber);

//9
function findLargestNumber1(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
const x = 32;
const y = 7;
const z = 43;
const largestNumber1 = findLargestNumber1(x, y, z);
console.log("The Largest number is:", largestNumber1);

//10
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const num = 10;
if (isEven(num)) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}

//11
function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
const num3 = 43;
if (isOdd(num3)) {
    console.log(num3 + " is an odd number.");
} else {
    console.log(num3 + " is an even number.");
}

//12
function isDivisibleByTwoAndFive(number) {
    if (number % 2 === 0) {
        if (number % 5 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
const num4 = 10;
if (isDivisibleByTwoAndFive(num)) {
    console.log(num + " is divisible by both 2 and 5.");
} else {
    console.log(num + " is not divisible by both 2 and 5.");
}

//13
function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;
    const n = String(number).length;
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }
    return number === sum;
}
const P = 153;
if (isArmstrongNumber(P)) {
    console.log(P + " is an Armstrong number.");
} else {
    console.log(P + " is not an Armstrong number.");
}




//14---loops
function isPalindrome(number) {
    let originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

let inputNumber = 120;
if (isPalindrome(inputNumber)) {
    console.log(`${inputNumber} is a palindrome.`);
} else {
    console.log(`${inputNumber} is not a palindrome.`);
}

//15
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
const testNumber = 19;
if (isPrime(testNumber)) {
    console.log(testNumber + ' is a prime number.');
} else {
    console.log(testNumber + ' is not a prime number.');
}

//16
function reverseNumber(inputNumber) {
    let reversedNumber = 0;
    while (inputNumber !== 0) {
        let digit = inputNumber % 10;
        reversedNumber = reversedNumber * 10 + digit;
        inputNumber = Math.floor(inputNumber / 10);
    }
    return reversedNumber;
}
const originalNumber = 6730875;
const reversed = reverseNumber(originalNumber);
console.log('Original Number:', originalNumber);
console.log('Reversed Number:', reversed);

//17
function numberToWords(number) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function convertTwoDigit(num) {
        if (num < 10) {
            return units[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const ten = Math.floor(num / 10);
            const unit = num % 10;
            return tens[ten] + ' ' + units[unit];
        }
    }
    function convertThreeDigit(num) {
        const hundred = Math.floor(num / 100);
        const twoDigit = num % 100;

        let result = '';
        if (hundred > 0) {
            result += units[hundred] + ' Hundred';
        }

        if (twoDigit > 0) {
            if (result !== '') {
                result += ' and ';
            }
            result += convertTwoDigit(twoDigit);
        }

        return result;
    }

    if (number === 0) {
        return 'Zero';
    }
    const thousand = Math.floor((number % 1000000) / 1000);
    const remainder = number % 1000;

    let result = '';

    if (thousand > 0) {
        if (result !== '') {
            result += ' ';
        }
        result += convertThreeDigit(thousand) + ' Thousand';
    }

    if (remainder > 0) {
        if (result !== '') {
            result += ' ';
        }
        result += convertThreeDigit(remainder);
    }

    return result;
}
const testNum = 5678;
const words = numberToWords(testNum);
console.log(words);

//18
function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}
const originalString = "Ayesha Nihala";
const revers = reverseString(originalString);
console.log('Original String:', originalString);
console.log('Reversed String:', revers);

//19
function fibonacciSeries(n) {
    let fibSeries = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    return fibSeries;
}

const n = 12;
const fibonacciResult = fibonacciSeries(n);
console.log(`Fibonacci series up to ${n} numbers: ${fibonacciResult.join(', ')}`);



//20 floyds triangle

//21
function findFactorial(number) {

    if (Number.isInteger(number) && number >= 0) {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        return factorial;
    } else {
        return "Invalid input. Please provide a non-negative integer.";
    }
}
const userInput = 5;
const output = findFactorial(userInput);

console.log(`The factorial of ${userInput} is: ${output}`);

//22
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpToLimit(limit) {
    if (Number.isInteger(limit) && limit > 1) {
        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                console.log(i);
            }
        }
    } else {
        console.log("Invalid input. Please provide a positive integer greater than 1.");
    }
}
const userLimit = 15;
printPrimesUpToLimit(userLimit);

//23--multiplication
function printMultiplicationTable(number) {
    if (Number.isInteger(number) && number > 0) {
        console.log(`Multiplication table for ${number}:`);
        for (let i = 1; i <= 10; i++) {
            const result = number * i;
            console.log(`${number} x ${i} = ${result}`);
        }
    } else {
        console.log("Invalid input. Please provide a positive integer.");
    }
}
const userNumber = 6;
printMultiplicationTable(userNumber);

//24--sum of 10 num
//function findSumOfNumbers() {
//  let sum = 0;
//for (let i = 1; i <= 3; i++) {
//  const userInput = parseFloat(prompt(`Enter number ${i}:`));
//if (!isNaN(userInput)) {
//  sum += userInput;
//} else {
//  console.log(`Invalid input for number ${i}. Please enter a valid number.`);
//i--;
//}
//}

//return sum;
//}
//const out = findSumOfNumbers();
//console.log(`The sum of 3 numbers is: ${out}`);

//25--print days of week using switch
function printDayOfWeek(dayNumber) {
    let day;

    switch (dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }

    console.log(`Day ${dayNumber}: ${day}`);
}
const dayNumber = 6;
printDayOfWeek(dayNumber);

//26--string is palindrome or not


//27--ARRAYS--accept 10 elements in arry with and without for loop
//function acceptElementsWithoutForLoop() {
//  const array = [];

//let i = 0;
//while (i < 10) {
//  const userInput = parseFloat(prompt(`Enter element ${i + 1}:`));

//if (!isNaN(userInput)) {
//  array.push(userInput);
//i++;
//} else {
//    console.log(`Invalid input for element ${i + 1}. Please enter a valid number.`);
//}
//}

//return array;
//}
//const elementsArrayWithoutForLoop = acceptElementsWithoutForLoop();
//console.log("Array without for loop:", elementsArrayWithoutForLoop);


//28--reverse of an array
function reverseArray(inputArray) {
    const reversedArray = inputArray.slice().reverse();
    return reversedArray;
}
const originalArray = [0, 8, 3, 4, 9];
const reversedArray = reverseArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);

//29--sum of elements in array
function findSumOfArrayElements(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum;
}
const sampleArray = [1, 1, 1, 7, 0];
const resul = findSumOfArrayElements(sampleArray);

console.log("Array:", sampleArray);
console.log("Sum of Array Elements:", resul);

//30--addition of two arrays
function addArrays(array1, array2) {
    if (array1.length !== array2.length) {
      console.log("Arrays must have the same length for addition.");
      return null;
    }
    const sumArray = [];
    for (let i = 0; i < array1.length; i++) {
      sumArray.push(array1[i] + array2[i]);
    }
  
    return sumArray;
  }
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 0];
  
  const resultArray = addArrays(array1, array2);
  
  if (resultArray) {
    console.log("Array 1:", array1);
    console.log("Array 2:", array2);
    console.log("Sum of Arrays:", resultArray);
  }

  //31--largest element in an array
  function findLargestElement(inputArray) {
    if (inputArray.length === 0) {
      console.log("Array is empty.");
      return null;
    }
    let largest = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
      if (inputArray[i] > largest) {
        largest = inputArray[i];
      }
    }
  
    return largest;
  }
  const sampleArra = [2, 7, 1, 9, 5, 12];
  const result1 = findLargestElement(sampleArra);
  
  if (result !== null) {
    console.log("Array:", sampleArra);
    console.log("Largest Element:", result1);
  }
  
  //32--sort array in ascenting order
  function sortArrayAscending(inputArray) {
    const sortedArray = inputArray.slice().sort(function(a, b) {
      return a - b;
    });
  
    return sortedArray;
  }
  const unsortedArray = [5, 2, 9, 1, 0];
  const sortedArray = sortArrayAscending(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array (Ascending):", sortedArray);
  

  //33--search element in array
  function searchElementUsingIncludes(inputArray, target) {
    const isFound = inputArray.includes(target);
    if (isFound) {
      return `Element ${target} found in the array.`;
    } else {
      return `Element ${target} not found in the array.`;
    }
  }
  const sampleArrays = [3, 7, 1, 9, 5, 2];
  const targetElement = 6;
  
  const resultIncludes = searchElementUsingIncludes(sampleArrays, targetElement);
  console.log(resultIncludes);

  //34--enter two array and check if two array are same or not
  function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }

  const arra1 = [1, 2, 3, 4, 5];
  const arra2 = [1, 2, 3, 4, 5];
  const arra3 = [1, 2, 3, 4, 6];
  
  const resultt1 = areArraysEqual(arra1, arra2);
  const resultt2 = areArraysEqual(arra1, arra3);
  
  console.log("Array 1:", arra1);
  console.log("Array 2:", arra2);
  console.log("Array 3:", arra3);
  
  console.log("Array 1 is equal to Array 2:", resultt1);
  console.log("Array 1 is equal to Array 3:", resultt2);
  
  
//35--remove an element in an array

function removeElementFromArray(inputArray, elementToRemove) {
    const indexToRemove = inputArray.indexOf(elementToRemove);
    if (indexToRemove !== -1) {
      inputArray.splice(indexToRemove, 1);
      return `${elementToRemove} removed from the array.`;
    } else {
      return `${elementToRemove} not found in the array.`;
    }
  }
  let sampleArr = [1, 2, 3, 4, 5];
  const elementToRemove = 3;
  
  const resultss = removeElementFromArray(sampleArr, elementToRemove);
  
  console.log("Original Array:", sampleArr);
  console.log("Result:", resultss);

  //36--display a 2*2 matrix
const matrix = [
    [1, 2],
    [3, 6]
  ];
  console.log("2x2 Matrix:");
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j] + " ");
    }
    console.log();
  }
  
  //37--transpose of a matrix
  function transposeMatrix(originalMatrix) {
    const numRows = originalMatrix.length;
    const numCols = originalMatrix[0].length;
    const transposedMatrix = [];
    for (let i = 0; i < numCols; i++) {
      transposedMatrix[i] = [];
      for (let j = 0; j < numRows; j++) {
        transposedMatrix[i][j] = originalMatrix[j][i];
      }
    }
  
    return transposedMatrix;
  }
  const originalMatrix = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  const transposedMatrix = transposeMatrix(originalMatrix);
  
  console.log("Original Matrix:");
  console.log(originalMatrix);
  
  console.log("\nTransposed Matrix:");
  console.log(transposedMatrix);
  
  //38--sum of two matrix
  function addMatrices(matrix1, matrix2) {
    const numRows = matrix1.length;
    const numCols = matrix1[0].length;
    if (numRows !== matrix2.length || numCols !== matrix2[0].length) {
      console.log("Matrices must have the same dimensions for addition.");
      return null;
    }
    const sumMatrix = [];
    for (let i = 0; i < numRows; i++) {
      sumMatrix[i] = [];
      for (let j = 0; j < numCols; j++) {
        sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }
  
    return sumMatrix;
  }
  const matrix1 = [
    [1, 2],
    [3, 4]
  ];
  
  const matrix2 = [
    [5, 6],
    [7, 8]
  ];
  
  const resultMatrix = addMatrices(matrix1, matrix2);
  
  if (resultMatrix !== null) {
    console.log("Matrix 1:");
    console.log(matrix1);
  
    console.log("\nMatrix 2:");
    console.log(matrix2);
  
    console.log("\nSum of Matrices:");
    console.log(resultMatrix);
  }
  
  //39--multiplication of 3*3 matrix
  function multiplyMatrices(matrix1, matrix2) {
    const numRows1 = matrix1.length;
    const numCols1 = matrix1[0].length;
    const numRows2 = matrix2.length;
    const numCols2 = matrix2[0].length;
    if (numCols1 !== numRows2) {
      console.log("Matrices cannot be multiplied. The number of columns in the first matrix must be equal to the number of rows in the second matrix.");
      return null;
    }
  
    const productMatrix = [];
    for (let i = 0; i < numRows1; i++) {
      productMatrix[i] = [];
      for (let j = 0; j < numCols2; j++) {
        productMatrix[i][j] = 0;
        for (let k = 0; k < numCols1; k++) {
          productMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
        }
      }
    }
  
    return productMatrix;
  }
  const matrixx1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrixx2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];
  
  const resultMatrixx = multiplyMatrices(matrixx1, matrixx2);
  
  if (resultMatrixx !== null) {
    console.log("Matrix 1:");
    console.log(matrixx1);
  
    console.log("\nMatrix 2:");
    console.log(matrixx2);
  
    console.log("\nProduct of Matrices:");
    console.log(resultMatrixx);
  }
  
  //40--check whether given two matrix are same or not
  function areMatricesEqual(matrix1, matrix2) {
    const numRows1 = matrix1.length;
    const numCols1 = matrix1[0].length;
    const numRows2 = matrix2.length;
    const numCols2 = matrix2[0].length;
    if (numRows1 !== numRows2 || numCols1 !== numCols2) {
      return false;
    }
    for (let i = 0; i < numRows1; i++) {
      for (let j = 0; j < numCols1; j++) {
        if (matrix1[i][j] !== matrix2[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  const matri1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matri2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matri3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ];
  
  console.log("Matrix 1:");
  console.log(matri1);
  
  console.log("\nMatrix 2:");
  console.log(matri2);
  
  console.log("\nMatrix 3:");
  console.log(matri3);
  
  const resul1 = areMatricesEqual(matri1, matri2);
  const resul2 = areMatricesEqual(matri1, matri3);
  
  console.log("\nMatrix 1 is equal to Matrix 2:", resul1);
  console.log("Matrix 1 is equal to Matrix 3:", resul2);
  
//41--if upper diagnl elemnt <lower de,then replace

function modifyMatrix(matrix) {
    if (matrix.length !== matrix[0].length) {
        console.log("Matrix is not square.");
        return;
    }

    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j) {
                if (matrix[i][j] < matrix[j][i]) {
                    matrix[j][i] = 1;
                } else {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    return matrix;
}
const inputMatrix = [
    [3, 2, 5],
    [6, 1, 9],
    [7, 5, 1]
];
const modifiedMatrix = modifyMatrix(inputMatrix);
console.log("Modified Matrix:");
console.log(modifiedMatrix);

//42--ascii value of given letter
function findAsciiValue(letter) {
    if (letter.length === 1) {
        const asciiValue = letter.charCodeAt(0);
        console.log(`ASCII value of '${letter}' is: ${asciiValue}`);
    } else {
        console.log("Please enter a single letter.");
    }
}
findAsciiValue('B');

//43--wind chill index

function calculateWindChillIndex(v, t) {
    if (v >= 0 && v <= 4) {
        return t;
    } else if (v >= 45) {
        return 1.6 * t - 55;
    } else {
        return 91.4 + (91.4 - t) * (0.0203 * v - 0.304 * Math.sqrt(v) - 0.474);
    }
}
const windSpeed = 10; 
const temperature = 20; 

const windChillIndex = calculateWindChillIndex(windSpeed, temperature);
console.log(`Wind Chill Index: ${windChillIndex.toFixed(2)}`);

//44--and or not
function checkDivisibility(num) {
    
    const isDivisibleBy5And6 = num % 5 === 0 && num % 6 === 0;

    
    const isDivisibleBy5Or6 = num % 5 === 0 || num % 6 === 0;

    
    const isDivisibleBy5XOR6 = (num % 5 === 0 || num % 6 === 0) && !(num % 5 === 0 && num % 6 === 0);
    console.log(`Is ${num} divisible by 5 and 6? ${isDivisibleBy5And6}`);
    console.log(`Is ${num} divisible by 5 or 6? ${isDivisibleBy5Or6}`);
    console.log(`Is ${num} divisible by 5 or 6 but not both? ${isDivisibleBy5XOR6}`);
}
const userInputt = prompt("Enter an integer:");
const userNumberr = parseInt(userInputt);
if (!isNaN(userNumberr)) {
    checkDivisibility(userNumberr);
} else {
    console.log("Invalid input. Please enter a valid integer.");
}


//45--to take order
// Function to calculate the total cost based on item price and shipping options
function calculateTotalCost(item, price, overnightDelivery) {
    // Calculate shipping cost based on item price
    let shippingCost = (price >= 10) ? 3.00 : 2.00;

    // Add additional cost for overnight shipping
    if (overnightDelivery == 1) {
        shippingCost += 5.00;
    }

    // Calculate total cost
    let totalCost = price + shippingCost;

    // Display invoice
    console.log(`Invoice: ${item} ${price.toFixed(2)}`);
    console.log(`Shipping ${shippingCost.toFixed(2)}`);
    console.log(`Total ${totalCost.toFixed(2)}`);
}

// Example usage
const item = prompt("Enter the item: ");
const price = parseFloat(prompt("Enter the price: "));
const overnightDelivery = parseInt(prompt("Overnight delivery (0 == no, 1 == yes): "));

// Check if the price is a valid number
if (!isNaN(price)) {
    // Call the function to calculate and display the total cost
    calculateTotalCost(item, price, overnightDelivery);
} else {
    console.log("Invalid input. Please enter a valid price.");
}

//46--

function calculateStatistics(names, scores) {
    // Check if arrays are of the same length
    if (names.length !== scores.length) {
        console.log("Error: Arrays must have the same length.");
        return;
    }

    // Calculate average score
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    // Identify students below average
    const belowAverageStudents = names.filter((name, index) => scores[index] < averageScore);

    // Find highest score and students with the highest score
    const maxScore = Math.max(...scores);
    const highestScoreStudents = names.filter((name, index) => scores[index] === maxScore);

    // Output information
    console.log(`Average Score: ${averageScore.toFixed(2)}`);
    console.log("\nStudents below average:");
    if (belowAverageStudents.length > 0) {
        belowAverageStudents.forEach(student => console.log(student));
    } else {
        console.log("None");
    }

    console.log(`\nHighest Test Score: ${maxScore}`);
    console.log("\nStudents with the highest score:");
    highestScoreStudents.forEach(student => console.log(student));
}

// Example usage
const maxStudents = 50;
const studentNames = [];
const testScores = [];

for (let i = 0; i < maxStudents; i++) {
    const name = prompt(`Enter the name of student ${i + 1} (or 'done' to finish):`);
    if (name.toLowerCase() === 'done') {
        break;
    }
    const score = parseFloat(prompt(`Enter the test score for ${name}:`));
    studentNames.push(name);
    testScores.push(score);
}

// Call the function to calculate and display statistics
calculateStatistics(studentNames, testScores);


//47--class in your prgrmng lang
// Class declaration
class Student {
    // Constructor to initialize object properties
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Method to display student information
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

// Example usage
// Create instances of the Student class
const student1 = new Student("Ayesha nihala", 23, "A");
const student2 = new Student("haari", 17, "B");

// Display information using the class method
console.log("Student 1 Information:");
student1.displayInfo();

console.log("\nStudent 2 Information:");
student2.displayInfo();