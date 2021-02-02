// a space for your code along notes 🏄‍♀️
let myfruits = ['bananna', 'mango', 'apple', 'pear', 'srrawbery', 'rasbarry'];

myfruits.push('blacberry')



myfruits.forEach(function(fruit){
    
})

// DIY forEach
// brain of a callback iterator array mrthod
function myForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i])
    }
}
// myForEach(myfruits, function(fruit) {
//     console.log(fruit)
// })


// Map make a new array from an existing one
let myFevFruit = myfruits.map(function(fruit){
  return `one of my fev fruit is ${fruit}`
})
// console.log(myFevFruit)

let myFilteredFruit = myFevFruit.filter(function(fruit){
    if(fruit != 'bananna'){
        return true
    }
    else{
        return false
    }
})
console.log(myFilteredFruit)

// let allTheFruits = myFevFruit.reduce(fuction(total, fruit){

//     return total + '' + fruit
// })
