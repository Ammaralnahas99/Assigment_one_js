//1.................
function q1(){
    let num = "123"
    num=Number(num)+7;
    console.log("After adding 7 to the number: " + num );
}
q1();

//2..................
function q2(){
    let value = 0
    if(value!=true){
        console.log("invalid value");
    }
}
q2();

//3...................
function q3(){
    for(i=1;i<=10;i++){
        if (i%2==0){
            continue
        }
        console.log(i);
    }
}
q3();

//4....................
function q4(){
    const arr=[1,2,3,4,5];
    const Filtered_Array=arr.filter((i)=>{
        return i%2==0;
    })
    console.log(Filtered_Array);
}
q4();

//5....................
function q5(){
    let first_array=[1,2,3,4];
    let second_array=[5,6,7,8];
    let merged_array= [...first_array, ...second_array];
    console.log("Merged array : "+(merged_array));
}
q5();

//6....................
function q6(){
    let x=5
    switch(Number(x)){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            break;    
    }
}
q6();

//7...................
function q7(){
    let arr=["a","ab","abc","abcd"];
    const LengthsOfString=arr.map((n)=>{
        return n.length;
    })
    console.log(LengthsOfString)
}
q7();

//8...................
function q8(){
    let num =15
    if((num%3==0 && num%5==0) && (num!=false)){
        console.log( num + " is divisible by both 3 and 5")
    }
    else{
        console.log(num + " is not divisible by both 3 and 5");
    }
}
q8();

//9...................
function q9(){
    let num =5
    let number_squared = num=>{
        return num*num;
    };
    console.log(number_squared(num))
}
q9();

//10..................
function q10(){
    const person = {
        name: "John",
        age: 25
    };

    const output = ({ name, age }) => {
        return `${name} is ${age} years old`;
    };
    console.log(output(person)); 
}
q10();

//11..................
function q11(){
    let sum =(...args)=>{
        let total=0
        for (i of args){
            total+=i
        }
        return total
    }
    console.log(sum(1,2,3,4)) 
}
q11();

//12.................
function message(){
    return new Promise((r,j)=>{
        setTimeout(() => {
            console.log("success")
        }, 3000);
    })
}
message()

//13..................
function findLargest(arr) {
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}
console.log(findLargest([1, 3, 7, 2, 4]))

//14..................

function getKeys(obj) {
    let keys = []
    for (let key in obj) {
        keys.push(key)
    }
    return keys;
}
console.log(getKeys({ name: "John", age: 30 }))

//15...................

let input="The quick brown fox"
let arr=[]
arr=input.split(" ")
console.log(arr)
