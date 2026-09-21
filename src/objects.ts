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

interface Product{
    name: string;
    price: number;
    getDiscount(percentage: number): number;
}

let laptop: Product = {
    name: "Macbook",
    price: 100000,
    getDiscount(percentage : number): number{
        return this.price*(percentage/100);
    }
}


