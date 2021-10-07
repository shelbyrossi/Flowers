      /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */



const flowers = [
    {
        id: 1,
        name: "roses",
        color: "white",
        quantity: 12,
        price: 6

    },
    {
        id: 2,
        name: "babysbreath",
        color: "blue",
        quantity: 3,
        price: .60
    }

]


const addFlowerToInventory = (flowerObject) => {

    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

        flowerObject.id = idForNewFlower
     flowers.push(flowerObject)

}

const newFlower = {
   
    
    name: "lillies",
    color: "pink",
    quantity: 2,
    price: 12


}



    addFlowerToInventory(newFlower) 
 

 
        console.log(flowers)
    

  

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  
    
      
    // Do not change this code

    // for (flower of flowers) {
    //     if (flower.price >= 1.00) {
    //         console.log(`The ${flower.name} is ${flower.cost}`)
    //     }
    // }

//     /*
//         Write a for..of loop that iterate the array
//         of flowers, and if the price of a flower is
//         greater than or equal to 1.00, it should be
//         added to the `expensiveFlowers` array.
//     */




//     return expensiveFlowers  // Do not change this code

}




// // Do not touch this code
// module.exports = {
//     findExpensiveFlowers, addFlower
// }

// const flowers = [

// ]

// const addFlower = (flowerObject) => {
//     /*
//         This function should add an `id` property
//         to the object that was sent to the function.
//         The value of the `id` property should be 1
//         greater than the current maximum `id` in the
//         array.

//         Once the `id` property has been added to the,
//         object, the object should then be put into the
//         `flowers` array.
//     */


// }


// const findExpensiveFlowers = () => {
//     const expensiveFlowers = []  // Do not change this code


//     /*
//         Write a for..of loop that iterate the array
//         of flowers, and if the price of a flower is
//         greater than or equal to 1.00, it should be
//         added to the `expensiveFlowers` array.
//     */




//     return expensiveFlowers  // Do not change this code
// }




// // Do not touch this code
// module.exports = {
//     findExpensiveFlowers, addFlower
// }