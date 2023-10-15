var read=require('readline-sync')

var value=read.question("enter the 2 no")
valu2=read.question('')
console.log(value,valu2)

if(value>valu2)
{
    console.log(value+"greater")
}else if(value===valu2){
    console.log(valu2+" is equaal to "+value)
}else{
    console.log(valu2+" is greater")
}