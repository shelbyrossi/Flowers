
const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: ".90"

    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: "1.10"

    }]


const addFlower = (flowerObject) => {

    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

    flowerObject.id = idForNewFlower
    flowers.push(flowerObject)

}
addFlower(flowers)

// console.log(flowers)




const findExpensiveFlowers = () => {
    const expensiveFlowers = []


    for (const flower of flowers) {
        const affordableFlower = 1
        if (flower.price >= affordableFlower) {
            expensiveFlowers.push(flower)
        }

    }
    return expensiveFlowers  // Do not change this code
}

console.log(findExpensiveFlowers)


//     /*
//         Write a for..of loop that iterate the array
//         of flowers, and if the price of a flower is
//         greater than or equal to 1.00, it should be
//         added to the `expensiveFlowers` array.
//     */


// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}