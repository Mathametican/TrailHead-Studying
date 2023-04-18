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
  let gearRatio= calculateGearRatio(42, 30);
  console.log(gearRatio); // 1.4

  // call function
let gearRatio1 = calculateGearRatio1(90,30);
// function is declared after the line it is called
// this is allowed in function declaration
function calculateGearRatio1(driverGear, drivenGear){
  return (driverGear / drivenGear);
}
console.log(gearRatio1); // 3

const calculateGearRatio2 = function(driverGear, drivenGear){
    return (driverGear / drivenGear);
  }
  // the rest works the same
  let gearRatio2 = calculateGearRatio2(60, 30);
  console.log(gearRatio2); // 2

  // when invoked, this function will assign a function
function gearFactory(){
    return function(driverGear, drivenGear){
      return (driverGear / drivenGear);
    }
  }
  // calculateGearRatio can now be invoked as a function
  const calculateGearRatio3 = gearFactory();
  // and all the rest

  let myArray = [1, 5, 11, 17];
let newArray = myArray.map( function(item){ return item / 2 } );
console.log(newArray); // [0.5, 2.5, 5.5, 8.5]

let bike6 = {

    calculateGearRatio4: function() {
      let front = this.transmission.frontGearTeeth[this.frontGearIndex],
      rear = this.transmission.rearGearTheeth[this.rearGearIndex];
      return (front / rear);
    },

  }
  console.log(bike6);

  // invoke function and assign value to ratioResult
let ratioResult = bike6.calculateGearRatio4();
// assign calculateGearRatio function to a new pointer
const ratioFunction = bike6.calculateGearRatio4;

var handleClick = function(event) {
    console.log(event.type);  // click
    console.log(event.currentTarget); // the thing you clicked
    console.log(event.screenX); // screen X coordinate
    console.log(event.screenY); // screen Y coordinate
  }