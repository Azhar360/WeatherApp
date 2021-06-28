 class UI{
constructor(){
    this.location=document.getElementById('w-location');
    this.desc=document.getElementById('w-desc');
    this.string=document.getElementById('w-string');
    this.icon=document.getElementById('w-icon');
    this.humidity=document.getElementById('w-humidity');
    this.feelsLike=document.getElementById('w-feels-like');
    this.temp=document.getElementById('w-temp');
    this.maxTemp=document.getElementById('w-max-temp');
    this.minTemp=document.getElementById('w-min-temp');
    this.wind=document.getElementById('w-wind');
}
    paint(weather){
      this.location.textContent=`${weather.name},${weather.sys.country}`
     this.desc.textContent=`${weather.weather[0].description}`;
    this.string.innerHTML=`${weather.main.temp}&#x2103;`
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent=`Humidity: ${weather.main.humidity}%`;
    this.feelsLike.innerHTML=`Feels Like: ${weather.main.feels_like}&#x2103;`;
    this.maxTemp.innerHTML=`Max Temp: ${weather.main.temp_max}&#x2103;`;
    this.minTemp.innerHTML=`Min Temp: ${weather.main.temp_min} &#x2103;`;
    this.wind.textContent=`Wind Speed: ${weather.wind.speed} mph`;
    }
 }