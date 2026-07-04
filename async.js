//destructed array and nested 
let arr=[10,[20,30],[50,60,[70,80]]]
let [a,[b,c],[d,e,[f,g]]]=arr;
console.log(f);
//destructred nested object
// let obj1={
//     key1:"val1",
//     key2:
//     {
//         key3:"val3",
//         key4:"val4"
//     }
// }
// let {key1,key2:{key3,key4}}=obj1;
// console.log(key1);
//rest
// let [h,i,...j]=arr;
// console.log(h,i);
