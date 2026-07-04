// function order(shoe)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             reject("Shoe not delivered due to heavy rain")
//         },4000)
//     })
// }
// order("nike").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log("Watch FIFA");

// second try
function order(shoe)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            reject("Shoe not delivered due to heavy rain")
        },4000)
        setTimeout(()=>{
            resolve("Shoe can be delivered today HUrray!!")
        },4000)
    })
}
order("nike").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

console.log("Watch FIFA");
