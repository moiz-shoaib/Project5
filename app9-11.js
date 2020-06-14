var city = prompt("city","Karachi");
var karachi = "Welcome to the city of light ";
alert(karachi);

var x = prompt("City Name","karachi");
if (x === "Karachi") {
alert("Welcome ");
}
else{
    alert("Welcome To Another City");
}

var x = prompt("City Name","Male");
if (x === "Male") {
alert("Good Morning Sir");
}
else{
    alert("Good Morning Ma'am");
}


document.write("Signal Color"+"Messages"+"<br>")
var x = prompt("Signal Colour","Red");
if (x === "Red") {
document.write(x+"Must Stop"+"<br>");
}
var x = prompt("Signal Colour","Yellow");
if (x === "Yellow") {
document.write(x+"Ready to Move"+"<br>");
}
var x = prompt("Signal Colour","Green");
if (x === "Green") {
document.write(x+"Move Now"+"<br>");
}

var x = prompt("Remaing fuel in car in litre","0.25 litre");
if (x === "0.25 litre"){
    alert("Please Refill the fuel in car ");
}

else {
    alert("You are allowed to go");
}


var a = 4; 
if (++a === 5){
alert("given condition for variable a is true"); 
}

var b = 82;
if (b++ === 83){ 
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){ 
alert("condition 1 is true"); 
} 

if (c === 13){
alert("condition 2 is true"); 
} 

if (++c < 14){ 
alert("condition 3 is true"); 
}

if(c === 14){ alert("condition 4 is true"); 
}

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 

if (totalCost === laborCost + materialCost){
alert("The cost equals"); 
}


if (true){
alert("True"); 
} 

if (false){ 
alert("False");

}



if("car" < "cat"){ 
alert("car is smaller than cat"); 
}



document.write("Marks Sheet "+"<br>"+"<br>");
alert("Your Total Marks are 300")
document.write("Total Marks : "+300+"<br>")




var total1 = prompt("Obtained Marks","");
document.write("Marks Obtained : "+total1+"<br>")




var Percentage = +prompt("Enter Your Percentage ")
if(Percentage >=80 && Percentage<= 100){
    document.write("Percentage :"+Percentage+"<br>"+"Grade :"+"A+"+"<br>"+"Remarks :"+"Excellent"+"<br>")
}
else if(Percentage >=70 && Percentage<= 80){
    document.write("Percentage :"+Percentage+"<br>"+"Grade :"+"A"+"<br>"+"Remarks :"+"Good"+"<br>")
}


else if(Percentage >=60 && Percentage<= 70){
    document.write("Percentage :"+Percentage+"<br>"+"Grade :"+"B"+"<br>"+"Remarks :"+"You need to improve"+"<br>")

}


else if(Percentage >=0 && Percentage<= 60){
    document.write("Percentage :"+Percentage+"<br>"+"Grade :"+"Fail"+"<br>"+"Remarks :"+"Soory"+"<br>")

}



var s = +prompt("Secret Number From 1 to 10" )
if (s == 5){
    alert("Bingo! Correct Answer\n Well Done");
}

else if(s==6){
    alert("Close enough to the correct answer");
}
else{
alert("Try Again!\n Better Luck Next Time");
}



var divide = +prompt("Find Which Number is divisible by 3","");
alert(divide/3);

if (divide == divide/3){
    alert("Yes");   
}