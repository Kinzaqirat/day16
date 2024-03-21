// calculating area of rectangle 
function calculateArea( width : number , height :number): number {
return width* height;
}
// with arrow function
let calculateAreaArrow = (width : number , height: number) : number => width*height;
console.log(calculateAreaArrow(5,7));
