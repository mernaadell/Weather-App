 //geocoding
   //address->lat/long->weather
   const request =require("request") //http request to api
   exports.geocode=(address,callback)=>{
    const url2="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibWVybmExMSIsImEiOiJjazRoZjQ2OWsxNWluM2tvN3JnNTc3NXMyIn0.t_k3mH-GWT7LvGRLvlp0zA&limit=1"
    request({ url: url2, json: true }, (error, response) => { //parse data automatic json to java script object
     if(error)
     {
         callback("unable to connect",undefined)
     }
     else if(response.body.features.length==0)
     {
         callback("cant find location",undefined)
     }
     else {
         callback(undefined,{
         long:response.body.features[0].center[1],
         lat:response.body.features[0].center[0] , 
         location:response.body.features[0].place_name
         })
        
     }
    })}

    exports.forcast=(long,lat,callback)=>{
        const url="https://api.darksky.net/forecast/6ed6705fbaf72a5c6b08ffa3aee60985/"+long+","+lat
    
    request({ url: url, json: true }, (error, response) => { //parse data automatic json to java script object
       
    if(error)
    {
        callback("unable to connect",undefined)
    }
    else if(response.body.error)
    {
        callback("cant find location",undefined)
    }
    else{
    data=response.body.daily.data[0].summary + ' It is currently ' +
   response.body.currently.temperature + ' degrees out. There is a ' +
   response.body.currently.precipProbability + '% chance of rain.'
   callback(undefined,data)}
   })
}