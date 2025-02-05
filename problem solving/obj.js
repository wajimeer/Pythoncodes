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

let clientPrice = Number(prompt("Enter price (200 less than original price):"));

let library = {
    book1: {
        title: "Pir-e-Kamil",
        author: "Umera Ahmed",
        year: 2014,
        original_price: 2000,
        clientPrice: clientPrice,
        increment: function () {
            if (this.clientPrice < this.original_price - 200) {
                alert("This price is too low!");
                console.log("this price is low")
            }
            if(this.original_price-200===clientPrice){
                console.log("the book is your's")
            }
        }
    },
    book2: {
        title: "Aab-e-Hayat",
        author: "Umera Ahmed",
        year: 2016,
        original_price: 3000,
        clientPrice: clientPrice,
        increment: function () {
            if (this.clientPrice < this.original_price - 200) {
                alert("This price is too low!");
            }
        }
    },
    book3: {
        title: "Jannat Ka Patta",
        author: "Nimra Ahmed",
        year: 2014,
        original_price: 4000,
        clientPrice: clientPrice,
        increment: function () {
            if (this.clientPrice < this.original_price - 200) {
                alert("This price is too low!");
            }
        }
    },
    book4: {
        title: "Jannat Ka Patta 2",
        author: "Nimra Ahmed",
        year: 2015,
        original_price: 5000,
        clientPrice: clientPrice,
        increment: function () {
            if (this.clientPrice < this.original_price - 200) {
                alert("This price is too low!");
            }
        }
    },
    book5: {
        title: "Salahuddin",
        author: "Qasim",
        year: 2014,
        original_price: 3000,
        clientPrice: clientPrice,
        increment: function () {
            if (this.clientPrice < this.original_price - 200) {
                alert("This price is too low!");
            }
        }
    }
};


console.log(library.book1.increment());
// library.book2.increment();
// library.book3.increment();
// library.book4.increment();
// library.book5.increment();

let arr = [
    {product_name:"cleaner",price:200},
    {product_name:"computer",price:30000},
    {product_name:"laptop",price:40000},
    {product_name:"keyboard",price:10000},
]
for (let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
        if(arr[i].price>arr[j].price){
            let x= arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
        
    }
}
console.log(arr)