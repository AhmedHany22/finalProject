import bcrypt from 'bcryptjs';

const data = {


  users: [
    {
      name: 'nancy',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true
    },
    {
      name: 'eman',
      email: 'user1@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: true
    },

    {
      name: 'ahmed',
      email: 'user2@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: true
    },
    {
      name: 'ali',
      email: 'user3@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: false
    },
    {
      name: 'mohamed',
      email: 'user4@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: false
    }

  ],
  products: [
    {   name: 'Dell XPS 15 (2020)',                      category:'laptop',               image: '../assets/Products/pro-1.jpg',  price: 184165, discount:200, countInStock: 17,brand:'Dell',     rating: 4.5, numReviews: 10,description: "this is laptop"        },
    {   name: 'Lenovo ThinkPad L13 Yoga',                category:'laptop',               image: '../assets/Products/pro-2.jpg',  price: 10190,  discount:600, countInStock: 17,brand:'Lenovo',   rating: 4.5, numReviews: 10,description: "this is laptop"        },
    {   name: 'Canon Zoemini S',                         category:'computer accessories', image: '../assets/Products/pro-3.jpg',  price: 61225,  discount:500, countInStock: 17,brand:'Canon',    rating: 4.5, numReviews: 10,description: "this is camera"        },
    {   name: 'Acer Swift 3 (2019)',                     category:'laptop',               image: '../assets/Products/pro-4.jpg',  price: 10976,  discount:800, countInStock: 17,brand:'Acer',     rating: 4.5, numReviews: 10,description: "this is laptop"        },
    {   name: 'Panasonic 49 Inch HD LED TV‎',             category:'smart screen',         image: '../assets/Products/pro-5.jpg',  price: 7599,   discount:200, countInStock: 17,brand:'sony',     rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'LG  65 Inch 4K Smart UHD LED TV‎',         category:'electronic',           image: '../assets/Products/pro-6.jpg',  price: 10000,  discount:500, countInStock: 17,brand:'LG',       rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'Redragon K563 Surya RGB',                 category:'laptop',               image: '../assets/Products/pro-7.jpg',  price: 880,    discount:100, countInStock: 17,brand:'Redragon', rating: 4.5, numReviews: 10,description: "this is laptop"        },
    {   name: 'Logitech  Wireless Keyboard',             category:'laptop',               image: '../assets/Products/pro-8.jpg',  price: 10190,  discount:90,  countInStock: 17,brand:'Logitech', rating: 4.5, numReviews: 10,description: "this is keyboard"      },
    {   name: 'Zero Wheel Mouse',                        category:'computer accessories', image: '../assets/Products/pro-9.jpg',  price: 500,    discount:50,  countInStock: 17,brand:'mouse',    rating: 4.5, numReviews: 10,description: "this is camera"        },
    {   name: 'Xiaomi POCO X3 Dual SIM Mobile',          category:'mobile',               image: '../assets/Products/pro-10.jpg', price: 4349,   discount:49,  countInStock: 17,brand:'Acer',     rating: 4.5, numReviews: 10,description: "this is laptop"        },
    {   name: 'Xiaomi Redmi Note 9 Pro Dual SIM Mobile', category:'smart screen',         image: '../assets/Products/pro-11.jpg', price: 7599,   discount:100, countInStock: 17,brand:'sony',     rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'Xiaomi Mi Note 10 Lite Dual SIM Mobile‎',  category:'electronic',           image: '../assets/Products/pro-12.jpg', price: 10000,  discount:200, countInStock: 17,brand:'LG',       rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'Acer Swift 3 (2020)',                     category:'laptop',               image: '../assets/Products/pro-13.jpg', price: 10976,  discount:200, countInStock: 17,brand:'Acer',     rating: 4.5, numReviews: 10,description: "this is laptop"        },
    {   name: 'Panasonic 43 Inch HD LED TV‎',             category:'smart screen',         image: '../assets/Products/pro-14.jpg', price: 7599,   discount:300, countInStock: 17,brand:'sony',     rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'LG  55 Inch 4K Smart UHD LED TV‎',         category:'electronic',           image: '../assets/Products/pro-15.jpg', price: 10000,  discount:400, countInStock: 17,brand:'LG',       rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    
   
  
  ],
  

  category: [
    { _id: 1, name: 'computer accessories' },
    { _id: 2, name: 'computer pc' },
    { _id: 3, name: 'laptop' },
    { _id: 4, name: 'smart screen' },
    { _id: 5, name: 'mobile phones' },
    { _id: 6, name: "computer parts" },
  ]
};

export default data;
