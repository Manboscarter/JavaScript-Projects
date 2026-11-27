function showContinent()
{

let continents =  {//dictionary of continent

    Number1:"Africa",
    Number2:"Asia",
    Number3:"Europe",
    Number4:"North America",
    Number5:"South America",
    Number6:"Oceania",
    Number7:"Antarctica",
  
    

};
let output =""; // empty string output variable waiting to receive input
for (let continent of Object.values(continents)){ // this is  a loop. gets all values from the dictionary.
output += continent + "<br>"; //add each output in "" one after the other of the whole item in the dictionary 
//and<br> creates a break for new line after addition

}// this is the end of the loop. doesnt need to end with;


document.getElementById("continentList").innerHTML= output;

}


function showNation() {
let Nation = {// dictionary of the number of nations within the continent
    Africa:54,
    Asia:48,
    Europe:44,
    North_America:23,
    South_America:12,
    Oceania: 14,
    Antarctica:0,
    

};
delete Nation.Africa //deletes the KVP for Africa:54
document.getElementById("dictionary_list").innerHTML = Nation.Africa;
}








