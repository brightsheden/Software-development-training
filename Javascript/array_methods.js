//Array Methods
//Array length
//Array toString()
//Array at()
//Array join()
//Array pop()
//Array push()
//Array shift()
//Array unshift()
//Array delete()
//Array concat()
//Array copyWithin()
//Array flat()
//Array splice()
//Array toSpliced()
//Array slice()

// array lenght: it return the total number of the value in a array
// array to string it convert array to strings
// array at() return the value of the index
//array join to add a value in between the values in an array
// array pop to remove


var fruits = ['Orange', 'Mango', 'Apple', 'Banana']
console.log(fruits)

// length method
var fruit_length = fruits.length
//console.log(fruit_length)

// //Array toString(): it is used to convert an array to string
var fruit_tostring = fruits.toString(3)
//console.log(fruit_tostring)

//Array at() method
var at_method = fruits.at(0)
//console.log(at_method)

//array join method to add a value in between the values in an array
var array_join = fruits.join(' and ')
//console.log(array_join)

// array pop() is use to remove the last value in an array
var array_pop = fruits.pop()
console.log(array_pop)
console.log(fruits)

//Array push() method 
var array_push = fruits.push('Olamide')
//console.log(array_push)
//console.log(fruits)

//rray shift()
//Array unshift()

var array_shift = fruits.shift()
//console.log(array_shift)
//console.log(fruits)

var array_unshift = fruits.unshift("Le  mon","danchare")
//console.log(array_shift)
//console.log(fruits)


//Array delete()
//Array concat()

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)