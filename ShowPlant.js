
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

        let stat= this.plant.deathOrigin();
        console.log(stat);
        console.log(FLOOD);
        let src='';
        switch(stat){
            case NOTDEAD: src="images/plant.svg";
                break;

            case FIRE: src="images/plantfire.svg";
                break;
            case NOSUN: src="images/plantsanssoleil.svg";
                break;

            case FLOOD: src="images/planteau.svg";
                break;
             case NOWATER: src="images/plantsecheresse.svg";
                break;
            case FAT: src="images/plantgros.svg";
                break;
            case HUNGER: src="images/plantnormal.svg";
                break;
            case OTHER: src="images/plantnormal.svg";
                break;

            default: src="images/plant.svg";


        }
        this.imagePlant.src=src;

    
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