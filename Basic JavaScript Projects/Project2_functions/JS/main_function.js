let A="Johnson";//assigning A a variable string value of Johnson.
let B="Smith";//assigning B a variable string value of Smith.
let C=30;//assigning C a variable number value of 30.

let btn = document.getElementById("myBtn");//assigning btn a variable value of the button with the id of myBtn.
btn.addEventListener("click", function() {//adding an event listener to the button that listens for a click event and runs the function when clicked.
    document.getElementById("demo").innerHTML = "The Winner is " + A +" "+ B +" "+ C + " years old"});//when the button is clicked, the innerHTML of the element with the id of demo will be changed to "The Winner is Johnson Smith 30 years old".