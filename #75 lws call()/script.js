const person = {
    fullName: function(city , Country) {
      return this.firstName + " " + this.lastName + ' '+'is' + ' '+'from' +' '+ city  + Country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  console.log(person.fullName.call(person1, "Dhaka" , "Bangladesh"));