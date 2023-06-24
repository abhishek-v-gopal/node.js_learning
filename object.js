var person={ name: 'abhishek', age: 19, place: 'oorukary', display:function(){
    var name="abhi"
    console.log(this.age)
} }

for(x in person){
    console.log(person[x])
}
person.dob="13/11/2003"
console.log(person.name,person.age)     

person.displayage=function(){
    console.log(this.age)
}
console.log(person.displayage())