/*const https = require('https')
//const fetch = require('fetch')
const express = require('express')
const fetch = require('node-fetch')
const app = express()


app.use(express.urlencoded({extended:false}))
app.use(express.json())

*/
async function weather(){
    const resp =  await fetch('https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=6c7519e20c7dfbee192f75aaf1c472be')
    const json =  await resp.json()
    console.log(json)
    document.getElementById('weather').innerHTML = json.weather[0].description

}

const checkDate = () =>{
    let date = new Date()
    return `Date : ${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`
}

(()=>{
    setInterval(()=>{
    let time = new Date()
    document.getElementById('time').innerHTML =
   `Time : ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
   // console.log(`Time : ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)}
    ,1)}
)()


document.getElementById('date').innerHTML = checkDate()
weather()
//console.log(checkDate())














/*
app.get('/weather', async(req,res)=>{
    const resp =  await fetch('https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=6c7519e20c7dfbee192f75aaf1c472be')
    const json =  await resp.json()
    console.log(json.coord)
    res.json(json)
})
app.listen(8000,()=>{
    console.log('Server is listening 5000')
})*/


//fetch.

/*fetch('https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=6c7519e20c7dfbee192f75aaf1c472be')
.then((resp) => { resp.json()})
.then((data)=> { console.log(data)})
.catch((err)=>{ console.log(err)})
*/


/*
var FetchStream = require("fetch").FetchStream;

var fetch = new FetchStream("http://https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=6c7519e20c7dfbee192f75aaf1c472be.com");

fetch.on("data", function(chunk){
    console.log(chunk);
});
*/

/*https.get('https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=6c7519e20c7dfbee192f75aaf1c472be',
(res)=>{
    //res.json()
    let data = ''
    res.on('data',(chuck) => {
        data +=chuck
    })
    console.log(data)
    //console.log(req)
})*/
