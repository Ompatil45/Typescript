//Union (OR)
type Status = "pending" | "approved" | "rejected"
//any one of the options can be selected 

function setStatus(status: Status):void{
    console.log(`The status is: ${status}`);

}
setStatus("approved");

// type should be used for union and intersection
//Intersection(AND)
interface Circle{
    area: number;
}
interface Circle2{
    radius: number;
}
type bothCircles = Circle & Circle2;

let myCircle: bothCircles = {
    area: 50,
    radius: 10
}
