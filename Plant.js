
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
        }else if(nutiments<0){
            this.nutiment=0;
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
            return "plant not dead"
        }else if(this.water==100){
            return "flood"
        }else if(this.sun==100){
            return "fire"
        }else if(this.nutiment==100){
            return "fat"
        }else if(this.water==0){
            return "no water"
        }else if(this.sun==0){
            return "no light"
        }else if(this.nutiment==0){
            return "no nutriment"
        }else{
            return "bad tratement"
        }
    }




    
}