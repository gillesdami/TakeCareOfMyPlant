
function init() {

    plant=new Plant(50,50,50,'sunny',true);
    show= new ShowPlant(plant)
    
    
    show.setImage();
    show.setHealthBars();
    show.setMeteo()
    
}