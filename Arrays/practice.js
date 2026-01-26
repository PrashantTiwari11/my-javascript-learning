 //QUES 5: FOR A GIVEN ARRAY WITH MARKS OF STUDENT -> [78, 45, 89, 23, 67, 90, 56]
 // FIND THE AVERAGE MARKS,
let  marks = [78, 45, 89, 23, 67, 90, 56];
let sum=0;
for(let val of marks){
    sum = sum + val;
}
console.log("sum of marks: " + sum);
let avg = sum / marks.length;
console.log(`Average marks: ${avg}`);

//QUES 6: FOR A GIVEN ARRAY WITH PRICES OF 5 ITEMS -> [250, 400, 150, 600, 350]
// ALL ITEMS HAVE AN OFFER OF 10% DISCOUNT
// FIND THE FINAL PRICE OF EACH ITEM AFTER DISCOUNT
let prices = [250, 400, 150, 600, 350];
for (let i=0; i<prices.length; i++){
    let discount = prices[i] * 0.10;
    let finalPrice = prices[i] - discount;
    console.log(`Final price after 10% discount for item ${i+1} is: ${finalPrice}`);
}

//QUES 7:create an array of company names -> ["Apple", "Samsung", "OnePlus", "Nokia", "Sony"]
// PERFORM THE FOLLOWING OPERATIONS:
// REMOVE THE FIRST COMPANY FROM THE ARRAY
// REPLACE "OnePlus" WITH "Motorola"
// ADD A NEW COMPANY "LG" AT THE END OF THE ARRAY
let comapny = ["Apple", "Samsung", "OnePlus", "Nokia", "Sony"];
comapny.shift(); // removes "Apple"
console.log(comapny);
comapny.splice(2, 1, "Motorola"); // removes "OnePlus" and adds "Motorola" at index 2 
console.log(comapny);
comapny.push("LG"); // adds "LG" at the end
console.log(comapny);

// Ques - For a given array of numbers , print square of each value using the forEach loop.
let square = [2,4,6,8,10]
square.forEach((val) => {
    console.log (val * val);
})
