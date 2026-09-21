//type guards - typeof, instanceof
//confirms the type of a value

function guard(value: string | number){
    if(typeof value === "string"){
        console.log(value);//if we add . after value, we can access multiple string methods
    }else{
        console.log(value);//here, we can access number methods
    }
}

//instanceof
class Dog{
    bark(){
        console.log("woof");
    }
}
class Cat{
    meow(){
        console.log("Meow")
    }
}

function animalSound(Animal: Dog | Cat){
    if (Animal instanceof Dog) {
        Animal.bark();
        
    }else{
        Animal.meow();
    }
}