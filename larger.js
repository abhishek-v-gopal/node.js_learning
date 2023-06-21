var r = require('readline-sync')

var num1=r.question('enter 2 numbers')
var num2=r.question()

if(num1>num2)
{
    console.log(num1+"is greater")
}
else{
    console.log(num2+"is greater")
}