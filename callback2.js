
var hello=function(data){
    console.log("Data:"+data)
}

var hey=function(callback){
 callback('abhi')
}

hey(hello)