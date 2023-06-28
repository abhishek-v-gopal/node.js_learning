var dt=new Date()
console.log("hello")
for(i=0;i<1000;i++)
{
    console.log("loop")
}
console.log("end")
var diff=new Date()-dt
console.log(diff)

function longtask(millisecond){

    var dt=new Date()
    while((new Date()-dt) <= millisecond)
    {

    }

}

console.log('started')
longtask(10000)
console.log("end")

console.log('started')
longtask(10000)
console.log("end")

console.log('started')
longtask(10000)
console.log("end")


console.log('started')
longtask(10000)
console.log("end")