let obj = {
    name : "waji",
    age:22,
    city:"wahcantt",
    profession:"develpoer"
}
obj.city="lahore"
let output = obj.city
console.log(output)

let car = {
    carname:'toyota',
    model:'1992',
    carengen:'v8engengien',
}
for (let all in car){
    console.log(all+' '+car[all])
}

let students=[
    {name:"ali",age:25,grade:"A"},
    {name:"ahmed",age:25,grade:"C"},
    {name:"abdullah",age:25,grade:"B"},
    {name:"Waji",age:25,grade:"A"},
]
for(let student of students){
    if (student.grade==="A"){
        console.log(student.name)
    }10

}
let calculator= {
    add:function (a,b){
        return a+b;
    },
    subtract:function (a,b){
        return a-b;
    },
    multiplie:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        if(b!==0){
            return a/b;
        }else {
            "zero cannot be divided "
        }
    }
    
}
console.log(calculator.add(12,13))


