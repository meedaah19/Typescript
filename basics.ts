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

// function & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray =insertAtBeginning(demoArray, -1);

const srtingArray = insertAtBeginning(['a', 'b', 'c'], 'd')



