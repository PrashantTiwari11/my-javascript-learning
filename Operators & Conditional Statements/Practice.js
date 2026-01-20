//Ques 1: Get user to input a number using prompt("Enter a number:") Check the number is the multiple of 5 or not.
let number = prompt("Enter a number:");
if (number %5 === 0) {
    console.log(number + "is a multiple of 5.");
}
else {
    console.log(number + "is not a multiple of 5.");
}

//Oues 2: Write a code which can gives grades  to students according to their scores:
/*80-100 : A
70-80 : B
60-70 : C
50-60 : D
0-50 : F*/
let score = prompt("Enter student score:");
if(score >= 80 && score <= 100) {
    console.log("Grade: A");
}
else if(score >= 70 && score < 80) {
    console.log("Grade: B");
}
else if(score >= 60 && score < 70) {
    console.log("Grade: C");
}
else if(score >= 50 && score < 60) {
    console.log("Grade: D");
}
else if(score >= 0 && score < 50) {
    console.log("Grade: F");
}
else {
    console.log("Student has failed because score is below of grade F threshold.");
}
