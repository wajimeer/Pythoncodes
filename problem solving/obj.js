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
    }

}
