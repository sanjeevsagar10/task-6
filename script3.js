
function multitable(number){
    let table="";
    for(let i=1;i<=10;i++)
    {
        table +=`${number} x ${i} = ${number*i}\n`;
    }
    window.alert(table);
}
function oddoreven(number){
    if(number%2==0){
        window.alert("The given number is even")
    }
    else{
        window.alert("The given number is odd")
    }
}
function sum(number){
    let sum =0;
    for(let i=1;i<=number;i++)
        sum = sum+i;
    window.alert("The sum of the natural numbers from 1 to " + number + " is " + sum);
}

function starprint(number){
    if(number%2==0){
        let square ="";
        for(let i=0;i<number;i++){
            row=""
            for(let j=0;j<number;j++){
                row+="*"
            }
            square+=row + "\n"
        }
        window.alert(square);
    }
    else{
        let triangle="";
        for(let i=0;i<number;i++){
            row=""
            for(let j=0;j<=i;j++){
                row+="*"
            }
            triangle+=row + "\n"
        }
        window.alert(triangle);
    }
}


let again = true



 while(again){
    let num = prompt("Please enter a number");
    num = Number(num);
     oddoreven(num);
     multitable(num);
     sum(num);
     starprint(num);

     again = confirm("Do you want the Program to run again:");

 }
