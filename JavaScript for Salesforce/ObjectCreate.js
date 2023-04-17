const bike1={
<<<<<<< HEAD
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
    
    function Bike1(gears, startGear){
        this.gears=gears;
        this.currentGear=startGear;
    }
    Bike1.prototype.changeGear = function(direction,changeBy){
        if(direction ==='up'){
            this.currentGear += changeBy;
        }else {
            this.currentGear -= changeBy;
        }
    }
    const bike = new Bike1(10,3);
    console.log(bike.gears);
    console.log(bike.currentGear);
    bike.changeGear('up',1);
    console.log(bike.currentGear);
    
    const bike2={
        frontGearIndex:0,
        rearGearIndex:0,
        transmission:{
            frontGearTeeth:[30,45],
            rearGearTheeth:[11,13,15,17,19,21,24,28,32,36],
        },
        calculateGearRatio:function(){
            let front=this.transmission.frontGearTeeth[this.frontGearIndex],
            ratio =this.transmission.rearGearTheeth[this.rearGearIndex];
    
            return (front/ratio);
        },
    
        changeGear: function(frontOrRear,newValue){
            if(frontOrRear==='front'){
                this.frontGearIndex=newValue;
            } else {
                this.rearGearIndex=newValue;
            }
        },
    
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
    
    }
    console.log(bike2.calculateGearRatio());
    //Calls the frontUp() function
    bike2.changeGear("front","Up");
    console.log(bike2.calculateGearRatio());
    //calls the rearUp() function
    bike2.changeGear("rear","Up");
    console.log(bike2.calculateGearRatio());
    
    bike2.isTandem = true;
    bike2.popAWheelie = function() {
    };
    const bike3 = new Bike1();
    const bike4 = new Bike1();
    bike3.isTandem = true;
    console.log(bike3.isTandem); // true
    console.log(bike4.isTandem); // undefined
    
    class Bike {
        constructor(gears, startGear){
            this.gears=gears;
            this.currentGear = startGear;
        }
        changeGear(direction,changeBy){
            if(direction === 'up'){
                this.currentGear +=changeBy;
            } else {
                this.currentGear -=changeBy;
            }
        }
    }
    const bike5= new Bike1(10,5);
    console.log(bike5.currentGear);
    bike5.changeGear('up',2);
    console.log(bike5.currentGear);
    
 // declare function
 function calculateGearRatio(driverGear, drivenGear){
    return (driverGear / drivenGear);
  }
  // call function
  let gearRatio = calculateGearRatio(42, 30);
  console.log(gearRatio); // 1.4
=======
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

// declare function
function calculateGearRatio(driverGear, drivenGear){
    return (driverGear / drivenGear);
  }
  // call function
  let gearRatio = calculateGearRatio(42, 30);
  console.log(gearRatio); // 1.4

//Create object with Constructor

function Bike1(gears, startGear){
    this.gears=gears;
    this.currentGear=startGear;
}
Bike1.prototype.changeGear = function(direction,changeBy){
    if(direction ==='up'){
        this.currentGear += changeBy;
    }else {
        this.currentGear -= changeBy;
    }
}
const bike = new Bike1(10,3);
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
    },

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

}
console.log(bike2.calculateGearRatio());
//Calls the frontUp() function
bike2.changeGear("front","Up");
console.log(bike2.calculateGearRatio());
//calls the rearUp() function
bike2.changeGear("rear","Up");
console.log(bike2.calculateGearRatio());

bike2.isTandem = true;
bike2.popAWheelie = function() {
};
const bike3 = new Bike();
const bike4 = new Bike();
bike3.isTandem = true;
console.log(bike3.isTandem); // true
console.log(bike4.isTandem); // undefined

class Bike {
    constructor(gears, startGear){
        this.gears=gears;
        this.currentGear = startGear;
    }
    changeGear(direction,changeBy){
        if(direction === 'up'){
            this.currentGear +=changeBy;
        } else {
            this.currentGear -=changeBy;
        }
    }
}
const bike5= new Bike(10,5);
console.log(bike5.currentGear);
bike5.changeGear('up',2);
console.log(bike5.currentGear);


>>>>>>> dd5a0f2018bc8c27a3cd53aad861e72739705a8a
