
class WeatherAPI {
	
	constructor (appId) {
        this._appId = appId;
        this.observable = Rx.Observable.create(observer => this._next = observer.next.bind(observer));
	}
	
	getWeather() {
        const myRequest = new Request("http://api.openweathermap.org/data/2.5/weather?q="+this._city+"&appid="+this._appId);
        fetch(myRequest).then((response) => this._next(response.json()));
	}
	
	setCity(name) {
		this._city = name;
	}
}