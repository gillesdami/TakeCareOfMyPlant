
function init() {
    const plante1 =new Plant(120,50,50,'sunny',true);

    console.log(plante1);

    const plante2= new Plant(50,50,50,'sunny',true);
    console.log(plante2);
    for(let i=0;i<10;i++){
        plante2.nextStep();
        console.log(plante2);
    }
    
}