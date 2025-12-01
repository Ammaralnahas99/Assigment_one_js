//1.................
// let num = "123"
// num=Number(num)+7;
// console.log("After adding 7 to the number: " + num );

//2..................
// let value = prompt("Enter the value you need :");
// if(value!=true){
//     console.log("invalid value");
// }

//3...................
// for(i=1;i<=10;i++){
//     if (i%2==0){
//         continue
//     }
//     console.log(i);
// }

//4....................
// const arr=[1,2,3,4,5];
// const Filtered_Array=arr.filter((i)=>{
//     return i%2==0;
// })
// console.log(Filtered_Array);

//5....................

// let first_array=[1,2,3,4];
// let second_array=[5,6,7,8];
// let merged_array= [...first_array, ...second_array];
// console.log("Merged array : "+(merged_array));

//6....................

// let x=prompt("Enter the number of the day: ");
// switch(Number(x)){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         break;    
// }

//7...................

// let arr=["a","ab","abc","abcd"];
// const LengthsOfString=arr.map((n)=>{
//     return n.length;
// })
// console.log(LengthsOfString)

//8...................
// let num = prompt("Enter the number you need:");
// if(num%3==0 && num%5==0 && num!=false){
//     console.log( num + " is divisible by both 3 and 5")
// }
// else{
//     console.log(num + " is not divisible by both 3 and 5");
// }

//9...................
// let num =prompt("Enter the number you need:");
// let number_squared = num=>{
//     return num*num;
// };
// console.log(number_squared(num))

//10..................
// const person = {
//     name: "John",
//     age: 25
// };

// const output = ({ name, age }) => {
//     return `${name} is ${age} years old`;
// };
// console.log(output(person)); 

//11..................

// let sum =(...args)=>{
//     let total=0
//     for (i of args){
//         total+=i
//     }
//     return total
// }
// console.log(sum(1,2,3,4))

//12.................
// function message(){
//     return new Promise((r,j)=>{
//         setTimeout(() => {
//             console.log("success")
//         }, 3000);
//     })
// }
// message()

//13..................
// function findMax(arr) {
//     let max = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return max;
// }
// console.log(findLargest([1, 3, 7, 2, 4]))

//14..................

// function getKeys(obj) {
//     let keys = []
//     for (let key in obj) {
//         keys.push(key)
//     }
//     return keys;
// }
// console.log(getKeys({ name: "John", age: 30 }))

//15...................

// let input="The quick brown fox"
// let arr=[]
// arr=input.split(" ")
// console.log(arr)
