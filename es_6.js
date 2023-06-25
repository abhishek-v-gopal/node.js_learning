class sample{
    samplehello(){
     console.log("this is samplehello")
    }
}



class Hello extends sample{
    constructor(num1,num2){
        super()
   this.num1=num1
   this.num2=num2
    }
   hello()
{
    console.log('the number is'+(this.num1+this.num2))

}

}


let hai=new Hello(20,30)
hai.hello()
hai.samplehello()
