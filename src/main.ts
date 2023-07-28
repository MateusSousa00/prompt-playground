import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// A calculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation.
function simpleCalculator(
  num1: number,
  operator: string,
  num2: number
): number {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Division by zero is not allowed.");
      return num1 / num2;
    default:
      throw new Error("Invalid operator.");
  }
}

// function that checks whether a number is prime or not.
function primeNumbers(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// function to calculate the factorial of a number.
function factorial(num: number): number {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

// function that checks whether a word is a palindrome (that is, whether it reads the same backwards and forwards).
function palindrome(word: string): boolean {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// a program that receives a number from the user and displays the table of that number, from 1 to 10.
function table(num: number) {
  console.log(`Number table for ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Function to count the number of vowels in a string
function vowelCounter(sentence: string): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return sentence
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;
}

// Function to calculate the average of three grades
function gradeAverage(grade1: number, grade2: number, grade3: number): number {
  return (grade1 + grade2 + grade3) / 3;
}

// Function to calculate the final value of an investment
function interestCalculation(
  initialCapital: number,
  interestRate: number,
  investmentTimeInMonths: number
): number {
  const interestRatePerMonth = interestRate / 100 / 12;
  return (
    initialCapital * Math.pow(1 + interestRatePerMonth, investmentTimeInMonths)
  );
}

// Function to get input from the user
function getUserInput(promptText: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer);
    });
  });
}

// Start the program
async function startProgram() {
  console.log("Choose a function to run:");
  console.log("1. Calculator");
  console.log("2. First 10 prime numbers");
  console.log("3. Factorial");
  console.log("4. Palindrome check");
  console.log("5. Number table");
  console.log("6. Count vowels");
  console.log("7. Calculate average of grades");
  console.log("8. Investment calculator");
  console.log("9. Exit");

  const option = parseInt(await getUserInput("Enter the option number:"));

  switch (option) {
    case 1:
      const num1 = parseFloat(await getUserInput("Enter the first number:"));
      const operator = await getUserInput("Enter the operator (+, -, *, /):");
      const num2 = parseFloat(await getUserInput("Enter the second number:"));
      try {
        const result = simpleCalculator(num1, operator, num2);
        console.log("Result:", result);
      } catch (error: any) {
        console.error("Error:", error.message);
      }
      break;
    case 2:
      const userNumber = parseInt(
        await getUserInput("Enter a number to check if it's prime:")
      );
      console.log(
        `The number ${userNumber} is${
          primeNumbers(userNumber) ? "" : " not"
        } prime.`
      );
      // Then create a program that prints the first 10 prime numbers.
      console.log("First 10 prime numbers:");
      let primeCount = 0;
      let num = 2;
      while (primeCount < 10) {
        if (primeNumbers(num)) {
          console.log(num);
          primeCount++;
        }
        num++;
      }
      break;
    case 3:
      const userNumberFactorial = parseInt(
        await getUserInput("Enter a number to calculate its factorial:")
      );
      // a program that allows the user to enter a number and displays the corresponding factorial.
      console.log("Factorial:", factorial(userNumberFactorial));
      break;
    case 4:
      // The program must ask the user for a word and inform whether or not it is a palindrome.
      const userWordPalindrome = await getUserInput("Enter a word:");
      console.log(
        `"${userWordPalindrome}" is${
          palindrome(userWordPalindrome) ? "" : " not"
        } a palindrome.`
      );
      break;
    case 5:
      const userNumberTable = parseInt(
        await getUserInput("Enter a number to display its table:")
      );
      table(userNumberTable);
      break;
    case 6:
      //The program should ask the user for a sentence and display how many vowels it has.
      const userSentenceVowels = await getUserInput("Enter a sentence:");
      console.log("Number of vowels:", vowelCounter(userSentenceVowels));
      break;
    case 7:
      //Create a program that takes a student's grades in three different subjects and calculates the average of the grades
      const grade1 = parseFloat(await getUserInput("Enter grade 1:"));
      const grade2 = parseFloat(await getUserInput("Enter grade 2:"));
      const grade3 = parseFloat(await getUserInput("Enter grade 3:"));
      console.log("Average grade:", gradeAverage(grade1, grade2, grade3));
      break;
    case 8:
      // Create a function that calculates the final value of an investment based on initial capital,
      // interest rate, and investment time (in months). The program must prompt the user for these
      // values and display the final value.
      const initialCapital = parseFloat(
        await getUserInput("Enter the initial capital:")
      );
      const interestRate = parseFloat(
        await getUserInput("Enter the interest rate (%):")
      );
      const investmentTimeInMonths = parseFloat(
        await getUserInput("Enter the investment time in months:")
      );
      console.log(
        "Final value:",
        interestCalculation(
          initialCapital,
          interestRate,
          investmentTimeInMonths
        )
      );
      break;
    case 9:
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please choose a valid option.");
      break;
  }

  if (option !== 9) {
    startProgram();
  }
}

// Call the start program function to begin the menu
startProgram();
