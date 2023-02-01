//this includes the vehicle class as a module
const VehicleModule = require("./Vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule.Vehicle {
    // Constructor function
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false;
    }    

    // Method - loadPassenger
    loadPassenger(num) {
        if(this.passenger + num <= this.maximumPassengers)
        {
            this.passenger = this.passenger + num;
            console.log("Loaded " + num + " passengers")
        }
        else
        {
            console.log("Cannot load " + num + " passengers. Will exceed capacity")
        }
    }

}

let v2 = new Car("Mercury", "A28", 2023, 'Red', 400);
console.log(v2.fuel);
v2.loadPassenger(3);
v2.loadPassenger(2);
v2.loadPassenger(1);
