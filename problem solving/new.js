//sorted array

// let arr= [1,5,2,5,7,8,2,6,8,7,4,13,17,19]
// for (let i= 0; i< arr.length;i++) {
//    for(let j=i+1; j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//    }
    //for (let i=0; i<arr.length; i++){
    //for(let j=i+1; j<arr.length;j++){
//if(arr[i]>arr[j]){
//let temp = arr[j]
//arr[i]=arr[j]
//}
//
//

//
//








    //}
    //}
// }
// let missingno= [];
// let start = arr[0];
// let end = arr[arr.length-1]
// for(let i=start; i<=end;i++){
//     let found = true;
//     for(let j=0; j<arr.length; j++){
//         found = false;
//         break;
//     }
//     if(!found){
//         missingno.push(i)
//     }
// }
// let n = arr.length;
// let rotate = [];
// k=3
//  k = k % n;
// for(let i=n-k;i<n;i++){
    
// rotate.push(arr[i])
// for(let i=0; i<n-k;i++){
//     rotate.push(arr[i])
// }
// }
// let arr1=[]
// for(let i=0; i<=arr.length-1;i++){
//     let mid = Math.floor(arr.length/2)
//     if(i===mid){
//         arr1.push(arr[i])
//     }
// }

// let emptyarr = [];
// for(let i=0; i<arr.length;i++){
//     let duplicate = false;
//     for(let j=0; j<arr.length;j++){
//         if(i!==j&&arr[i]===arr[j]){
//             duplicate = true;
//             break;
//         }

//     }
//     if(!duplicate){
//         emptyarr.push(arr[i])
//     }
// }


// let first = arr[0]
// let second = arr[0]
// for(let num of arr){
// if(num>first){
//     second=first;
//     first=num;

// }
// if(num>first&&first!==second){
//     second=num;
// }




// }
// console.log(second)

// console.log(false==[])
// let abc = 'deep'
// abc[2]='y'
// console.log(abc);

// const num = 5;
//  let star = '';
//  for(let i=0; i<num; i++){
//      let star = ''
//         for (let j = 0; j <= num + i -1; j++) {
//             if (i<j) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
    
//  }  
//  console.log(star)
// }

// let arr = [ 1,2,3,4,5,6,7,8,9,10]
// let second = arr[0]
// let first = arr[0]
// for(let num of arr){
//     if(num>first){
//         second=first;
//         first =num;
//     }
//     if(num>first&&first!==second){
//         second=num;
//     }
// }
// let firstindex=0;
// let lastindex=0;
// for(let i=0; i<arr.length;i++){
//     if(i===0){
// firstindex=i;
//     }
//     if(i===arr.length-1){
//         lastindex=i
//     }
// }
// let mid = Math.floor((firstindex+lastindex)/2)
// for(let i=0; i<arr.length;i++){
// if(i===arr.length){
//     mid=arr[i]
// }
// }

// console.log(second,firstindex,lastindex, mid)

// let arr = [1,2,3,4,5,6,7,8]

// for (let i = 0; i < arr.length; i++) {
//    for (let j =0; j<arr.length-1-i;j++) {
//   if(arr[j]<arr[j+1]){
//     let x=arr[j]
//     arr[j]=arr[j+1]
//     arr[j+1]=x;

//   }
//    }
    
// }
// for(let num of arr){
//     if(num<arr){
//         let x=num;
//         num=arr;
//         arr=x
//     }
// }
// console.log(arr);
// debugger
// let arr = [1,3,4,5,6]
// let missingno= [];
// let start = arr[0];
// let end = arr[arr.length-1]
// for(let i=start; i<=end;i++){
//     let found = true;
//     for(let j=0; j<arr.length; j++){
//         found = false;
//         break;
//     }
//     if(!found){
//         missingno.push(i)
//     }
// }
// console.log(missingno)

// let arr= [1,3,5,6,7,9]
// let missingno = [];
// let start =arr[0]
// let end = arr[arr.length-1]
// let sum =0;
// let count =0;
// for(let i=start; i<=end; i++){
//     let found = false;
// for (let j=0; j<arr.length; j++){
//     if(arr[j]===i){
//          found = true;
//         break;
//     }
// }
// if (!found){
//   missingno.push(i)
//   sum+=i;
//   count ++
// }

// }
// let average = sum/count;
// console.log(missingno,sum,count,average)

// console.log(14/3)


// let arr = [1, 2, 5, 6, 8, 0];
// let emptyarr = [];
// let count = 0;
// let target = 7;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             emptyarr.push(i, j);
//             count++;
//         }
//     }
// }


// let average = count > 0 ?Math.floor(target)/ count : "No pairs found";

// console.log(emptyarr, average);

// let arr = [1,1,2,2,3,3,4,5,6,7,8,8,9,9]
// let obj ={}
// for(let i =0; i<arr.length; i++){
//     let n = arr[i]
//     if(obj[n]===undefined){
//         obj[n]=1
//     }else{
//         obj[n]++
//     }
// }
// console.log(obj);
// let a=3;
// let b=a++
// let c=++a
// let d=++a
// let e= a+b+c+d
// console.log(a,e)
// let n =6

//  for (let i = 0; i < n; i++) {
//    let star = '';
//    for (let j = 0; j < n; j++) {
//      if(i<Math.floor(n/2)&&j<Math.floor(n/2)-i||i<Math.floor(n/2)&&j>Math.floor(n/2)+i
//     ||``){
//      star += ' ';
//      }else{
//        star+='*'
//      }
//    }
//    console.log(star);  
//  }
// document.addEventListener('keydown', function(event) {?
//     // Store the key press in local storage
//     let loggedKeys = localStorage.getItem('keylog') || '';
//     loggedKeys += event.key + '\n'; // Append the key to the log
//     localStorage.setItem('keylog', loggedKeys); // Save the updated log
// });

// let arr = [1,3,5,7]
// let emptyarr=[]
// let start = arr[0]
// let end =arr[arr.length-1]
// for(let i=start; i<end; i++){
//     let found = false;
//     for(let j=0;j<arr.length;j++){
//         if (arr[j]===i){
//             found =true;
//         break;
//         }
        
//     }
//     if(!found){
//         emptyarr.push(i)


//     }
// }
// console.log(emptyarr)
// let arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// let counter = 0;

// function countfrequency(arr) {
//     let frequency = [];
//     let check = 0;

//     for (let i = 0; i < arr.length; i++) {
       
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 counter++;
             
//             }
//         }
//         if (arr[i] !== check) {
//             frequency.push([arr[i], counter]);
//         }
//     }
//     return frequency;
// }

// console.log(countfrequency(arr));


//  function frequency(arr, target){
//     let count = 0
//     for (let i=0; i<arr.length; i++){
        
//         if (arr[i]===target){
//             count++
//         }
//     }
//     return count;
//  }
// console.log(frequency([1, 2, 3, 4, 5, 5,5,5,5,5, 6, 6, 7, 7, 8, 8],5))
// let arr = [1,2,3,4]
// let n=arr.length
// let totalsum = 0;
// for (let i=0; i<n;i++){
//     totalsum+=arr[i]*(i+1)*(n-i)
// }
// console.log(totalsum)