
const storage=new Storage();

const weatherLocation=storage.getLocationData();

const weather=new Weather(weatherLocation.city,weatherLocation.state);

document.addEventListener('DOMContentLoaded',callWeather());

const ui=new UI();

function callWeather(){
weather.getWeather()
.then(result=>{
    ui.paint(result);
})
.catch(err=>console.log(err));
}

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
const city =document.getElementById('city').value;
const state=document.getElementById('state').value;
weather.changeLocation(city,state);
storage.setLocationData(city,state);
callWeather();
$('#locModal').modal('hide');
});