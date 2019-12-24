const request =require("request") //http request to api
const get=require("./utils")
add=process.argv[2]
if(!add)
return console.log("lease provide address")
   get.geocode(add,(error,data)=>{
       if(error){
       return console.log("error",error)
       }
         get.forcast(data.long,data.lat,(error,forcastdata)=>{
            if(error){
       return console.log(error)
            }
        console.log(data.location)
       console.log(forcastdata)

   })

   })
 
 