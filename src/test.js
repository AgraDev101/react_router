let products = [
    {
        id: 1,
        price: 27
    },
    {
        id: 2,
        price: 22
    },
    {
        id: 3,
        price: 62
    },
    {
        id: 4,
        price: 45
    }
]

// linear search algo

let searchElement = 22

for (let i = 0; i < products.length; i++) {
    if (products[i].price == searchElement) {
        console.log("found " + searchElement + " at position", i + 1)
    }
}

// bubble sort algo

let temp

for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - 1; j++) {
        if (products[j].price > products[j+1].price) {
            temp = products[j]
            products[j] = products[j + 1]
            products[j + 1] = temp
        }
    }
}

console.log(products)