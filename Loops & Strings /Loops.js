console.log("Prashant Tiwari");
for(let x=1; x<=4; x++) {
    console.log("Prashant Tiwari");
}

//calculate the sum of first n natural numbers
let sum = 0;
for(let i=1; i<=5;i++) {
    sum = sum + i;
}
console.log("The sum is: " + sum);

//infinite loop
for (let i =1; i>=0; i++){
    console.log(i);
}

//while loop
let i2 = 1;
while(i2<=5) {
    console.log(i2);
    i2++;
}

//do while loop
let i1 = 20;
do{
    console.log(i1);
    i1++;
} while(i1<=5);

//for of loop
for(let val of strVar){
    //do some work
}

let str = "PT";
let length=0;
for (let i of str){ //iterators --> characters
    console.log(i);
    length++;
}
console.log("Length is: " + length); //2

//for in loop
for(let key in objVar){
    //do some work
}

let student = {
    name: "Prashant Tiwari",
    age: 24,
    college: "IIT Kanpur"
};
for(let i in student){
    console.log("key:" +key + "value:" + student[key]);
}
