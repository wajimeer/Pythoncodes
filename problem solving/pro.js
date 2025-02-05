// const isequalto = (a,b)=>a===100||b===1000;
// console.log(isequalto(100,0))
// console.log(isequalto(0,1000))
// function largest(arr){
//     let max = arr[0];
//     for (let i=0; i<arr.length;i++){
//         if (arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// console.log(largest([1,2,3,5,7,9]));
// function mini(arr){
//     let reversd = ''
//     for(let i = arr.length-1; i>=0; i--){
//         reversd +=arr[i]
//     }
//     return reversd
// }
// console.log(mini('hellos'));

// function smallestchar(arr){
//     if(arr.length===0){
//         return undefined
//     }
//     let str = arr[0]
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]<str){
//             str = arr[i]
//         }
      
//     }
//     return str;
// }console.log(smallestchar('hello'));


// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// for (let i=0; i<arr.length; i++){
//     if(arr[i]%3===0){
//       sum += arr[i]
        
//     }

// }
// console.log(sum)
// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0;
// let count = 0;
// for (let i=0; i<arr.length; i++){
//   if(arr[i]%2===0){
//     sum+=arr[i]
//     count++
//   }
// }
// let average = sum/count
// console.log(average)

// let arr = [1,3,5,8,9,2,6]
// for(let i=0; i<arr.length;i++){
//   for(let j=i+1; j<arr.length;j++){
//     if (arr[i]>arr[j]){
//       let x=arr[i]
//       arr[i]=arr[j]
//       arr[j]=x


//     }
//   }
// }
// console.log(arr)
// let d=arr[0]
// for(let i=0; i<arr.length; i++){
//   if(arr[i]>d){
//     d=arr[i]
//   }
// }
// console.log(d);

// let arr = 'heloo'
// let reversed = ''
// for(let i=arr.length-1;i>=0;i--){
// reversed +=arr[i]
// }
// console.log(reversed)

// let arr= [5,2,3,4,7,6]
// let sorted = true;
// for(let i=0; i<arr.length; i+=2){
//     if (arr[i]<arr[i-1]){
//        sorted=false;
//        break;
//     }
  
// }
// console.log(sorted)

// function removeduplicate(arr){
//     if(arr.length===0)return 0;
//     let index=1;
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]!==arr[i-1]){
//             arr[index]=arr[i]
//             index++;
//         }
//     }
// return index;
// }
// const arr =[1,2,3,4,5,6,6,6,6,6,7,6,5,3,2,1]
// const newlength= removeduplicate(arr)
// console.log(arr.slice(0,newlength))

// function remove(arr){
   
//     let uniq = [];
//     for(let i =0 ; i<arr.length; i++ ){
//         let dublicate = false;
    
//         for(let j=0; j<uniq.length;j++){
//             if(arr[i]===uniq[j]){
//                 dublicate=true;
//                 break
//             }
//         }
//         if (!dublicate) {
//             uniq.push(arr[i])
//         }
    
//     }
//     return uniq

// }
// const arr = [1,2,3,4,5,6,6,7,6,5,4,3,2,1]
// const uni =  remove(arr)
// console.log(uni)

// function second(arr) {
//     if (arr.length<2) return null;
//     let first = -Infinity 
//     let  second =-Infinity;
//     let third  = -Infinity
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 let x = arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=x
//             }
//         }
//     }
//     for(let num of arr){
//         if (num>first){
//             second=first;
//             first=num;
//         }else if (num>second&&num!==first) {
//             third=second
//             second=num
//         }
//         if(num>third&&num!==second&&num!==first)
//             third=num;
//     }
//     return third;
// }
// let newa = second([1 ,2, 34, 56,7 ,39,40])
// console.log(newa)
// rotation
// function cle (arr , k){
//     let n = arr.length;
//     k = k%n;
//     let rtate = [];
//     for (let i=n-k;i<n;i++){
//         rtate.push(arr[i])
//     }
//     for (let i=0; i<n-k;i++){
//         rtate.push(arr[i])
//     }
//     return rtate;
// }
// let arr = [1,2,3,4,5,6]
// let k = 3 
// console.log(rotaion(arr,k))

// function move(arr){
//      let j=0;
//      for (let i=0; i<arr.length; i++){
//           if(arr[i]!==0){
//                arr[j]=arr[i]
//                j++
//           }
//      }
//      while(j<arr.length){
//           arr[j]=0;
//           j++;
//      }
//      return arr;
// }
// let arr = [0, 1, 0, 3, 12];
// console.log(move(arr))

// function missing(arr){
//      let n=arr.length
//      let expectedvalue = (n*(n+1))/2;
//      let actualvalue = 0;
//      for (let num of arr){
//           actualvalue+=num;

//      }
//      return expectedvalue-actualvalue
// }
// const arr = [1,5,7,8,9];
// console.log(missing(arr))

// function missing(arr){
//      debugger;
//      for(let i=0; i<arr.length; i++){
//           for(let j=i+1; j<arr.length; j++){
//                if(arr[i]>arr[j]){
//                     let temp = arr[i]
//                     arr[i]=arr[j]
//                     arr[j]=temp;
//                }
               

//           }
//      }
     
//      let missingnumber=[]
// let start = arr[0];
// let end = arr[arr.length-1]
// for(let i=start; i<=arr[arr.length-1];i++){
//      let found = false;
//      for (let j= 0; j <arr.length; j++) {
//           if (arr[j]===i){
//                found =true;
//                break;
//           }
       
//      }
//      if(!found){
//           missingnumber.push(i)
     
//      }
    
// }
// return missingnumber;
     
// }

// const arr = [1,9,5,30];
// console.log(missing(arr));


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr1= []
// for(let i=0; i<arr.length; i++){
//      let mid = Math.floor(arr.length/2)
//      if(i===mid){
//           arr1.push(arr[i])
//      }
// }
// console.log(arr1);

// let arr = [1,1,2,2,3,3,3,4,5,6,6,6,6]
// let arr1={}
// for(let i=0;i<arr.length;i++){
//      if (arr1[arr[i]]){
//           arr1[arr[i]]+=1
//      }else{
//           arr1[arr[i]]=1
//      }
// }
// console.log(arr1)



let n = 10;
for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j <= Math.floor(n); j++) {
        if (j === 0||j===n-1||j===i&&i>=n/2||j===n-i-1&&i>=n/2) {
            star += '*';  
        } else {
            star += ' ';  
        }
    }
    console.log(star);
}

let a=3
let b=a++
let c=++a
let d=++a
let e= a+b+c+d
console.log(a,ef)
