var http=require('http')
var fs=require('fs')
var url=require('url')
const { parse } = require('path')

http.createServer(function (req,res){
var q=parse(req.url)
console.log(q.path)
   if(req.url==='/'){

    fs.readFile('html.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })

}else if(req.url==='/login')
{
    fs.readFile('signup.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })

  
}else if(req.url==='/signupaction'){
    res.write('action')
    res.end()
}else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
     res.end()
}

    
}).listen(7000,function (){
    console.log('server started')
})
    
