import { UserInterface } from "../interfaces/user.interface";

const arrUsers: UserInterface[] = [
    {
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
    },
    {
        id: 2,
        name: 'User2',
        status: true,
        dateAdded: new Date(),
        skills: [
            {
                name: 'Devops'
            },
            {
                name: 'Movil development'
            },
        ],
        department: {
            id: 1,
            name: 'SYS'
        }
    }
];

// console.log(arrUsers);


// For structured clone

const arrPersons = structuredClone(arrUsers);

arrPersons[0].status = false;

// console.log(arrUsers);
// console.log(arrPersons);



// For destructuring: Cannot for deep cloning



// For JSON parse - stringify: Change data type Date to String

const arrEmployees = JSON.parse(JSON.stringify(arrUsers));

console.log(arrUsers);
console.log(arrEmployees);
