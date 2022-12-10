/*
1.let const
2.templete string
3.Arrow function
3.1 parameter / 5 

*/

// const arrowFunction = (a,b)=>{
//    const add1 = a + 2;
//    const add2 = b + 2;
//    const mul = add1 * add2;
//    return mul;
// }

// const arrowFunction = (a,b) => {
//     x = a + 2;
//     y = b + 2;
//     return x * y;
// }
// console.log(arrowFunction(2,3))

// const mul3 = (a,b,c) => a*b*c;
// console.log(mul3(2,3,4))


// 2. templete String

const product = {
phone: {price: 1200, color:'red'},
laptop: {price: 12200, color:'black'},
}
const result = `The price of the phone is: ${product.phone.price} and color is: ${product.phone.color}`;
// console.log(result);

//3.a arrow function parameter / 5

const value = x => x / 5;
// console.log(value(10));

// 3.b
const value2 = (x,y) => (x+2) * (y+2);
// console.log(value2(1,2))

//3.c 
const value3 = (x,y,z) => x*y*z;
// console.log(value3(2,2,2))

//3.d 
const addParameter = (x,y) => {
    const add1 = x + 2;
    const add2 = y + 2;
    return add1 * add2;
}
// console.log(addParameter(2,3))

//4. [home work] jS function declaration vs Arrow function;

//5.
const array = [1,2,3,4,5];
const multiply = array.map(x => x*5);
// console.log(multiply);

//6.
const array2 = [1,2,3,4,5,6];
const odd = array2.filter( (x) => x % 2 == 1 )
// console.log(odd);

//7. 
const products = [
    {object: 'mobile',price:5000},
    {object: 'Laptop',price:4000}
]
const findPrice = products.find(x => x.price == 5000)
// console.log(findPrice)

//8.
const products2 = {
    phone:{model:'nokia', price: 7000, color: 'red',},
    laptop:{model:'Asus', price: 78000, color: 'black'}
}
const {model,price} = products2.laptop;
// console.log(model,price);

//9.
const [first,second,third]=[1,2,3]
// console.log(third);

//10.
const defaultParameter = (x, y , z = 7) => {
    return x * y * z;
}
console.log(defaultParameter(4,3));