// Interfaces
interface User{
    name: string;
    age: number;
    email? : string;
    readonly id: number; //readonly property cannot be modified after initialization
}

let user: User = {
    name: "Om",
    age: 21,
    id: 1
}


