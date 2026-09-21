//basic function
function basic(a: number, b: number): number {
    return a + b;
}

//optional parameters - when we are not sure if the parameter will be passed or not, we can make it optional by adding a question mark after the parameter name
function optional(name: string, greeting?: string): string{
    if(greeting){
        return `${greeting} ${name}`;
    }
    return `Hello ${name}`;
}

//default parameters
function multiply(a: number, b: number = 1): number{
    return a*b;
}

//rest parameters - when we are not sure how many parameters will be passed, we can use rest parameters
function sum(...numbers: number[]): number{
    return numbers.reduce((total, n) => total + n, 0);

}

//Arrow functions
const divide = (a:number, b:number): number => a/b;
