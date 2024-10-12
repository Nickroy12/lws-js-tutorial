function Person(first, last , age,){
    this.firstName = first;
    this.lastName = last;
    this.age =age;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const user = new Person('Nick','Roy', 21);
const user2 = new Person('Songita','Roy', 29);
const user3 = new Person('Shamol','Roy', 54);

user.Nationality = 'Bangladesh'
console.log(user.Nationality)