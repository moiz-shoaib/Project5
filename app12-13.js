// task 2 

var s = +prompt("1","");
var p = +prompt("2","");
alert(s+p);


// task 3

var p = +prompt("Enter No.", "0")
if (p === 0) {
    alert("zero");
}
else if (p > 0) {
    alert("Even No.")
}
else if (p < 0) {
    alert("Even No.")
}


// task 5

var Password = 1234 ;
var pw = +prompt("Please Enter Your Password","1234");
if (Password === 1234){
    alert("Continue")
}
else{
    alert("Please Enter Your Password");
}
var pw = +prompt("Please Enter Your Password Again","1234");
var wp = +prompt("Please Enter Your Password Again","1234");

if (pw==wp){
    alert("Same Password");
}
else{
    alert("Wrong Password!");
}


// task 6 

var greeting; 
var hour = 13; 

if (hour < 18) { 
    greeting = "Good day"; 
    alert(greeting);
}

else{
    greeting = "Good evening";
    alert(greeting) 
}





