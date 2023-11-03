var http=require('http')
var fs=require('fs')
var url=require('url')
http.createServer(function (req,res){
    fs.readFile('html.html',function (err,data){

        var q=url.parse(req.url)
        console.log(q.pathname)

        if(q.pathname==='/')
        {

            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()

        }else if(q.pathname==='/login')
        {
            fs.readFile('signup.html',(err,data)=>{
                res.write(data)
            res.end()

            })
            
        }else if(q.pathname==='/action')
        {
            
        }
        else
        {
            res.writeHead(404,{'content-type':'text/html'})
            res.write('error')
            res.end()
        }
    })

}).listen(7000,function (){
    console.log('server started')
})

