import { UserInterface } from "../interfaces/user.interface";

const user: UserInterface = {
    id: 1,
    name: 'User1',
    status: true,
    dateAdded: new Date(),
    skills: [
        {
            name: 'Web development'
        },
        {
            name: 'Databases'
        },
    ],
    department: {
        id: 1,
        name: 'SYS'
    }
};

// console.log(user);


// For structure clone

const person = structuredClone(user);

person.status = false;
// console.log(person);
// console.log(user);



// For destructuring

const customer = { ...user };

customer.status = false;
// console.log(customer);
// console.log(user);



// For JSON parse - stringify

const employee = JSON.parse(JSON.stringify(user)); // Problem: Change data type Date to String

employee.status = false;
// console.log(employee);
// console.log(user);
