
class ShowPlant {

    constructor(plant){
        this.plant=plant;
        this.imagePlant= document.querySelector('#plant');
        this.waterbar= document.querySelector('#waterbar');
        this.foodbar=document.querySelector('#foodbar');
        this.lightbar=document.querySelector('#lightbar');
        this.weatherIcon=document.querySelector('#weatherIcon');
        //this.iconmeteo=document.querySelector()
        //console.log(this.imagePlant);
    }

    setImage(){

        this.imagePlant.src="images/plant.svg";

    
    }

    setHealthBars(){
        this.waterbar.style.width=''+this.plant.getWater()+'%';
        this.foodbar.style.width=''+this.plant.nutrients+'%';
        this.lightbar.style.width=''+this.plant.sun+'%';
    }

    setMeteo(){
        this.weatherIcon.src="images/003-summer.png";

    }
    
}