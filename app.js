const request =require("request") //http request to api
const url="https://api.darksky.net/forecast/6ed6705fbaf72a5c6b08ffa3aee60985/37.8267,-122.4233"

request({url:url},(error,response)=>{

 console.log(JSON.parse(response.body).currently.summary)
})
request({ url: url, json: true }, (error, response) => { //parse data automatic json to java script object
    if(error)
    {
        console.log("error in connection")
    }
    else if(response.body.error)
    {
        console.log("error to find location")
    }
    else{
    console.log(response.body.daily.data[0].summary + ' It is currently ' +
   response.body.currently.temperature + ' degrees out. There is a ' +
   response.body.currently.precipProbability + '% chance of rain.')}
   })
   //geocoding
   //address->lat/long->weather
   const url2="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVybmExMSIsImEiOiJjazRoZjQ2OWsxNWluM2tvN3JnNTc3NXMyIn0.t_k3mH-GWT7LvGRLvlp0zA&limit=1"
   request({ url: url2, json: true }, (error, response) => { //parse data automatic json to java script object
    if(error)
    {
        console.log("error in connection")
    }
    else if(response.body.features.length==0)
    {
        console.log("cant find location")
    }
    else {
        long=response.body.features[0].center[0]
        att=response.body.features[0].center[1]

    console.log(response.body.features[0].center[0])
    }
   })