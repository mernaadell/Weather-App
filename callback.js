// setTimeout(()=>{
//     console.log("iam a call back func")

// },3000)
// console.log("hi2")
// const out=(str,callback)=>{
    
//      data={
//         long:0,
//         lat:0
//     }
//     callback(data)
// }

// const d=out("v",(data)=>{
//     console.log(data)

// })
// console.log("hi3")
const add=(num1,num2,callback)=>{
    setTimeout(()=>{
    sum1=num1+num2
    callback(sum1)
    },2000)
}
add(1,4,(sum)=>{
    console.log(sum)
})