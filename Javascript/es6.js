//Some Es6 syntax or examples
// - Arrow function
// - desctructure
// -spread operator
// - rest operator
// - map
// - tenary operators
// - modules
// - . Template Literals


//Arrown function: is the shorter form of Javascript function

//old way
function greet1(){
    console.log('hello world')
}
greet1()

//new way

const greet2 = (name)=>{console.log('hello world: ', name)}
greet2("Zion")


// desctructuring

const names = ['Ola', 'Danchare', 'Zion']
//console.log(names[0])
const [valu1] = names
console.log(valu1)


const cars = {
    name:"Toyota",
    company:"zion system",
    email:"zion@gmail.com",
    model:"345"
}

console.log(cars)
const {name1}= cars
console.log(name1)

const getCardetails = ({name,company,email,model})=>{
    console.log(company, email, name, model)
}

getCardetails(cars)


// Tenary Operator
let is_admin=true
if(is_admin){
    console.log('the user is an admin user')
}else{
    console.log('The user is not ')
}

//example one 
is_admin? console.log('the user is an admin user') :  console.log('The user is not ')

//example 2
if(is_admin){
    console.log('the user is an admin user')
}

is_admin && console.log('Admin true')


// Spread operator
const arr1 = [1, 2, 3];
// add the first array to the second array and make them a single array
const arr2 = [...arr1, 4, 5,78];
console.log(arr2)


const animal_names1 = ['Cow', 'lion','leopad']
const animal_names2 = ['sheep', 'goat','chicken']
const new_array = [...animal_names1,...animal_names2]
console.log(new_array)


// map array method

const products = [
    {
        name:'phone',
        price:'3000',
        category:'electronics'

    },
    {
        name:'phone',
        price:'3000',
        category:'electronics'

    },
    {
        name:'iron',
        price:'3000',
        category:'electronics'

    },
    {
        name:'table',
        price:'4000',
        category:'electronics'

    }
]

const data = products.map((index,value)=>{
    console.log(index.name, index.category)
})


// Template literal

const template = ()=>{
 console.log(`my name is,${1}  ${2}`)
}

template()



