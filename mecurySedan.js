//this includes the vehicle class as a module
const VehicleModule = require("./Vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule.Vehicle {
    // Constructor Method
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false;
    }    
}

let v2 = new Car("Mercury", "A28", 2023, 'Red', 400);
console.log(v2.fuel);