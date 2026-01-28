// 1. Create a h2 heading element with text - "Hello JavaScript" . Append "from Apna College students" to this text using JS.

// 2. Create 3 divs with common class name - "box" . Access them & add some unqiue elements of them.

//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS TUTORIAL</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Hello JavaScript</h2>
  <div class="box">first div</div>
  <div class="box">second div</div>
  <div class="box">third div</div>
  <script src="script.js"></script>
</body>
</html>

//style.css
.box{
    height: 100px;
    width: 100px;
    border: 1px solid black;
    margin: 5px;
    text-align: center;
    background-color: aqua;
}

//script.js
// //dom practices
//SOLUTION 1
// let h2 = document.querySelector("p");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from apna college Students.";

//SOLUTION 2
let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx ++
}
