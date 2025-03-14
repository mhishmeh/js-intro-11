const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
  ];


//   let olderThan30 = 0;

//   for (let user of users) {
//     if (user.age > 30) olderThan30++
//   }
//   console.log(olderThan30)


const olderThan30 = users.reduce((counter,user) => user.age > 30 ? counter + 1 : counter, 0)
console.log(olderThan30)

const livesInChicago = users.reduce((counter, user) => user.address.city === 'Chicago' ? counter + 1 : counter,0)
const liveInIllinois = users.reduce((counter, user) => user.address.state === 'IL' ? counter + 1 : counter,0)

console.log(livesInChicago)
console.log(liveInIllinois)


const under35 = users.reduce((nameArr, user) => user.age < 35 ? nameArr.push(user.firstName) : nameArr,[])

console.log(under35)


// •	Find the most expensive product   	
// •	Find the product with the biggest quantity   
// •	Find all the product names   


const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },


]

// Calculate the total price of products in the cart           -> 2444
// Find the brands of all the products in the cart              -> [ 'Dell', 'Apple', 'Sony' ]
// Find all the items in the cart with their quantity           -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};


