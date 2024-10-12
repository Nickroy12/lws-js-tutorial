class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    run( speed){
        console.log(this.name + " is running " + speed)
    }
  }

  const Honda = new Car("Honda" , 2000);

  Honda.run('in 100 km hour');