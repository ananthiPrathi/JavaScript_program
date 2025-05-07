// console.log('javaScript main file')
// let a = 0
// a = 100

// console.log(a)
// const salary = 0
// salary = 3000
// console.log(salary)


// const person ={
//     firstName :'Ananthi',
//    LastName :'k',
//   age : 30

// }
// console.log(person.age)


//  let a = 10
//  console.log(a)

//  let a = 140
// //  let b = 10
// //  console.log(a+b)

// console.log(++a)

// const isEven = 5 % 2 == 0 ?'even' : 'add'
// console.log(isEven)

// const color = 'blue'
// switch(color){


// case 'red' : 
//  console.log('color is red')
//  break;
// case 'blue': 
//  console.log('color is blue')
//  break;
//  case 'pink' : 
//  console.log('color is pink')
//  break
//  default :
//  console.log('Not a color')
//  }



// function add(a,b){
//     return a+b
// }

// const sum = add(13,67)
// console.log(sum)


// function username(name){
//     console.log(name)
// }

// username('Ananthi')
// username('prathi')
// username('mahesh')


// const arrowadd = (a,b) => a+b
// const sum = arrowadd(13,67)
// console.log(sum)

// const name = 'goodmorning Everyone'     // globe scope
// function  truename(){    // LocalScope
//     const name = 'Hello Everyone'
//     console.log(name)
// }
//     console.log(name)
//     truename()

// const name = 'ananthi k '
// function truename(){
//     const name = 'Mahesh'
//     // if(true)
//     // {
//     //     const name = 'prathi'
//     //     console.log(name)
//     // }//block Scope
//        console.log(name)
// }
       
//         //  console.log (name)
//          truename()

// function nameprint(){
//     if(flase){
//     var name = 'Happy Learning'}

// console.log(name)
// }   
// nameprint()   //ased on type of variable


// coercion 

//  console .log(10 + '20')
//  console.log(20 + ' ')
//  console.log(150 +  + "  "+ 'Happy to see that')
// console .log (150 - 30)

// Logical Operators
// const a = 10
// const b = 'Hello'
// const c = null;

// console.log( b||c)
// console.log(a && b)
// console.log(b && c)

// function greet(name){
//     console.log(`Hello, ${name || 'visitor'}!`)
//     }

//     greet('ananthi')

// Equlaity operators
// console.log(42 == 42)
// const a = 10
// let b = '10'
// console.log(a === b)
// console.log(a == b)


//Nullish Coalescing operator
// let result = null 
// let result;
// result = result ?? 'happy'
// console.log(result)


//Type convension

// console.log(typeof 10)
// console.log (typeof 'ananthi')
// console.log({} instanceof Array)
// console.log ({} instanceof Object)

// using a function change onetype to another type
// console.log(Number("10"))
// console.log("10")
// console.log(String(10))
// console.log(parseInt("10px"))

//String methods
// let a = "      Happy new year    "
// console.log(a.length)
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.charAt(2))
// console.log(a.indexOf("new"))
// console.log(a.lastIndexOf('a'))
// console.log(a.split(' '))
// console.log(a.replace('year','Life'))
// // console.log(a.trim())
// console.log(a)


//Functions
// 1. method
// function namePrint(name)
// {
//     console.log(name)
// }
// namePrint("Hello ananthi")

//2.another method
//   function add (){
//   return 30+40
// }
// console.log(add())

//3.another method
//   function add (a,b){
//     if(a&&b){
//   return a+b
//     }
//     return 0
//  }
//  console.log(add(3,6))


// closer
// function outer(){
//     let a =10
//     function inner(){
//         let b = 20
//         console.log(a+b)
//     }
//     return inner
// }
//   let someFn = outer()
//  someFn()



//Array

let colors = ['red','blue','yellow']
// let fruits = new Array ('apple','banana','orange','grapes')
// console.log(colors)
// console.log(colors.length)
// console.log(fruits.length)
// if(colors.length > 0){
//     console.log("correct")
// }
// else{
//     console.log("It is not correct")
// }
// colors.push('violet')
// console.log(colors)
// colors.unshift('violet') // shift first 
// console.log(colors)
// colors.pop()  // remove the last  position value
// console.log(colors)

// colors.shift() // remove the first one value
// console.log(colors)


console.log(colors.indexOf('yellow'))