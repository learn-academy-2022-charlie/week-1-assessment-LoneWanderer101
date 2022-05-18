// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

        // Set one:
        // const fruit1 = "apple"
        // const fruit2 = "banana"

        //     Set two:
        //     const fruit3 = "cherry"
        //     const fruit4 = "kiwi"

// example provided by Austin



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

        // I will have to create a conditional statement that will let the user know if any give temperature is above, at, or below boiling temperature of 212. I will be using if/else conditional statements. Given any temperature, if the temperature is above 212, the console output will read "above boiling point". If the temperature is below 212, the console output will read "below boiling point". If the temperature is at 212, the console output will read "at boiling point". 


    //     const temp1 = 42
    //     const temp2 = 350
    //     const temp3 = 212

    //     const boilingPoint = (number) => {
    //     if(number < 212) {
    //         return `${number} is below boiling point`
    //     } else if (number > 212) {
    //         return `${number} is above boiling point`
    //     } else if (number === 212) {
    //         return `${number} is at boiling point`
    //     } 
    // }
    //     console.log(boilingPoint(350))
    //     console.log(boilingPoint(42))
    //     console.log(boilingPoint(212))



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

        // Create code that will add the length of both arrays. In an array length takes into account how many elements. The two arrays below have a combined lenght of 10 because each array has five elements each. To find this you console.log myNumbers1.length plus myNumbers2.length
    

    // const myNumbers1 = [3, 7, 0, 36, -9]
    // const myNumbers2 = [8, -7, 42, 9, 13]

    // console.log(myNumbers1.length + myNumbers2.length)



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"


        // Since the letters have to be changed, built-in-methods of mutators and accessors will be used. use .split, .reverse, and .join
        
        // const currentCohort = "Charlie 2022"
        // console.log(currentCohort.split("").reverse().join(""))
                        // OR
        // const currentCohort = "Charlie 2022"
        // const currentCohort1 = currentCohort.split("")
        // console.log(currentCohort1.reverse().join(""))



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

    // using a for loop were you begin the first index through the length of the array. to find out if each number in the array is even or odd, you can use a modulo %. If the number in my array is divisible by 2, then it is even. If there is a remainder then it is odd. Using a for loop the code will be, i=0; i<myArray.length; i++. In the console.log you will type and if/else statement with "even" and "odd". 

//     const myArray = [13, 34, 5, 10, 27, 42]

//     for(let i=0; i < myArray.length; i++) {
//     if (myArray[i] % 2 === 0) {
//      console.log("even")
//     }   else {
//      console.log("odd")
//     }
// }

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

            // create a functing that subrtracts the higher number from the lower number in each set. (research the code which subrtracts the smaller number from the higher number instead of assigning them)

    //     // Set one:
    //     const number1 = 58
    //     const number2 = 100

    //     // Set two:
    //     const number3 = 27
    //     const number4 = 24

    //     const multiplier1 = (number1, number2) => {
    //     return (number2 - number1)
    // }
    //     const multiplier2 = (number3, number4) => {
    //     return (number4 - number3)
    // }
    //     console.log(multiplier1(number1, number2), multiplier2(number4, number3))