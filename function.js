function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name:"+this.name+"   Age:"+this.age+"    Place:"+this.place)
    }
}

var roji=new person("Roji Thomas",44,"kunnumthanam")
var cini=new person("cini joseph",44,"changanserry")

roji.display()
cini.display() 