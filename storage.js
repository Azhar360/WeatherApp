class Storage{
    constructor(){
    this.city;
    this.state;
    this.defaultState='india';
    this.defaultCity='Kolkata';
}

getLocationData(){
if(localStorage.getItem('City')===null ||localStorage.getItem('State')===null){
    this.city=this.defaultCity;
    this.state=this.defaultState;
}
else{
    this.city=localStorage.getItem('City');
    this.state=localStorage.getItem('State');
}
return {
    city:this.city,
    state:this.state
 }
}

setLocationData(city,state){
    localStorage.setItem('City',city);
    localStorage.setItem('State',state);
}
}