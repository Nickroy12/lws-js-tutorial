// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get fullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  


const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";

  console.log(person.language)