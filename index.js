
function init() {

    const ui = new UI(
        document.querySelector("#actionBar > .water"),
        document.querySelector("#actionBar > .food"),
        document.querySelector("#actionBar > .light"), 
        document.querySelector("#location"));

    const plant = new Plant(50,50,50,'cloudy', false);

    //we provide this api key to enjoy the game on github.io please dont reuse it :)
    const weatherAPI = new WeatherAPI("47b0057c2c422721740ab607e8adb5d1");

    const display = new ShowPlant(plant);

    //call plant
    const timeinterval = Rx.Observable.interval(1000)
        .subscribe(() => {
            plant.nextStep();
            display.setHealthBars();
            display.setImage();
        });

    ui.getWaterObservable().subscribe(plant.addWater.bind(plant));
    ui.getFeedObservable().subscribe(plant.addNutrients.bind(plant));
    ui.getArtificialLightObservable().subscribe(plant.setIsUVLamp.bind(plant));    

    //call weather api
    Rx.Observable.merge(
        Rx.Observable.interval(60000),
        ui.getLocationObservable())
            .subscribe((location) => {
                //update city location if the location changed
                if(location.data) {
                    weatherAPI.setCity(document.querySelector("#location").value);
                }
                weatherAPI.getWeather();
                display.setMeteo();
            });

    weatherAPI.observable.subscribe(weather => console.log("the wheather is "+ weather));
    console.log(weatherAPI, plant);
}
