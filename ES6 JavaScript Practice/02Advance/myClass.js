class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname
        this.lastname = lastname
        this.middlename = this.middlename
        this.credit = credit
    }
    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }

    editName(newname) {
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }

    middlename(mname) {
        this.middlename = mname;
    }

}

class Teacher extends User {
    constructor(firstname, lastname, credit, subject) {
        super(firstname, lastname, credit);
        this.subject = subject;
    }

    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`;
        return fullname;
    }

    favDrink(drink){
        console.log(`My favourite drink is ${drink}`);
        
    }

}

const john = new Teacher('John', 'Anderson', 23, 'Python')
console.log(john);

console.log(john.getFullName());
john.editName('Johnny Anderson')
console.log(john.getFullName());

john.middlename('Johnny Boy')
// console.log(john.getFullName());


console.log(john);

john.favDrink('Ice Tea')



// const sammy = new User()
// console.log(sammy);
