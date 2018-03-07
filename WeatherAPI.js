
//class WeatherAPI {
	var jsonReturn;
	var myRequest = new Request("http://api.openweathermap.org/data/2.5/weather?q=London&appid=47b0057c2c422721740ab607e8adb5d1");
	fetch(myRequest).then(function(response) {
		response.json().then(function(data){
			jsonReturn = data.weather[1];
			console.log(jsonReturn.main);
			document.querySelector("#weatherIcon").innerHTML = jsonReturn.main ;
		});
	});

//}