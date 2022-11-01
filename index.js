
function sumPositiveNumbers(arrayNumbers){

  const positives = arrayNumbers.filter(num => num > 0).reduce((x,y) => x+y, 0);
  return positives
    
}
const arr = [1, -6, 8, -23, 645, -87, 54];
 const numb = sumPositiveNumbers(arr);
 console.log(numb);


let str = [
    "Dorothy",
    "Emily",
    "Melisa",
    "Teo",
    "Maria",
    "Mathew",
    "Dorothy",
    "Melisa",
    "Emily",
    "Teo",
    "Dorothy",
    "Mathew",
    "Mathew",
    "Mathew",

].reduce(function (name, count){
    return name[count] ? ++name[count] : name[count] = 1, name 
}, {}) ;

console.log(str);


function addAsync (x,y){
    return new Promise ((resolve, reject) => {
        if (
           typeof x == "number" &&
           typeof x !== "undefined" &&
           typeof y == "number" &&
           typeof y !== "undefined"
        ) {
           resolve("true");
        } else {
           reject("error!");
        }
     });
  };
  addAsync(8,undefined)
  .then(value => console.log(value))
  .catch(error => console.log(error))




class Car {
    constructor (brand,model, speed = 0, motion = "The car is not moving") {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = motion;
    }
    check_motion = () => {
        if (this.speed > 0) {
           this.motion = "The car is moving";
        } else {
            this.motion = "The car is not moving";
        }
    };

    status = () => {
        return `${this.brand} ${this.model} is moving ${this.speed}km/h and ${this.motion}`;
     };

    accelerate = (speed) => {
        this.speed += speed
        this.check_motion();
    
    }
    break = (speed) => {
        if (
            speed > this.speed
        ){
            this.speed = 0
        } else {
            this.speed -= speed
        }
        this.check_motion();
    }

    emergency_brake = () => {
        this.speed = 0
        this.check_motion();
     };
}

 let newCar = new  Car("JAGUAR", "Land Rover");
 console.log(newCar.status());
 newCar.accelerate(120);
 console.log(newCar.status());
 