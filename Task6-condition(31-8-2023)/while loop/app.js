// create multiplication tables by using while loop

var num1=1;
var num2=+prompt("Enter which table you want");

console.log(`--------------------------${num2} Tabels----------------------------`);

while (num1<=20) {
    console.log(`${num1} * ${num2} = ${num1*num2}`);
    num1++;
    
}
console.log(`---------------------------------------------------------------`);