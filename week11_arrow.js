function printHello() {
    console.log('hello');
}
printHello();

const printBye = () => {
    console.log('bye');
}
printBye();

const add1 = function(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;
const square = x => x ** 2;
const square2 = square;

console.log("add1(2, 3):", add1(2, 3)); 
console.log("add2(4, 5):", add2(4, 5)); 
console.log("add3(6, 7):", add3(6, 7)); 
console.log("square(4):", square(4));  
console.log("square2(5):", square2(5)); 