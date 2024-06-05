//variable types
//let, var, const 
//var: can be use and access every where in our code
//let: can only be access within the code block
//let: value can be change
//const : contain constance value



var variable_name = 'information or data' ;
var school = 'Danchare international college' ;
var amount = 1000.00 ;
var age = 30 ;

age = 50 ;

console.log(variable_name) ;
console.log(school) ;
console.log(amount) ;
console.log('my age is: ', age) ;
 
console.log('display without diclaring') ;

const my_name = 'Sherif';
const school_name = "Sokoto state uni."
const profession = "Software developer"

console.log('my name is ' + my_name, 'i am schooling at ' + school_name + 'i am a ' + profession)




//Data type
// it simply the types of data javascript with or can recorgnise; primitive data and none primitive

// Number 
var view_count = 12345
console.log(view_count)
document.write(view_count)
console.log(typeof(view_count))
document.write(typeof(view_count))

//Boolean
// it simply means  true or false , yes or no, 1 or 0

const is_admin =false
console.log(is_admin)
console.log(typeof(is_admin))


//Undefine
//if variables is not define or declare
var sherif='olamide'
console.log(sherif)

//Null
var ola = null
console.log(typeof(ola))

//Objects
//cars

var laptop =  {
    'name':'Hp booklight',
    'ram':'100gb',
    'rom':"700gb hdd",
    'color':"white"
}

console.log(laptop.name)
console.log(laptop.color)
console.log(laptop)

var names = ['olamide','sherif', 'bright','sheden']
console.log(names)
//array of objects
var array_of_objects = [
    {
        'name':'Hp booklight',
        'ram':'100gb',
        'rom':"700gb hdd",
        'color':"white"
    },
    {
        'name':'Hp booklight',
        'ram':'100gb',
        'rom':"700gb hdd",
        'color':"white"
    },
    {
        'name':'Hp booklight',
        'ram':'100gb',
        'rom':"700gb hdd",
        'color':"white"
    }

]
console.log(array_of_objects)

//another assignment what read about Json(Javascript object notation)

// string 
var myschool = "Univesity1234567890pxdfghjkl;-09876545678909876trtyuiop"
console.log(typeof(myschool))

var money = 12.00
console.log(parseFloat(money))



//Arithemetics operators
// they are basically use for math. calculations
//+,-,*,/,%

var x
var y
var z

x= 2
y= 5
z = y%x
console.log('product= ', z)


//logical operators
// && - And
// & - or
// | - or
// > - greater than
// < - less thab
// => - egual to or gr
//example
var user_balance = 0

if (user_balance <= 0){
    console.log('insuficient balanve')

}
// = - assignment 
// === - equal to
// !== - not equal to

var g_l = x >= y;
console.log(g_l)


const same = x | y;
console.log('logical same: ', same)

// Control flow, or conditonal statement
// syntax
x= 2;
y = 5;

if(x === 5){
    console.log('they are the same')
}else{
    console.log('they are not the same')
}

var password1 = 1234567
var password2 = 1234567

if (password1 !== password2){
    console.log('Password doesnt match, try again')
}else{
    console.log('Login successful')
}


var minimum_age = 18
const user_age = 17

if(user_age >= minimum_age){
    console.log('u can vote')
    

}
else if(user_age < minimum_age){
    console.log('you are not eligble to vote')
}
else{
    console.log('Invalid')
    
}




// switch statement


//Loops: it is an iteration or repeation
// types of loops for loop, while , do while loop
//1 - for loop

// for loop syntax

let ola_s=['Mercedes', 'Larmbogini', 'Toyota']
var i=0; 

//ola_s.map((key, index)=>(
//    console.log(key, index)
//))


for(;i < ola_s.length; i++){
    console.log(i)

}

// for in

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  //text += person[x];
  console.log(x.fname)
}


// for in loop array example

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  console.log(x)
}


// while loop

// dom document object ma

console.log('while start here')
var i = 0
while(i< 5){
    
    console.log(i)
    document.write(i)
 i++
  
}


// do while loop
// the syntax

var m= 0

do{
    console.log('danchare', m)
    m++
}while(m< 5)

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (m in cars){
    console.log(cars[m])
}

for(let n=1; n<21; n++){
    if(n === 5){
       console.log('found')
    }
    console.log(n)
    
        
}



