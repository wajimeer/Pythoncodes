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

// let clientPrice = Number(prompt("Enter price (200 less than original price):"));

// let library = {
//     book1: {
//         title: "Pir-e-Kamil",
//         author: "Umera Ahmed",
//         year: 2014,
//         original_price: 2000,
//         clientPrice: clientPrice,
//         increment: function () {
//             if (this.clientPrice < this.original_price - 200) {
//                 alert("This price is too low!");
//                 console.log("this price is low")
//             }
//             if(this.original_price-200===clientPrice){
//                 console.log("the book is your's")
//             }
//         }
//     },
//     book2: {
//         title: "Aab-e-Hayat",
//         author: "Umera Ahmed",
//         year: 2016,
//         original_price: 3000,
//         clientPrice: clientPrice,
//         increment: function () {
//             if (this.clientPrice < this.original_price - 200) {
//                 alert("This price is too low!");
//             }
//         }
//     },
//     book3: {
//         title: "Jannat Ka Patta",
//         author: "Nimra Ahmed",
//         year: 2014,
//         original_price: 4000,
//         clientPrice: clientPrice,
//         increment: function () {
//             if (this.clientPrice < this.original_price - 200) {
//                 alert("This price is too low!");
//             }
//         }
//     },
//     book4: {
//         title: "Jannat Ka Patta 2",
//         author: "Nimra Ahmed",
//         year: 2015,
//         original_price: 5000,
//         clientPrice: clientPrice,
//         increment: function () {
//             if (this.clientPrice < this.original_price - 200) {
//                 alert("This price is too low!");
//             }
//         }
//     },
//     book5: {
//         title: "Salahuddin",
//         author: "Qasim",
//         year: 2014,
//         original_price: 3000,
//         clientPrice: clientPrice,
//         increment: function () {
//             if (this.clientPrice < this.original_price - 200) {
//                 alert("This price is too low!");
//             }
//         }
//     }
// };


// console.log(library.book1.increment());
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

// ######################
function person(name,job,year){
    this.name = name;
    this.job=job;

    this.year=year;
}
 person.prototype.calculateyear = function(){
    console.log("this perrson has "+(2019-this.year) + "of experience" )
 }
 console.log(person.prototype)
 let person1 = new person('develpore','fdff',2000)
 console.log(person1)
person1.calculateyear()


 const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    greet:function(){
        console.log(`${this.title} was written by ${this.author} in ${this.year}`)
    }
  };
  console.log(book.greet())


function library(title,author,rleasingdate, totalprice,clientPrice){
    this.title=title;
    this.author=author;
    this.rleasingdate=rleasingdate;
    this.totalprice=totalprice;
    this.clientPrice=clientPrice;
}
library.prototype.increasingprice=function(){
    if(this.clientPrice<this.totalprice-200){
        console.log("this price is to low")
    }

}
let person3= new library('books','new',2018,2000,1800)
console.log(person3)
person3.increasingprice()

class Bankacount{
    constructor(accounholdername,totalbalance){
        this.accounholdername=accounholdername;
        this.totalbalance=totalbalance;
    }
    deposite(amount) {
        this.totalbalance+=amount
        console.log(`thankyou for depoiste ${this.deposite} this amount`)
        }
        withdraw(amount){
            if(amount<=this.totalbalance){
                this.totalbalance-=amount
               
                console.log(`thankyou to use this ATM`)
                console.log(`beep beep your ${amount}`)
            }else{
                console.log("your balance is to much low please deposite first")
            }
       
        }
        totalamount(){
         console.log(`your total balance is ${this.totalbalance}`)
        }
}
let persons = new Bankacount('waji',50000)
persons.withdraw(2000)
persons.totalamount()
