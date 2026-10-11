let name = prompt("Enter your name:")
let mark1 = Number(prompt("Enter your first mark:"));
let mark2 = Number(prompt("Enter your second mark:"));
let mark3 = Number(prompt("Enter your third mark:"));
let avgmark;
let totalmarks;

function avg(a,b,c){
    let summ = a+b+c;
    let average = summ/3;
    return average;
}
function total(a,b,c){
    let sum = a+b+c;
    return sum;
}

avgmark = avg(mark1,mark2,mark3);
totalmarks =total(mark1,mark2,mark3);

if(mark1<0 || mark1>100 || mark2<0 || mark2>100 || mark3<0 || mark3>100){

alert("Please enter a valid number between  0 and 100")

}
else{
    alert("Your name is" + name);
alert ("Your total marks is" + totalmarks);
alert ("Your average marks is "+ avgmark);

if(avgmark>=90){
    alert("Grade A");
}
else if(avgmark>=75){
    alert("Grade B");
}
else if(avgmark>=50){
    alert("Grade C");
}
else{
    alert("Grade F")
}

let accept = confirm("Do you need to calculate the mark of another student:")
if(accept){
    alert("Please refresh the window");
}
else{
    alert("Thank you");
}
}