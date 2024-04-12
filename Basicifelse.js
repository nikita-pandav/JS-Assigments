// 1. Write a program that checks if a given number is even or odd.
// let n = 20;
// if (n%2==0){
//     console.log("No. is Even");
// }
// else{
//     console.log("No. is Odd");
// }

// 2. Create a function that takes two numbers as parameters and returns the larger one.
// function larger(a,b){
//     if (a>b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// larger(10,5)

// 3. Write a function that determines if a given year is a leap year.
// function leapyr(year){
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//         console.log("Year is leap year");
//     }
//     else{
//         console.log("Not a leap year");
//     }
// }
// leapyr(1900)

// 4. Implement a program that checks whether a given character is a vowel or consonant.
// function check(b){
//     let str = "aeiou";
//     if (str.includes(b)){
//         console.log('Vowel');
//     }
//     else{
//         console.log("Consonant");
//     }

// }
// check('y')

// 5. Create a function that takes three numbers as input and returns the largest among them.
// function Greter(a,b,c){
//     if (a>b && a>c){
//         console.log(a);
//     }
//     else if (b>a && b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// Greter(10,5,3)

// 6. Write a program that checks if a given number is positive, negative, or zero.
// function num(n){
//     if (n>0){
//         console.log("Positive");
//     }
//     else if (n==0){
//         console.log("Zero");
//     }
//     else{
//         console.log("Negative");
//     }
// }
// num(0)

// 7. Implement a function that calculates the grade of a student based on their score.
// function score(n){
//     if (n >= 85){
//         console.log("Grade A")
//     }
//     else if (n >= 70){
//         console.log("Grade B");
//     }
//     else if (n >= 35){
//         console.log("Grade C")
//     }
//     else{
//         console.log("Fail")
//     }
// }
// score(30)

// 8. Create a program that determines if a given string is a palindrome.
// function palindrome(num){
//     let b = (num.toString().split('').reverse('').join(''));  
//     if (num == b){
//     console.log("Yes Palindrom");  
//     }
//     else{
//         console.log("Not Palindrom");
//     }
// }
// palindrome(44)

// 9. Write a function that checks whether a person is eligible to vote based on their age.
// function canvote(age){
//     if (age >= 18) {
//         console.log("Eligible for vote");
//     }
//     else{
//         console.log("Not eligible for vote");
//     }
// }
// canvote(21)

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
// function triangle(side1,side2,side3){
//     if (side1 === side2 && side2 === side3) {
//         return "Equilateral";
//     } 
//     else if (side1 === side2 || side1 === side3 || side2 === side3) {
//         return "Isosceles";
//     } 
//     else {
//         return "Scalene";
//     }
// }
// console.log(triangle(10,10,10))
