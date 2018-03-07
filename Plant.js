const NOTDEAD=0;
const FLOOD=1;
const NOWATER=2;
const FIRE=3;
const NOSUN=4;
const FAT=5;
const HUNGER=6;
const OTHER=7;

const SUNNY=8;
const CLOUDY=9;
const RAIN=10;

class Plant {
    
    constructor(water, sun, nutrients, weather,isUVLamp){
        this.isDead=false;
        this.setWater(water);
        this.setSun(sun);
        this.setNutrients(nutrients); 
        this.isUVLamp=isUVLamp;
        this.weather=weather; //string avec comme choix: sunny, cloudy, rain

        //this.isDead=false;
    }

    setWater(water){
        if(water>100){
            this.water=100;
            this.isDead=true;
        }else if(water<0){
            this.water=0;
            this.isDead=true;
        }else{
            this.water=water; //max water= 100
        }
    }
    getWater(){return this.water}

    setSun(sun){
        if(sun>100){
            this.sun=100;
            this.isDead=true;
        }else if(sun<0){
            this.sun=0;
            this.isDead=true;
        }else{
            this.sun=sun; //max sun= 100
        }


    }

    setNutrients(nutrients){
        if(nutrients>100){
            this.nutrients=100;
            this.isDead=true;
        }else if(nutrients<0){
            this.nutrients=0;
            this.isDead=true;
        }else{
            this.nutrients=nutrients; //max nutients= 100
        }
    }

    health(){
        var sum=this.water+this.sun+this.nutrients;
        if (sum>150){
            return 2 //good shape
        }else if (sum>20){
            return 1; //middel shape
        }else{
            this.isDead=true;
            return 0; //bad shape
        }
    }


    addWater(){
        this.setWater(10+this.water);
    }

    addNutrients(){
        this.setNutrients(20+this.nutrients)
    }

    updateWeather(weather){
        this.weather=weather;
    }

    setIsUVLamp(isUVLamp){
        this.isUVLamp=isUVLamp;
    }

    nextStep(){
        if (!this.isDead){
            switch(this.weather){
                case "sunny": 
                    this.setWater(this.water-5);
                    this.setNutrients(this.nutrients-2);
                    this.setSun(this.sun+5);
                    break;
                case "cloudy":
                this.setWater(this.water-2);
                    this.setNutrients(this.nutrients-2);
                    this.setSun(this.sun-2);
                    break;
                case "rain": 
                    this.setWater(this.water+2);
                    this.setNutrients(this.nutrients-2);
                    this.setSun(this.sun-2);
                    break;
                default:
                    this.setWater(this.water-2);
                    this.setNutrients(this.nutrients-2);
                    this.setSun(this.sun-2);
                    break;

            }
            if (this.isUVLamp){
                this.setSun(this.sun+5);
            }
        }
        this.health();
    }

    deathOrigin(){
        if(!this.isDead){
            return NOTDEAD
        }else if(this.water==100){
            return FLOOD
        }else if(this.sun==100){
            return FIRE
        }else if(this.nutiment==100){
            return FAT
        }else if(this.water==0){
            return NOWATER
        }else if(this.sun==0){
            return NOSUN
        }else if(this.nutiment==0){
            return HUNGER
        }else{
            return OTHER
        }
    }




    
}