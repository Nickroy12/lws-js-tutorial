class Car {
    constructor(name , year){
       this.name = name;
       this.year = year;
    }
}
 
const car1 = new Car("Toyota" ,  2007);
const car2 = new Car("BMW" ,  2008);
const car3 = new Car("Honda" ,  2000);


class player{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} & ${this.age} is playing`)
    }
}

const person1 = new player ( "Shakib" , );
const person2 = new player ( "Tamim" , 35);

person1.play();
person2.play()