//string Method
//strings methods
//String length
//String charAt()
//String charCodeAt()
//String at()
//String [ ]
//String slice()
//String substring()
//String substr()
const data = "Dancharex2345ddffdghjkl"
console.log(typeof(data))

//String length: it is  used to get the total length of a string vale
data_length = data.length
console.log(data_length)

dat_charat = data.charAt(8)
console.log(dat_charat)

data_chartcodeAt = data.charCodeAt(4)
console.log(data_chartcodeAt)

data_at = data.at(-2)
console.log('at() method' +" "+ data_at)

const new_data = 'Hello world'
console.log(new_data[0])

//slice method
const data_slice = data.slice(8)
console.log(data_slice)

var str = "Hello, World!";
console.log(str.substring(0, 5)); // Outputs: Hello
console.log(str.substring(5));    // Outputs: World!


// to loower case methood
var str = "Hello, World!";
console.log(str.toLowerCase())

// to upper case : to change the string to Capital letter

var str = "hello world"
console.log(str.toUpperCase())


// concate mathod : to link together to variable or value
var text
//text = "Hello" + " " + "World!";
text = "Hello"
var text2 = text.concat(" ", "OLamide");
console.log(text2)


let text1 = "      Hello World!      ";
var text2 = text1.trim();
console.log(text2)


var text = "Please locate where 'locate' occurs!";
var index = text.indexOf("locate");
console.log(index)


//Numbers method
//Method	Description
//toString()	Returns a number as a string
//toExponential()	Returns a number written in exponential notation
//toFixed()	Returns a number written with a number of decimals
//toPrecision()	Returns a number written with a specified length
//valueOf()	Returns a number as a number

var value_number = '30'
//tostring : it convert numbert to string
console.log(value_number.toString())

// toExponential
let x = 9.656;

console.log(x.toExponential(2))

console.log(x.toExponential(4))
console.log(x.toExponential(6))


// toFixed 
// eg 

value_number = 20.88888
//console.log(value_number.fixed(2))


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