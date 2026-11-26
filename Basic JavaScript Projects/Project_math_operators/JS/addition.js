 function addition(a,b,c) {//declaring the function
    return a + b + c;//what i want the function to execute(addition)
 }

 function showAddition(){//making the function to show when the button is clicked 
    let a=300;//declaring the variable and assign values

    
 let b=60;
 let c=2;

 let result = addition(a,b,c);//This is written at the end of the code to call or invoke the function to execute

 document.getElementById("addition").innerHTML= "The sum total of 300 + 60 + 2 =  " + result;  //displaying the result of the executed function in the html location assigned to display result output
 
 }
