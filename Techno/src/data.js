import bcrypt from 'bcryptjs';
const data = {

<<<<<<< HEAD
  users: [
    {
      name: 'nancy',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'eman',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },


  ],
  products: [
    {   name: 'Dell XPS 15 (2020)', category:'laptop', image: 'pro-1.jpg', price: 184165, countInStock: 17,brand:'Dell', rating: 4.5, numReviews: 10,description: "this is laptop"  },
    {   name: 'Lenovo ThinkPad L13 Yoga', category:'laptop', image: 'pro-1.jpg', price: 10190, countInStock: 17,brand:'Lenovo', rating: 4.5, numReviews: 10,description: "this is laptop"  },
    {   name: 'Canon Zoemini S', category:'computer accessories', image: 'pro-1.jpg', price: 61225.61, countInStock: 17,brand:'Canon', rating: 4.5, numReviews: 10,description: "this is camera"  },
    {   name: 'Acer Swift 3 (2019)', category:'laptop', image: 'pro-1.jpg', price: 10976.33, countInStock: 17,brand:'Acer', rating: 4.5, numReviews: 10,description: "this is laptop"  },
    {   name: 'Panasonic 49 Inch HD LED TV‎', category:'smart screen', image: 'pro-1.jpg', price: 7599, countInStock: 17,brand:'sony', rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'LG  65 Inch 4K Smart UHD LED TV‎', category:'electronic', image: 'pro-1.jpg', price: 10000, countInStock: 17,brand:'LG', rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'Redragon K563 Surya RGB', category:'laptop', image: 'pro-1.jpg', price: 880, countInStock: 17,brand:'Redragon', rating: 4.5, numReviews: 10,description: "this is laptop"  },
    {   name: 'Logitech  Wireless Keyboard', category:'laptop', image: 'pro-1.jpg', price: 10190, countInStock: 17,brand:'Logitech', rating: 4.5, numReviews: 10,description: "this is keyboard"  },
    {   name: 'Zero Wheel Mouse', category:'computer accessories', image: 'pro-1.jpg', price: 500, countInStock: 17,brand:'mouse', rating: 4.5, numReviews: 10,description: "this is camera"  },
    {   name: 'Xiaomi POCO X3 Dual SIM Mobile', category:'mobile', image: 'pro-1.jpg', price: 4349, countInStock: 17,brand:'Acer', rating: 4.5, numReviews: 10,description: "this is laptop"  },
    {   name: 'Xiaomi Redmi Note 9 Pro Dual SIM Mobile', category:'smart screen', image: 'pro-1.jpg', price: 7599, countInStock: 17,brand:'sony', rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    {   name: 'Xiaomi Mi Note 10 Lite Dual SIM Mobile‎', category:'electronic', image: 'pro-1.jpg', price: 10000, countInStock: 17,brand:'LG', rating: 4.5, numReviews: 10,description: "this is smart screen"  },
    
   
=======
  products:[
    {_id:"1",  data:[{name:'camera',  description:"this is camera"}],   price:2000, discount:200,  categoryId:{id:1}, rating: 4.5, numReviews: 2, countInStock: 17, imagesUrls:['../assets/Products/pro-1.jpg' ]},
    {_id:"2",  data:[{name:'phone',   description:"this is phone"}],    price:1000, discount:100,  categoryId:{id:2}, rating: 5.0, numReviews: 3, countInStock: 38, imagesUrls:['../assets/Products/pro-2.jpg' ]},
    {_id:"3",  data:[{name:'labtop',  description:"this is labtop"}],   price:800,  discount:50,   categoryId:{id:3}, rating: 3.5, numReviews: 4, countInStock: 41, imagesUrls:['../assets/Products/pro-3.jpg' ]},
    {_id:"4",  data:[{name:'camera',  description:"this is camera"}],   price:5000, discount:300,  categoryId:{id:4}, rating: 3.0, numReviews: 5, countInStock: 62, imagesUrls:['../assets/Products/pro-4.jpg' ]},
    {_id:"5",  data:[{name:'labtop',  description:"this is labtop"}],   price:7000, discount:500,  categoryId:{id:5}, rating: 3.5, numReviews: 3, countInStock: 95, imagesUrls:['../assets/Products/pro-5.jpg' ]},
    {_id:"6",  data:[{name:'phone',   description:"this is camera"}],   price:500,  discount:20,   categoryId:{id:6}, rating: 4.5, numReviews: 2, countInStock: 20, imagesUrls:['../assets/Products/pro-6.jpg' ]},
    {_id:"7",  data:[{name:'mouse',   description:"this is mouse"}],    price:9000, discount:1000, categoryId:{id:1}, rating: 4.5, numReviews: 4, countInStock: 31, imagesUrls:['../assets/Products/pro-7.jpg' ]},
    {_id:"8",  data:[{name:'keyboard',description:"this is keyboard"}], price:7000, discount:1000, categoryId:{id:2}, rating: 4.5, numReviews: 3, countInStock: 22, imagesUrls:['../assets/Products/pro-8.jpg' ]},
    {_id:"9",  data:[{name:'watch',   description:"this is watch"}],    price:600,  discount:50,   categoryId:{id:3}, rating: 3.5, numReviews: 5, countInStock: 81, imagesUrls:['../assets/Products/pro-9.jpg' ]},
    {_id:"10", data:[{name:'iphone',  description:"this is iphone"}],   price:1000, discount:200,  categoryId:{id:4}, rating: 4.5, numReviews: 5, countInStock: 53, imagesUrls:['../assets/Products/pro-10.jpg']},
    {_id:"11", data:[{name:'dell',    description:"this is labtop"}],   price:200,  discount:0,    categoryId:{id:5}, rating: 3.8, numReviews: 3, countInStock: 92, imagesUrls:['../assets/Products/pro-11.jpg']},
    {_id:"12", data:[{name:'tablet',  description:"this is tablet"}],   price:900,  discount:50,   categoryId:{id:6}, rating: 4., numReviews: 2, countInStock: 13, imagesUrls:['../assets/Products/pro-12.jpg']},
    {_id:"13", data:[{name:'screen',  description:"this is screen"}],   price:2000, discount:300,  categoryId:{id:1}, rating: 4.0, numReviews: 4, countInStock: 11, imagesUrls:['../assets/Products/pro-13.jpg']},
    {_id:"14", data:[{name:'TVscreen',description:"this is screen"}],   price:3700, discount:800,  categoryId:{id:4}, rating: 4.7, numReviews: 2, countInStock: 7,  imagesUrls:['../assets/Products/pro-14.jpg']},
    {_id:"15", data:[{name:'Headset', description:"this is Headset"}],  price:450,  discount:70,   categoryId:{id:1}, rating: 5.0, numReviews: 1, countInStock: 25, imagesUrls:['../assets/Products/pro-15.jpg']}
>>>>>>> fc5e89b3bcdea0e8e08acb627c02e1f86d9e65e1
  ],
  


  // products:[
  //   {_id:1,  data:[{name:'camera',  description:"this is camera"}],   price:2000, discount:200,  categoryId:{id:1}, rating: 4.5, numReviews: 10, countInStock: 17, imagesUrls:['../assets/Products/pro-1.jpg' ]},
  //   {_id:2,  data:[{name:'phone',   description:"this is phone"}],    price:1000, discount:100,  categoryId:{id:2}, rating: 5.0, numReviews: 13, countInStock: 38, imagesUrls:['../assets/Products/pro-2.jpg' ]},
  //   {_id:3,  data:[{name:'labtop',  description:"this is labtop"}],   price:800,  discount:50,   categoryId:{id:3}, rating: 3.5, numReviews: 22, countInStock: 41, imagesUrls:['../assets/Products/pro-3.jpg' ]},
  //   {_id:4,  data:[{name:'camera',  description:"this is camera"}],   price:5000, discount:300,  categoryId:{id:4}, rating: 2.0, numReviews: 56, countInStock: 62, imagesUrls:['../assets/Products/pro-4.jpg' ]},
  //   {_id:5,  data:[{name:'labtop',  description:"this is labtop"}],   price:7000, discount:500,  categoryId:{id:5}, rating: 2.5, numReviews: 17, countInStock: 95, imagesUrls:['../assets/Products/pro-5.jpg' ]},
  //   {_id:6,  data:[{name:'phone',   description:"this is camera"}],   price:500,  discount:20,   categoryId:{id:6}, rating: 1.5, numReviews: 11, countInStock: 20, imagesUrls:['../assets/Products/pro-6.jpg' ]},
  //   {_id:7,  data:[{name:'mouse',   description:"this is mouse"}],    price:9000, discount:1000, categoryId:{id:1}, rating: 4.5, numReviews: 69, countInStock: 31, imagesUrls:['../assets/Products/pro-7.jpg' ]},
  //   {_id:8,  data:[{name:'keyboard',description:"this is keyboard"}], price:7000, discount:1000, categoryId:{id:2}, rating: 4.3, numReviews: 56, countInStock: 22, imagesUrls:['../assets/Products/pro-8.jpg' ]},
  //   {_id:9,  data:[{name:'watch',   description:"this is watch"}],    price:600,  discount:50,   categoryId:{id:3}, rating: 3.5, numReviews: 38, countInStock: 81, imagesUrls:['../assets/Products/pro-9.jpg' ]},
  //   {_id:10, data:[{name:'iphone',  description:"this is iphone"}],   price:1000, discount:200,  categoryId:{id:4}, rating: 2.5, numReviews: 16, countInStock: 53, imagesUrls:['../assets/Products/pro-10.jpg']},
  //   {_id:11, data:[{name:'dell',    description:"this is labtop"}],   price:200,  discount:0,    categoryId:{id:5}, rating: 3.8, numReviews: 10, countInStock: 92, imagesUrls:['../assets/Products/pro-11.jpg']},
  //   {_id:12, data:[{name:'tablet',  description:"this is tablet"}],   price:900,  discount:50,   categoryId:{id:6}, rating: 1.2, numReviews: 19, countInStock: 13, imagesUrls:['../assets/Products/pro-12.jpg']},
  //   {_id:13, data:[{name:'screen',  description:"this is screen"}],   price:2000, discount:300,  categoryId:{id:1}, rating: 5.0, numReviews: 81, countInStock: 11, imagesUrls:['../assets/Products/pro-13.jpg']},
  //   {_id:14, data:[{name:'TVscreen',description:"this is screen"}],   price:3700, discount:800,  categoryId:{id:4}, rating: 4.7, numReviews: 81, countInStock: 7,  imagesUrls:['../assets/Products/pro-14.jpg']},
  //   {_id:15, data:[{name:'Headset', description:"this is Headset"}],  price:450,  discount:70,   categoryId:{id:1}, rating: 5.0, numReviews: 66, countInStock: 25, imagesUrls:['../assets/Products/pro-15.jpg']}
  // ],

<<<<<<< HEAD
  category: [
    { _id: 1, name: 'computer accessories' },
    { _id: 2, name: 'computer pc' },
    { _id: 3, name: 'laptop' },
    { _id: 4, name: 'smart screen' },
    { _id: 5, name: 'mobile phones' },
    { _id: 6, name: "computer parts" },
=======
  category:[
    {_id:"1", name:'computer accessories'},
    {_id:"2", name:'computer pc'},
    {_id:"3", name:'laptop'},
    {_id:"4", name:'smart screen'},
    {_id:"5", name:'mobile phones'},
    {_id:"6", name:"computer parts"},
>>>>>>> fc5e89b3bcdea0e8e08acb627c02e1f86d9e65e1
  ]
};

export default data;
