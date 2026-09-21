// Type alias
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 5, y: 10 };

//type alias for primitives
type ID = string | number;

let id: ID = "abcxyz";
let id2: ID = 123456;

//difference between types and interfaces

//1. Interfaces can be extended, types cannot
interface Animal{
    name: string;
}
interface Dogg extends Animal{
    breed: string;
}
let myDog: Dogg = {
    name: "tommy",
    breed: "golden retriever"
}

//2. interface can be repeated again,types cannot
interface Human{
    name: string;
}
interface Human{
    age: number;
}
let myself: Human = {
    name: "om",
    age: 21
} 

//when both of these are preferred?
//Use interface for object shapes
//use types for unions and intersections