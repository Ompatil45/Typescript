// Generics
function identity<MyType>(arg: MyType): MyType{
    return arg;
}
//if we give 'any' type to the argument, while calling the function ts will assume the parameter of 'any' type
//but if we are returning a string,we want ts to consider the type as string,but ts will still consider 'any'
//to solve this problem we use generics
//it returns the correct type

let output1 = identity("output");
let output2 = identity(100);

//Generics for arrays : <T>
function genArrays<T>(arg: T[]):T | undefined{
    return arg[0];
}
let genericArr = genArrays([1,2,3,4,5]);