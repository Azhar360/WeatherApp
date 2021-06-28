class Weather{
   constructor(city,state){ 
    this.apikey='26116ad3f1448926452fbe71567111cd';
    this.city=city;
    this.state=state;
}
//Fetch Weather Info 
async getWeather(){
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apikey}`);
const responseData=await response.json();
return responseData;
}

//Change location
changeLocation(city,state){
   this.city=city;
   this.state=state;
}
}