// a space for your code along notes 🏄‍♀️
let myFruits = ['banana', 'mango', 'apple', 'pear', 'strawberry', 'rasberry']

myFruits.push('blackberry')

// for(let i = 0; i < myFruits.length; i++) {
//   console.log(myFruits[i])
// }

// myFruits.forEach(function(fruit) {
//   console.log(fruit)
// })

// DIY forEach
// Brain of a callback iterator array method
// function whateverIWanted(array, callback){
//   for(let i = 0; i < array.length; i++) {
//     callback(array[i])
//   }
// }
        
// whateverIWanted(myFruits, function(fruit) {
//   console.log(fruit)
// })
          
// Map make a new array from an existing one
let myFavoriteFruit = myFruits.map(function(fruit) {
  return `One of my favorite fruits is ${fruit}`
})

// console.log(myFavoriteFruit)

// let myFilteredFruits = myFruits.filter(function(fruit) {
//   if(fruit != 'banana') {
//     return true
//   } else {
//     return false
//   }
// })

// console.log(myFilteredFruits)

// let allTheFruits = myFruits.reduce(function(total, fruit) {
//   return total + ' ' + fruit
// })

// console.log(allTheFruits)

