
class WeatherAPI {
	
	constructor (appId){
		this._appId = appId; 
	}
	
	async getWeather(){
		const myRequest = new Request("http://api.openweathermap.org/data/2.5/weather?q="+this._city+"&appid="+this._appId);
		const response = await fetch(myRequest);
		return Rx.Observable.fromPromise(response.json());
	}
	
	getCity(name){
		this._city = name;
	}

}