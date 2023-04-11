const bike1={
gears:10,
currentGear:3,
changeGear: function(direction,changeBy){
    if(direction==='up'){
        this.currentGear += changeBy;
    }else {
        this.currentGear -=changeBy;
    }
}
}
console.log(bike1.gears);
console.log(bike1.currentGear);
bike1.changeGear('up',1);
console.log(bike1.currentGear);
bike1.changeGear('up',1);
console.log(bike1.currentGear);

//Create object with Constructor

function Bike(gears, startGear){
    this.gears=gears;
    this.currentGear=startGear;
}
Bike.prototype.changeGear = function(direction,changeBy){
    if(direction ==='up'){
        this.currentGear += changeBy;
    }else {
        this.currentGear -= changeBy;
    }
}
const bike = new Bike(10,3);
console.log(bike.gears);
console.log(bike.currentGear);
bike.changeGear('up',1);
console.log(bike.currentGear);

const bike2={
    frontGearIndex:0,
    rearGearIndex:0,
    transmission:{
        frontGearTeeth:[30,45],
        rearGearTheeth:[11,13,15,17,19,21,24,28,32,36]
    },
    calculateGearRatio:function(){
        let front=this.transmission.frontGearTeeth[this.frontGearIndex],
        rear =this.transmission.rearGearTheeth[this.rearGearIndex];

        return (front/ratio);
    },

    changeGear: function(frontOrRear,newValue){
        if(frontOrRear==='front'){
            this.frontGearIndex=newValue;
        } else {
            this.rearGearIndex=newValue;
        }
    }
};
// bike.frontGearIndex,
// bike.transmission.frontGearTeeth,
// bike.calculateGearRatio(),
// bike["frontGearIndex"],
// bike["transmission"]["frontGearTeeth"],
// bike["calculateGearRatio"]()

changeGear: function(frontOrRear, upOrDown){
    let shiftFunction = frontOrRear+upOrDown;
    this[shiftFunction]();
},
frontUp: function(){
    this.frontGearIndex += 1;
},
frontDown: function(){
    this.frontGearIndex -= 1;
},
rearUp: function(){
    this.rearGearIndex +=1;
},
rearDown: function(){
    this.rearGearIndex -=1;
}