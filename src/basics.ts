// let message: string = "Hello, Typescript!";
// console.log(message);

//primitives
let username: string = "Om";
let num: number = 10;
let isTrue: boolean = true;

//non-primitives
//Arrays
let numbers: number[] = [1,2,3,4];
let names: string[] = ["Om", "Patil"];

//tuples
let person: [string, number] = ["Om", 21];

//enum - it is used to define a set of named constants
enum Color{
    Red,
    Blue,
    Green
}
let favouriteColor: Color = Color.Green; //enums help us to take a specific value from a set of predefined values

//Any - used when we dont know the type of the value
//any should be avoided whenever possible
let myName: any = "Om";
myName = 10;
myName = true;

//Unknown - more safer than any, in such cases
let myVariable: unknown = "Hello";

//Functions
//if function is returning a value, we need to specify the return type of the function
//if function is returning nothing, we have to specify its type as void
function subscribe(message: string): number{
    console.log(message);
    return 1;
}

