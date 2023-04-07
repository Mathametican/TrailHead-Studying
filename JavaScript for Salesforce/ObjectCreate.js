const bike ={
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