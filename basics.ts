//Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Hammedat';

let isStudent: boolean;

isStudent = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string,
    age: number;
};

person = {
    name: 'Max',
    age: 32
};

let people: {
    name: string;
    age: number;
}[];

people = [
    {
        name : 'Hameedat',
        age : 15
    }
]

// Type Inference

let course = 'React -The Complete Guild';

//Union Type

let topic : string | number | boolean =  'React -The Complete Guild';

topic = 5678;


// Type Aliases

type Person = {
    name: string,
    age: number;
};

let member: Person;

member = {
    name: 'Max',
    age: 32
}

let community :  Person[];

community = [
    {
        name : 'Hameedat',
        age : 15
    }
]





