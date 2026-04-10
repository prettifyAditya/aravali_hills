// array

// () => paranthesis, {} => curly braces, [] => square brackets
const myArr = [0, 1, 2, 3, 4, 5] //Elements can be of any type also it's resizable.
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // Array usually makes shallow copies.
// console.log(myArr[1]);   

// Array methods

// myArr.push(6) adds values to the array
// myArr.push(7)
// myArr.pop() delete last value of the array

// myArr.unshift(9) adds values to the starting of the array usually being used in to-do apps
// myArr.shift() delete the value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); if some value doesn't exists in array it's value will be -1

// const newArr = myArr.join() adds all the element of the array into a string

// console.log(myArr);
// console.log(typeof newArr); 


// slice, splice

console.log("A ", myArr);  

const myn1 = myArr.slice(1, 3) // Breaks down the array acc. to given parameters

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // The complete part is being excluded from the array hence changing the original array.
console.log("C ", myArr);
console.log(myn2);