function myFunction() {//function myFunction is created to run when the button is clicked.
var sentence="The runner-up for the lottery is ";//assigning the variable sentence a string value of "The runner-up for the lottery is ".
sentence += "Mary Johnson 25 years old";//adding to the variable sentence a string value of "Mary Johnson 25 years old".
document.getElementById("demo2").innerHTML=sentence;//when the button is clicked, the innerHTML of the element with the id of demo2 will be changed to "The runner-up for the lottery is Mary Johnson 25 years old".
}